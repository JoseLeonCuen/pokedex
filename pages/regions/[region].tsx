import React, { useEffect, useState, Dispatch, SetStateAction } from "react";
import { useRouter } from "next/router";
import { capitalize } from "../../utils/utils";
import { Region, Pokemon, Data } from "../../utils/types";
import ListItem from "../../components/ListItem";

export default function Region() {
  const [region, setRegion] = useState("");
  const [games, setGames] = useState([] as Data[]);
  const [pokemon, setPokemon] = useState([] as Pokemon[]);

  const router = useRouter();

  const regionId = router.query.id;
  useEffect(() => {
    console.log("FETCHING SINGLE REGION:::");
    fetch(`https://pokeapi.co/api/v2/region/${regionId}`)
      .then(result => {
        return result.json();
      })
      .then(json => {
        setRegion(json?.name);
        setGames(json?.version_groups);
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
          setPokemon(pokemonData);
        })
      })
  }, [regionId]);

  return (
    region ? (
      <div className="p-2">
        <h1 className="p-2 w-full border-b-2">{capitalize(region)} Pokedex</h1>
        {/* GAMES */}
        {/* <ul className="p-2">
          {games.map( game => {
            return (
              <li className="bg-gray-200 m-1 max-w-sm" key={game.name}>{game.name}</li>
            )
          })}
        </ul> */}
        <hr />
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