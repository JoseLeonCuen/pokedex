import React, { useState, useEffect } from "react";
import Image from "next/image";
import { cleanString } from "../../utils/utils";
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

  return (
    <Info>
      <div className="flex place-content-center">
        {spriteURLs.map( (url, idx) => {
          return url ? (
          <Image
            key={spritesToShow[idx]}
            src={url}
            alt={cleanString(spritesToShow[idx])}
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