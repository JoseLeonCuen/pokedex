import React from "react";

const Loading: React.FC = () => {
  return (
    <div className="h-full flex justify-center place-items-center">
      <div className="
        z-20
        border-8 rounded-full w-20 h-20        
        border-blue-dark dark:border-blue-light
        overflow-hidden relative
        animate-spin

        before:z-30
        before:w-8 before:h-8 before:absolute
        before:rounded-full
        before:left-4 before:top-4
        before:bg-white before:dark:bg-blue-darkest
        before:border-blue-dark before:dark:border-blue-light
        before:border-8

        after:z-10
        after:w-16 after:h-9 after:absolute
        after:bg-blue-dark after:dark:bg-blue-light
        after:border-blue-dark after:dark:border-blue-light
        after:border-b-8
        "
        />
    </div>
  )
};

export default Loading;