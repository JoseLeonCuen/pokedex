import React, { useEffect, useState, Dispatch, SetStateAction } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { Region } from "../utils/types";
import { capitalize } from "../utils/utils";
import Button from "./Button";

const GenerationMenu: React.FC = () => {
  const [regions, setRegions]: [Region[], Dispatch<SetStateAction<[]>>] = useState([]);
  const [showOptions, setShowOptions] = useState(true);

  const router = useRouter();

  useEffect(() => {
    console.log("FETCHING REGIONS:::");
    fetch(`https://pokeapi.co/api/v2/region/`)
      .then(result => {
        return result.json();
      })
      .then(json => {
        setRegions(json.results);
      })
  }, []);

  function visitRegion(regionName: string, id: number) {
    router.push({ pathname: `/regions/${regionName}`, query: {id}})
  }

  return (
  <div className="md:w-40 sm:w-20">
    <Button
      onClick={(() => setShowOptions(!showOptions))}
      variant="menu"
    >
      Gen<span className="md:inline sm:hidden">eration</span>s
    </Button>
    {showOptions ? (
      <div className="px-2">
        {regions.length ? (
          <ul>
            {regions.map((region, idx) => {
              return (
                <li className="group" key={region.name}>
                  <Link className="submenu" href={{ pathname: `/regions/${region.name}`, query: {id: idx}}}>
                    <p>{idx+1}<span className="md:inline sm:hidden">{"- " + capitalize(region.name)}</span></p>
                  </Link>
                </li>
              )
            })}
          </ul>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    ) : (
      null
    )}
  </div>
  )
}

export default GenerationMenu;