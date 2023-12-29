import React from "react";
import Navlink from "./Navlink";

interface Navlink {
  label: string;
  path: string;
}

interface Props {
  links: Navlink[];
}

const MenuOverLay = ({ links }: Props) => {
  return (
    <ul className="flex flex-col py-4 items-center">
      {links.map((link) => (
        <li key={link.path}>
          <Navlink href={link.path} label={link.label} />
        </li>
      ))}
    </ul>
  );
};

export default MenuOverLay;
