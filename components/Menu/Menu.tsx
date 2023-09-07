import React, { useEffect, useState, Dispatch, SetStateAction, ReactNode } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { Region } from "../../utils/types";
import { capitalize } from "../../utils";
import Button from "../Button";
import Loading from "../Loading";

interface NavMenuProps {
    options: any[];
    buttonText: string | React.ReactNode;
    category: string;
    open?: boolean;
    numbered?: boolean;
};

const NavMenu: React.FC<NavMenuProps> = ({options, buttonText, category, open = false, numbered = false}) => {
  const [showOptions, setShowOptions] = useState(open);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const router = useRouter();

  useEffect(() => {
    if(router.query[category]) {
        const index = options.findIndex( option => option.name.toLowerCase().includes(router.query[category]));
        setSelectedOption(index);
    } else {
        setSelectedOption(null);
    }
  }, [router]);

  return (
  <nav className="lg:w-52 sm:w-20 z-10 py-2">
    <Button
      onClick={(() => setShowOptions(!showOptions))}
      variant="menu"
    >
        {buttonText}
    </Button>
    {showOptions ? (
      <div className="px-2">
        {options.length ? (
          <ul>
            {options.map((option, idx) => {
                const selected = idx === selectedOption ? "selected" : "";
                let accessKey: number | string = idx + 1;
                accessKey = accessKey < 10 ? (
                accessKey.toString()
                ) : (
                "0"
                );
                return (
                <li className="group" key={option.name}>
                    <Link accessKey={accessKey} className={`submenu ${selected}`} href={{ pathname: `/${category}/${option.name}`}}>
                    {numbered ? (
                        <p>{idx+1}<span className="lg:inline sm:hidden">{" - " + capitalize(option.name)}</span></p>
                    ) : (
                        <p>{capitalize(option.name)}</p>
                    )

                    }
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

export default NavMenu;