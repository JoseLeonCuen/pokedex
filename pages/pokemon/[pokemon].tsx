import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { namePokemon } from "../../utils/utils";
import { PokemonSpecies } from "../../utils/types";
import InfoType from "../../components/Info/InfoType";
import InfoAbility from "../../components/Info/InfoAbility";
import InfoImage from "../../components/Info/InfoImage";
import InfoGeneral from "../../components/Info/InfoGeneral";
import BadgeLink from "../../components/Badge/BadgeLink";

export default function Pokemon() {
  const [pokemon, setPokemon] = useState(null as PokemonSpecies | null);
  const router = useRouter();
  const pokemonNumber: number = Number.parseInt(router?.query?.pokemon as string);

  useEffect(() => {
    if(pokemonNumber) {
      console.log("FETCHING POKEMON:::");
      fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonNumber}`)
        .then(result => {
          return result.json();
        })
        .then(json => {
          console.log("PKMN INFO!!", json);
          setPokemon(json);
        })
    }
  }, [pokemonNumber]);
  
  return (
    <div className="">
      {pokemon !== null ? (
        <div className="">
          <h1 className="px-4 py-2 text-2xl border-b-2 border-blue-light">
            <BadgeLink href={`/pokemon/${pokemonNumber-1}`} direction="prev" />
            <span className="mx-2">{`# ${pokemonNumber} - ${namePokemon(pokemon.name)}`}</span>
            <BadgeLink href={`/pokemon/${pokemonNumber+1}`} direction="next" />
          </h1>
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