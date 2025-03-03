"use client";

import { useState, useEffect, useRef } from "react";
import { FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa";
import { useTheme } from "next-themes";
import Link from "next/link";
import GoogleTranslateWidget from "./Translator";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);

    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="dark:bg-slate-950/50 bg-amber-50 fixed top-0 left-0 right-0 backdrop-blur-md z-50">
      <nav className="text-white py-2 flex justify-between items-center max-w-7xl mx-auto px-4">
        {/* ✅ Logo */}
        <div className="text-xl font-bold flex items-center">
          <Link href="/">
            <img
              src="/EX_TECHNOLOGY_LOGO-01.png"
              alt="Logo"
              className="w-20 py-1"
            />
          </Link>
        </div>

        {/* ✅ Desktop Menu */}
        <ul className="hidden md:flex space-x-6 dark:text-white text-gray-600">
          {["Home", "About", "Services", "Portfolio", "Contact"].map((item) => (
            <li key={item} className="hover:text-gray-400 cursor-pointer">
              <Link href={`/${item.toLowerCase()}`}>{item}</Link>
            </li>
          ))}
        </ul>

        {/* ✅ Theme Toggle & Translator */}
        <div className="flex items-center gap-5">
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded dark:text-white text-gray-600 hover:scale-110 duration-300"
              aria-label="Toggle Dark Mode"
            >
              {theme === "dark" ? <FaSun size={25} /> : <FaMoon size={25} />}
            </button>
          )}
          <GoogleTranslateWidget />
        </div>

        {/* ✅ Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* ✅ Mobile Menu Dropdown */}
        {isOpen && (
          <div
            ref={menuRef}
            className="fixed inset-0 bg-black   bg-opacity-95 flex flex-col items-center justify-start py-6 transition-all duration-300 md:hidden"
          >
            {/* Mobile Logo */}
            <Link href="/" onClick={() => setIsOpen(false)}>
              <img
                src="/EX_TECHNOLOGY_LOGO-01.png"
                alt="Logo"
                className="w-20"
              />
            </Link>
            {/* ✅ Mobile Menu Items */}
            <motion.ul
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -100 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="text-white bg-black p-10 text-lg space-y-4 rounded-b-xl shadow-xl"
            >
              {["Home", "About", "Services", "Portfolio", "Contact"].map(
                (item) => (
                  <ul>
                    <li key={item}>
                      <Link
                        href={`/${item.toLowerCase()}`}
                        onClick={() => setIsOpen(false)}
                      >
                        {item}
                      </Link>
                    </li>
                  </ul>
                )
              )}
            </motion.ul>
            ;
          </div>
        )}
      </nav>
    </div>
  );
}
