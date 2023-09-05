import React, { useEffect, useState, Dispatch, SetStateAction } from "react";
import { useRouter } from "next/router";
import { capitalize, isFromGen } from "../../utils";
import { Pokemon, Data, GenName} from "../../utils/types";
import ListItem from "../../components/ListItem";
import Loading from "../../components/Loading";

export default function Generation() {
  const [region, setRegion] = useState("");
  const [pokemon, setPokemon] = useState([] as Pokemon[]);

  const router = useRouter();

  const genName= router.query.regions as GenName;
  useEffect(() => {
    setPokemon([]);
    fetch(`https://pokeapi.co/api/v2/region/${genName}`)
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
          const pokemonFromThisGen = pokemonData.filter( (pokemon: Pokemon) => {
            return isFromGen(genName, pokemon.pokemon_species.url);
          })
          setPokemon(pokemonFromThisGen);
        })
      })
  }, [genName]);

  return (
    region ? (
      <div className="p-2 h-full">
        { pokemon.length ? (
          <>
            <h2 className="p-2 w-full border-b-2">{capitalize(region)} Pokédex</h2>
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
            </ul>
          </> ): (
            <Loading />
          )
        }
      </div>
    ) : (
    <div className="p-2 border-1 h-full">
      <Loading />
    </div>
   )
  )
}