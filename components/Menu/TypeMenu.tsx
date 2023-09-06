import React, { useEffect, useState, Dispatch, SetStateAction } from "react";
import { Region } from "../../utils/types";
import Menu from "./Menu";

const TypeMenu: React.FC = () => {
  const [types, setTypes]: [Region[], Dispatch<SetStateAction<[]>>] = useState([]);

  useEffect(() => {
    console.log("FETCHING TYPE NAMES:::");
    fetch(`https://pokeapi.co/api/v2/type/`)
      .then(result => {
        return result.json();
      })
      .then(json => {
        setTypes(json.results);
      })
  }, []);

  return (
    <Menu
      options={types}
      buttonText={"Types"}
      category="types"
    />
  )
}

export default TypeMenu;