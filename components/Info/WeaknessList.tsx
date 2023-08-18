import React from "react";
import { TypeData } from "../../utils/types";
import Badge, { BadgeType, BadgeMultiplier } from "../Badge";

interface WeaknessListProps {
  title: string;
  damageRelation?: TypeData[];
}

const WeaknessList: React.FC<WeaknessListProps> = ({title, damageRelation}) => {
  return (
    <div className="">
      <p>{title}</p>
        {damageRelation?.length ? (
          <div>
            <div>
            {damageRelation?.map( (type: TypeData) => (
              type.double ? (
                <BadgeMultiplier key={type.name} message={title == "Double damage" ? "x4" : "/4"}>
                  <BadgeType type={type.name} />
                </BadgeMultiplier>
              ) : (
                <BadgeType key={type.name} type={type.name} />
              )
            ))}
            </div>
          </div>
        ) : (
          <Badge>None</Badge>
        )}
    </div>
  )
}

export default WeaknessList;