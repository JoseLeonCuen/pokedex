import React from "react";
import ThemeToggle from "./ThemeToggle";

import Link from "next/link";

const Header = () => {
  return (
    <div className="p-3 text-center bg-blue-50 shadow-2">
      <h1><Link href="/">Pokedex Header</Link></h1>
      <div className="flex content-end bg-white">
        <ThemeToggle />
      </div>
    </div>
  )
}

export default Header;