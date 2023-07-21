import React, { useEffect, useState, Dispatch, SetStateAction } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { Region } from "../utils/types";
import capitalize from "../utils/capitalize";
import Button from "./Button";

const PokedexMenu: React.FC = () => {
  const [regions, setRegions]: [Region[], Dispatch<SetStateAction<[]>>] = useState([]);
  const [showOptions, setShowOptions] = useState(false);

  const router = useRouter();

  useEffect(() => {
    console.log("FETCHING REGIONS:::");
    fetch(`https://pokeapi.co/api/v2/region/`)
      .then(result => {
        return result.json();
      })
      .then(json => {
        console.log("JSON:::", json);
        setRegions(json.results);
      })
  }, []);

  function visitRegion(regionName: string) {
    // router.push(`/${regionName}`)
  }

  return (
  <div className="">
    <Button
      onClick={(() => setShowOptions(!showOptions))}
      variant="menu"
    >
      Pokédex
    </Button>
    {showOptions ? (
      <div className="px-2 py-1">
        {regions.length ? (
          <ul>
            {regions.map((region, idx) => {
              return (
                <li key={region.name}>
                  <Button onClick={() => visitRegion(region.name)} variant="submenu">
                    {/* {region.name} */}
                    <Link href={{pathname: `/regions/${region.name}`, query: {id: idx + 1} }}>{capitalize(region.name)}</Link>
                  </Button>
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

export default PokedexMenu