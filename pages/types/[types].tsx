import React, { useEffect, useState, Dispatch, SetStateAction } from "react";
import { useRouter } from "next/router";
import { isFromGen } from "../../utils";
import { Data, TypeName } from "../../utils/types";
import Loading from "../../components/Loading";
import List from "../../components/List";

export default function Type() {
  const [type, setType] = useState("");
  const [pokemon, setPokemon] = useState([] as Data[]);

  const router = useRouter();

  const typeName= router.query.types as TypeName;
  useEffect(() => {
    setPokemon([]);
    fetch(`https://pokeapi.co/api/v2/type/${typeName}`)
      .then(result => {
        return result.json();
      })
      .then(json => {
        setType(json?.name);
        return json;
      })
      .then(json => {
        const pokemonData = json.pokemon.map( (pkmn: any) => ({
            name: pkmn.pokemon.name,
            url: pkmn.pokemon.url
        }))
        setPokemon(pokemonData);
      })
  }, [typeName]);


  return (
    pokemon.length ? (
      <List
        title={type + " type Pokédex"}
        listItems={pokemon}
      />
    ) : (
      <div className="p-2 border-1 h-full">
        <Loading />
      </div>
    )
  )
}