"use client";

import Link from "next/link";
import Navlink from "./Navlink";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverLay from "./MenuOverLay";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "#about" },
  { label: "Projects", path: "#projects" },
  { label: "Contact", path: "#contact" },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-95  bg-transparent backdrop-blur-sm">
      <div className="flex flex-wrap items-center justify-between mx-auto p-5">
        <Link
          href="/"
          className="text-3xl md:text-3xl text-white font-semibold tracking-tight"
        >
          <span className="tracking-tighter">MD</span>
          <span className="text-sm text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Christien
          </span>
        </Link>
        <div className="block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-2 py-1 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-slate-200"
            >
              <Bars3Icon className="h-6 w-6 text-[#ADB7BE]" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-2 py-1 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-slate-200"
            >
              <XMarkIcon className="h-6 w-6 text-[#ADB7BE]" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 sm:flex-row md:space-x-8 mt-0">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Navlink href={link.path} label={link.label} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverLay links={navLinks} /> : null}
    </nav>
  );
};

export default Navbar;

