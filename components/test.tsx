"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu } from "lucide-react";

import { ChevronDown } from "lucide-react";

export default function Navbar1() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: "Gold", href: "#" },
    { name: "Kashmiri Gold", href: "#" },
    { name: "Silver", href: "#" },
    { name: "Diamond", href: "#" },
    { name: "About Us", href: "#" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm items-center">
      <div className="container w-full px-1 py-5">
        {/* Mobile View */}
        <div className="lg:hidden flex items-center justify-between w-full">
          {/* Mobile Menu Button */}
          <button
            className="p-2 justfy-left"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>
          
          {/* Center Logo - Mobile */}
          <Link href="/" className="flex items-center gap-2">
            <img src="/kshinelogo.png" alt="Logo" className="h-8 w-auto" />
            <span className="font-bold font-[Dancing_Script] text-2xl">K-Shine Jewellers</span>
          </Link>
          
          {/* Our Stores Button - Mobile */}
          <button 
            className="px-3 py-1.5 text-sm bg-[#800020] text-white rounded-md hover:bg-[#6a001c] transition-colors duration-200 font-medium"
            onClick={() => {
              // Add your store locator or stores page navigation logic here
            }}
          >
            Our Stores
          </button>
        </div>
        
        {/* Desktop View */}
        <div className="hidden lg:flex items-center justify-between">
          {/* Left: Logo */}
          <Link href="/" className="flex items-center gap-2">
            <img src="/kshinelogo.png" alt="Logo" className="h-10 w-auto" />
           <span className="font-bold font-[Dancing_Script] text-3xl">K-Shine Jewellers</span>
          </Link>

        {/* Center: Menu (Desktop) */}
        <nav className="hidden lg:flex items-center gap-10 text-sm font-['Montserrat'] font-light">
          {menuItems.map((item, idx) => (
            <div key={idx} className="group relative">
              <Link href={item.href} className="hover:text-[#800020] transition flex items-center gap-1 py-2 px-2 font-['Montserrat']">
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

          {/* Right: Our Stores Button - Desktop */}
          <div className="hidden lg:flex items-center gap-4">
            <button 
              className="px-4 py-2 cursor-pointer bg-[#800020] text-white rounded-md hover:bg-[#6a001c] transition-colors duration-200 font-medium"
              onClick={() => {
                // Add your store locator or stores page navigation logic here
              }}
            >
              Our Stores
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t shadow-sm">
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
