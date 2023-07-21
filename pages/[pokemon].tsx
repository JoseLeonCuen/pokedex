import React, { useEffect, useState, Dispatch, SetStateAction } from "react";
import { useRouter } from "next/router";
import capitilize from "../utils/capitalize";
import { Pokemon } from "../utils/types";
import InfoType from "../components/InfoType";
import InfoAbility from "../components/InfoAbility";

export default function Pokemon() {
  const [pokemon, setPokemon]: [Pokemon | null, Dispatch<SetStateAction<null>>] = useState(null);
  const router = useRouter();
  const pokemonName: string | string[] = router?.query?.pokemon || "";
  useEffect(() => {
    if(pokemonName) {
      console.log("FETCHING POKEMON:::");
      fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        .then(result => {
          return result.json();
        })
        .then(json => {
          console.log("JSON:::", json);
          setPokemon(json);
        })
    }
  }, [pokemonName]);
  
  return (
    <div className="p-2">
      {pokemon === null ? (
        <h1>Loading... </h1>
      ) : (
        <div className="">
          <h1>{capitilize(pokemon.name)}</h1>
          <hr />
          <div className="flex">
            <InfoType types={pokemon.types} />
            <InfoAbility abilities={pokemon.abilities} />
          </div>
        </div>
      )}
    </div>
  )
}