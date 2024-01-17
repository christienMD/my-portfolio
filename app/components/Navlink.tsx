import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface Props {
  href: string;
  label: string;
  onClick?: (id: string) => void;
}

const Navlink = ({ href, label, onClick }: Props) => {
  const currentPath = usePathname();
  const activePath = currentPath === href ? "text-white" : "";

  return (
    <Link
      href={href}
      className={`block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-base md:text-base rounded md:p-0 hover:text-white ${activePath}`}
    >
      {label}
    </Link>
  );
};

export default Navlink;
