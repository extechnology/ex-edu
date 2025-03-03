"use client";

import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useTheme } from "next-themes";
import { FaSun, FaMoon } from "react-icons/fa";
import Link from "next/link";
import GoogleTranslateWidget from "./Translator";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="dark:bg-slate-950/50 bg-amber-50 top-0 left-0 right-0 backdrop-blur-md fixed z-50 ">
      <nav className=" text-white py-2  flex justify-between items-center max-w-7xl mx-auto ">
        {/* Logo */}
        <div className="text-xl font-bold flex items-center">
          <Link href={"/"}>
            <img
              src="/EX_TECHNOLOGY_LOGO-01.png"
              alt=""
              className="w-20 py-1"
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 dark:text-white text-gray-600">
          <li className="hover:text-gray-400 cursor-pointer">Home</li>
          <li className="hover:text-gray-400 cursor-pointer">About </li>
          <li className="hover:text-gray-400 cursor-pointer">Services</li>
          <li className="hover:text-gray-400 cursor-pointer">Portfolio</li>
          <li className="hover:text-gray-400 cursor-pointer">Contact</li>
        </ul>

        {/* Members Area Button (Visible Always) */}
        <div className="flex items-center gap-7">
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded dark:text-white text-gray-600 hover:scale-110 duration-300"
            >
              {theme === "dark" ? <FaSun size={25} /> : <FaMoon size={25} />}
            </button>
          )}
          <GoogleTranslateWidget />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <div
          className={`absolute top-16 left-0 w-full bg-black flex flex-col items-center space-y-4 py-6 transition-transform duration-300 ${
            isOpen ? "translate-y-0" : "-translate-y-full"
          } md:hidden`}
        >
          <ul>
            <li className="hover:text-gray-400 cursor-pointer">Courses</li>
            <li className="hover:text-gray-400 cursor-pointer">
              Learning Paths
            </li>
            <li className="hover:text-gray-400 cursor-pointer">Membership</li>
            <li className="hover:text-gray-400 cursor-pointer">Forum</li>
            <li className="hover:text-gray-400 cursor-pointer">Contact</li>
          </ul>
          <button className="bg-white text-black px-4 py-2 rounded-full text-sm font-semibold">
            Members Area
          </button>
        </div>
      </nav>
    </div>
  );
}
