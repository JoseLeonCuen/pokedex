import React from "react";
import Badge from "./Badge";
import Link from "next/link";

interface BadgeLinkProps {
  href: string;
  direction: "next" | "prev";
};

const BadgeLink: React.FC<BadgeLinkProps> = ({href, direction}) => {
  return (
    <Link href={href}>
      <Badge
        className={`text-lg mx-1`}
      >
        {direction == "next" ? ">" : "<"}
      </Badge>
    </Link>
  )
}

export default BadgeLink;