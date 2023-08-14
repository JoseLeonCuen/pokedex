import React, { useState, useEffect } from "react";

export interface ToggleProps {
  mode: boolean;
  setMode: (mode: boolean) => void;
}

const ThemeToggle: React.FC<ToggleProps> = ({mode, setMode}) => {
  return (
    <div className="p-1 bg-blue-100 self-end border-2 border-blue dark:border-blue-light text-xs">
      <input
        id="themetoggle"
        type="checkbox"
        hidden={true}
        onClick={() => {
          setMode(!mode);
      }}/>
      <label tabIndex={0} htmlFor="themetoggle" className="mx-2">
        {mode ? (
          <span>Light mode</span>
        ) : (
          <span>Dark mode</span>
        )}
      </label>
    </div>
  )
}

export default ThemeToggle