import React from "react";
import ThemeToggle, {ToggleProps } from "./ThemeToggle";

import Link from "next/link";

const Header: React.FC<ToggleProps> = ({mode, setMode}) => {
  return (
    <div className="
      col-span-5
      p-3 text-center bg-blue-50 shadow-2 border-b-2 border-blue-light
    ">
      <h1><Link accessKey="h" href="/">Pokédex</Link></h1>
      <div className="flex place-content-end h-fit">
        <ThemeToggle mode={mode} setMode={setMode}/>
      </div>
    </div>
  )
}

export default Header;