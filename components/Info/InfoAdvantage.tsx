import React, { useState, useEffect } from "react";
import { Type, TypeInfo } from "../../utils/types";
import { capitalize, cleanString } from "../../utils";
import Info from "./Info";
import Badge, { BadgeDanger } from "../Badge";

type Advantage = "strong" | "weak";

interface InfoAdvantageProps {
  types: Type[];
  advantage: Advantage;
}
const InfoAdvantage: React.FC<InfoAdvantageProps> = ({types, advantage}) => {
  const [typesInfo, setTypesInfo] = useState([] as TypeInfo[]);
  const title = advantage === "strong" ? "Strong against" : "Weak against";
  
  useEffect(() => {
    types.forEach((type) => {
      fetch(type.type.url)
        .then(result => {
          return result.json();
        })
        .then(json => {
          setTypesInfo([...typesInfo, json]);
        })
    })
  }, [types]);
  
  const dualType = types.length == 2;

  return (
    <Info title={title} variant="secondary">
      <div className="">
        {types.map(type => {
          return (
            <p
              key={types?.type?.name}
              className={"m-1 rounded-sm"}
              >
                {cleanString(capitalize(type?.type?.name))}              
              </p>
          )
        })}
      </div>
    </Info>
  )
}

export default InfoAdvantage;