"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, Search, User, ShoppingBag } from "lucide-react";

import { ChevronDown } from "lucide-react";

export default function Navbar1() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: "All Jewellery", href: "#" },
    { name: "Collection", href: "#" },
    { name: "Gold", href: "#" },
    { name: "Diamond", href: "#" },
    { name: "Polki", href: "#" },
    { name: "Silver", href: "#" },
    { name: "Coins", href: "#" },
    { name: "About Us", href: "#" },
  ];

  return (
    <header className="w-full bg-white border-t-2 border-[#800020] shadow-sm">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        {/* Left: Logo */}
        <Link href="/" className="flex items-center gap-2">
          <img src="/kshinelogo.png" alt="Logo" className="h-10 w-auto" />
          <span className="font-bold text-lg">K-Shine Jewellers</span>
        </Link>

        {/* Center: Menu (Desktop) */}
        <nav className="hidden md:flex items-center gap-10 text-sm font-sans font-medium">
          {menuItems.map((item, idx) => (
            <div key={idx} className="group relative">
              <Link href={item.href} className="hover:text-[#800020] transition flex items-center gap-1 py-2 px-2 font-medium">
                {item.name}
                <ChevronDown className="w-4 h-4 mt-0.5" />
              </Link>
              {/* Dropdown Menu - Hidden by default, shown on hover */}
              <div className="absolute left-0 mt-1 w-48 bg-white shadow-lg rounded-md py-1 hidden group-hover:block z-50">
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Submenu Item 1</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Submenu Item 2</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Submenu Item 3</a>
              </div>
            </div>
          ))}
        </nav>

        {/* Right: Icons */}
        <div className="flex items-center gap-4">
          <Search className="w-5 h-5 cursor-pointer hover:text-[#800020]" />
          <User className="w-5 h-5 cursor-pointer hover:text-[#800020]" />
          <ShoppingBag className="w-5 h-5 cursor-pointer hover:text-[#800020]" />
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t shadow-sm">
          <nav className="flex flex-col p-4 gap-3 text-sm font-medium">
            {menuItems.map((item, idx) => (
              <Link
                key={idx}
                href={item.href}
                className="hover:text-[#800020] transition"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
