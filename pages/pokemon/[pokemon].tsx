import React, { useEffect, useState, Dispatch, SetStateAction } from "react";
import { useRouter } from "next/router";
import { capitalize, genderize } from "../../utils/utils";
import { Pokemon } from "../../utils/types";
import InfoType from "../../components/Info/InfoType";
import InfoAbility from "../../components/Info/InfoAbility";
import InfoImage from "../../components/Info/InfoImage";
import InfoGeneral from "../../components/Info/InfoGeneral";

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
          console.log("PKMN INFO:::", json);
          setPokemon(json);
        })
    }
  }, [pokemonName]);
  
  return (
    <div className="">
      {pokemon !== null ? (
        <div className="">
          <h1 className="px-4 py-2 text-2xl border-b-2 border-blue-light">{capitalize(genderize(pokemon.name))}</h1>
          <div className="m-2 flex flex-wrap md:flex-row sm:flex-col">
            <InfoImage sprites={pokemon.sprites}/>
            <InfoType types={pokemon.types} />
            <InfoAbility abilities={pokemon.abilities} />
            <InfoGeneral weight={pokemon.weight} height={pokemon.height} id={pokemon.id} />
          </div>
        </div>
      ) : (
        <h1>Loading... </h1>
      )}
    </div>
  )
}