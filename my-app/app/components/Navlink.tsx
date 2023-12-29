import Link from "next/link";
import React from "react";

interface Props {
  href: string;
  label: string;
}

const Navlink = ({ href, label }: Props) => {
  return (
    <Link
      href={href}
      className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-l rounded md:p-0 hover:text-white"
    >
      {label}
    </Link>
  );
};

export default Navlink;
