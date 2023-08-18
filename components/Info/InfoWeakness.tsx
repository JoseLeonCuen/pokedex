import React, { useState, useEffect } from "react";
import { 
  Type,
  TypeInfo,
  TypeData,
  CamelDamageRelationFrom,
  SnakeDamageRelationFrom,
  WeaknessRelations
} from "../../utils/types";
import { snakeToCamelCase, evaluateTypeWeakness } from "../../utils";
import Info from "./Info";
import WeaknessList from "./WeaknessList";


interface InfoWeaknessProps {
  types: Type[];
}

const InfoWeakness: React.FC<InfoWeaknessProps> = ({types}) => {
  const [typesInfo, setTypesInfo] = useState([] as TypeInfo[]);
  const [damageRelations, setDamageRelations] = useState({} as WeaknessRelations);

  const weaknessTitles = {
    noDamageFrom: "No damage",
    halfDamageFrom: "Half damage",
    doubleDamageFrom: "Double damage",
  };

  useEffect(() => {
    const typeArray: TypeInfo[] = [];
    setDamageRelations([]);
    types.forEach((type, idx) => {
      fetch(type.type.url)
        .then(result => {
          return result.json();
        })
        .then(json => {
          console.log("TYPE INFO!!", json);
          typeArray.push(json);
          if (idx == types.length-1) {
            setTypesInfo(typeArray);
          }
        })
    });
  }, [types]);
  
  useEffect(() => {
    let weaknesses: WeaknessRelations = {
      noDamageFrom: [],
      halfDamageFrom: [],
      doubleDamageFrom: []
    };
    typesInfo.forEach(pokemonType => {
      const relations = ["no_damage_from","half_damage_from", "double_damage_from"] as SnakeDamageRelationFrom[];
      relations.forEach( relation => {
        pokemonType.damage_relations[relation].forEach((type: TypeData) => {
          weaknesses = evaluateTypeWeakness(weaknesses, relation, type);
        })
      });
    });
    setDamageRelations(weaknesses);
  }, [typesInfo]);

  return (
    <Info title="Weaknesses" variant="secondary">
      <div className="">
        {Object.keys(damageRelations).map(relation => {
          return <WeaknessList
            key={relation}
            title={weaknessTitles[relation as CamelDamageRelationFrom]}
            damageRelation={damageRelations[relation as CamelDamageRelationFrom]}
          />
        })}
      </div>
    </Info>
  )
}

export default InfoWeakness;