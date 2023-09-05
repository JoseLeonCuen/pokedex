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
    numbered?: boolean;
};

const NavMenu: React.FC<NavMenuProps> = ({options, buttonText, category, numbered = false}) => {
  const [showOptions, setShowOptions] = useState(true);
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
  <nav className="md:w-40 sm:w-20 sm:relative xs:absolute">
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
                        <p>{idx+1}<span className="md:inline sm:hidden">{" - " + capitalize(option.name)}</span></p>
                    ) : (
                        <p>capitalize(option.name)</p>
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