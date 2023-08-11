import React from "react";
import Badge from "./Badge";
import Link from "next/link";

interface BadgeLinkProps {
  href: string;
  direction: "next" | "prev";
};

const BadgeLink: React.FC<BadgeLinkProps> = ({href, direction}) => {
  return (
    <Link className="flex-grow-0" href={href}>
      <Badge
        className={`text-xl px-3 p-1`}
      >
        {direction == "next" ? ">" : "<"}
      </Badge>
    </Link>
  )
}

export default BadgeLink;