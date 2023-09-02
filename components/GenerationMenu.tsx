import React, { useEffect, useState, Dispatch, SetStateAction } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { Region } from "../utils/types";
import { capitalize } from "../utils";
import Button from "./Button";
import Loading from "./Loading";

const GenerationMenu: React.FC = () => {
  const [regions, setRegions]: [Region[], Dispatch<SetStateAction<[]>>] = useState([]);
  const [showOptions, setShowOptions] = useState(true);
  const [selectedGen, setSelectedGen] = useState(null as number | null);

  const router = useRouter();

  useEffect(() => {
    const region = Number.parseInt(router.query.id as string);
    if (region) {
      setSelectedGen(region);
    }
  }, [router]);

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
  <nav className="md:w-40 sm:w-20">
    <Button
      onClick={(() => setShowOptions(!showOptions))}
      variant="menu"
    >
      Gen<span className="md:inline sm:hidden">eration</span>s
    </Button>
    {showOptions ? (
      <div className="px-2 h-full">
        {regions.length ? (
          <ul>
            {regions.map((region, idx) => {
              const selected = idx === selectedGen ? "selected" : "";
              let accessKey: number | string = idx + 1;
              accessKey = accessKey < 10 ? (
                accessKey.toString()
              ) : (
                "0"
              );
              return (
                <li className="group" key={region.name}>
                  <Link accessKey={accessKey} className={`submenu ${selected}`} href={{ pathname: `/regions/${region.name}`, query: {id: idx}}}>
                    <p>{idx+1}<span className="md:inline sm:hidden">{" - " + capitalize(region.name)}</span></p>
                  </Link>
                </li>
              )
            })}
          </ul>
        ) : (
          <Loading />
        )}
      </div>
    ) : (
      null
    )}
  </nav>
  )
}

export default GenerationMenu;