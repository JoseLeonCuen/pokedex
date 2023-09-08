import React, { useState, useEffect } from "react";
import Image from "next/image";
import { replaceDashWithSpace } from "../../utils";
import Info from "./Info";

interface InfoImageProps {
  sprites: {
    [key: string]: string | null;
  }
  title?: string;
}

const spritesToShow = [
  "front_default",
  "front_shiny"
];

const InfoType: React.FC<InfoImageProps> = ({title, sprites}) => {
  const spriteURLs = spritesToShow.map( (sprite: string) => {
    return sprites[sprite];
  });

  if (spriteURLs[0] === null) {
    return null;
  }

  return (
    <Info>
      <div className="flex place-content-center">
        {spriteURLs.map( (url, idx) => {
          return url ? (
          <Image
            key={spritesToShow[idx]}
            src={url}
            alt={replaceDashWithSpace(spritesToShow[idx] + " image of the pokemon")}
            width={100}
            height={100}
          />
          ) : (null);
        } )}
      </div>
    </Info>
  )
}

export default InfoType;