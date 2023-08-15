import React from "react";
import { getGen, getHeight, getWeight } from "../../utils";
import Info from "./Info";

interface InfoGeneralProps {
  id: number;
  weight: number;
  height: number;
}

const InfoGeneral: React.FC<InfoGeneralProps> = ({id, height, weight}) => {
  const gen = getGen(id);
  return (
    <Info title="Misc">
      <div className="">
        <p className={"m-1 rounded-sm"}>
          Original Gen: {gen}
        </p>
        <p className={"m-1 rounded-sm"}>
          Height: {getHeight(height)}
        </p>
        <p className={"m-1 rounded-sm"}>
          Weight: {getWeight(weight)}
        </p>
      </div>
    </Info>
  )
}

export default InfoGeneral;