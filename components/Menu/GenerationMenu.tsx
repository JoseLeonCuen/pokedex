import React, { useEffect, useState, Dispatch, SetStateAction } from "react";
import { Region } from "../../utils/types";
import Menu from "./Menu";

const GenerationMenu: React.FC = () => {
  const [regions, setRegions]: [Region[], Dispatch<SetStateAction<[]>>] = useState([]);

  useEffect(() => {
    console.log("FETCHING REGION NAMES:::");
    fetch(`https://pokeapi.co/api/v2/region/`)
      .then(result => {
        return result.json();
      })
      .then(json => {
        setRegions(json.results);
      })
  }, []);

  return (
    <Menu
      options={regions}
      buttonText={<span>Gen<span className="md:inline sm:hidden">eration</span>s</span>}
      numbered={true}
      category="regions"
    />
  )
}

export default GenerationMenu;