import React, { useEffect, useState, Dispatch, SetStateAction } from "react";
import { useRouter } from "next/router";
import { capitalize, isFromGen } from "../../utils";
import { Pokemon, Data } from "../../utils/types";
import ListItem from "../../components/ListItem";

export default function Generation() {
  const [region, setRegion] = useState("");
  const [pokemon, setPokemon] = useState([] as Pokemon[]);

  const router = useRouter();

  const genId = Number.parseInt(router.query.id as string);
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/region/${genId + 1}`)
      .then(result => {
        return result.json();
      })
      .then(json => {
        setRegion(json?.name);
        return json;
      })
      .then(json => {
        const url = json.pokedexes[0]?.url;
        fetch(url)
        .then(result => {
          return result.json();
        })
        .then(json => {
          const pokemonData = json?.pokemon_entries;
          console.log("REGION DATA!!", pokemonData);
          const pokemonFromThisGen = pokemonData.filter( (pokemon: Pokemon) => {
            return isFromGen(genId, pokemon.pokemon_species.url);
          })
          setPokemon(pokemonFromThisGen);
        })
      })
  }, [genId]);

  return (
    region ? (
      <div className="p-2">
        <h2 className="p-2 w-full border-b-2">{capitalize(region)} Pokédex</h2>
        {/* POKEMON */}
        { pokemon.length ? (
          <ul className="p-2">
            {pokemon.map( pkmn => {
              let data = {
                name: pkmn.pokemon_species.name,
                url: pkmn.pokemon_species.url
              }
              return (
                <ListItem
                  key={pkmn.pokemon_species.name}
                  item={data}
                />
              )
            })}
          </ul>) : (
            <p>Loading pokemon...</p>
          )
        }
      </div>
    ) : (
    <div className="p-2 border-1">
      <p>Loading region...</p>
    </div>
   )
  )
}