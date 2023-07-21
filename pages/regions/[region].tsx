import React, { useEffect, useState, Dispatch, SetStateAction } from "react";
import { useRouter } from "next/router";
import capitalize from "../../utils/capitalize";
import { Region, Pokemon, Data } from "../../utils/types";

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
      <div className="p-2 border-1">
        <h1 className="p-2">{capitalize(region)} Pokedex</h1>
        <hr />
        <ul className="p-2">
          {games.map( game => {
            return (
              <li className="bg-gray-200 m-1 max-w-sm" key={game.name}>{game.name}</li>
            )
          })}
        </ul>
        <hr />
        <ul className="p-2">
          {pokemon.map( pkmn => {
            return (
              <li className="m-1 bg-gray-100 hover:bg-gray-300" key={pkmn.pokemon_species.name}>
                <button type="button" onClick={() => router.push(`/${pkmn.pokemon_species.name}`)}>
                  {pkmn.pokemon_species.name.replace(/-f/, " ♀").replace(/-m/, " ♂")}
                </button>
              </li>
            )
          })}
        </ul>
      </div>
    ) : (
    <div className="p-2 border-1">
      <p>Loading...</p>
    </div>
   )
  )
}