import React, { useEffect, useState, Dispatch, SetStateAction } from "react";
import { useRouter } from "next/router";
import { isFromGen } from "../../utils";
import { Pokemon, Data, GenName} from "../../utils/types";
import Loading from "../../components/Loading";
import List from "../../components/List";

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

  const listData = pokemon.map( pkmn => ({
    name: pkmn.pokemon_species.name,
    url: pkmn.pokemon_species.url
  }));

  return (
    pokemon.length ? (
      <List
        title={region + " Pokédex"}
        listItems={listData}
      />
    ) : (
      <div className="p-2 border-1 h-full">
        <Loading />
      </div>
    )
  )
}