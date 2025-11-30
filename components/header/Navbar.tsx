"use client";

import { Menu, Search, ShoppingCart, X } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { UserButton } from "@clerk/nextjs";

export default function Navbar() {
  const cart: number[] = [1, 2];
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const handleToggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/20">
      <div className="container mx-auto flex h-14 items-center justify-between">

        {/* Left Section */}
        <Link href="/" className="font-bold text-lg">
          Gourate
        </Link>

        {/* Center Navbar - Desktop Only */}
        <div className="hidden md:flex">
          <ul className="flex gap-x-4">
            <li>Menu</li>
            <li>Menu</li>
            <li>Menu</li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-3 md:space-x-4">

          {/* Search Input */}
          <div className="relative hidden sm:block">
            <Search className="absolute top-2 left-3 text-gray-500" />
            <Input placeholder="Search menu..." className="pl-10 w-[160px]" />
          </div>

          {/* Cart */}
          <Link href="/cart" className="relative">
            <Button variant="ghost" className="relative h-10 w-10 p-0">
              <ShoppingCart className="h-5 w-5" />
              {cart.length > 0 && (
                <span className="flex items-center justify-center bg-red-500 text-white w-4 h-4 rounded-full text-xs absolute -top-1 -right-1">
                  {cart.length}
                </span>
              )}
            </Button>
          </Link>

          {/* Clerk Profile Button (Desktop + Mobile) */}
          <div className="hidden sm:block">
            <UserButton afterSignOutUrl="/signin" />
          </div>

          {/* Mobile Menu Toggle Button */}
          <Button
            size="icon"
            variant="ghost"
            className="md:hidden block"
            onClick={handleToggleMenu}
          >
            {menuOpen ? <X className="text-gray-500" /> : <Menu className="text-gray-500" />}
          </Button>
        </div>

        {/* Mobile Dropdown */}
        {menuOpen && (
          <div className="md:hidden w-full absolute top-14 right-0 px-4 py-2 border-t bg-background">
            <div className="w-full space-y-4 bg-background rounded-md p-4 shadow-md">
              <Link href="/menu" className="block text-sm font-medium">Menu</Link>
              <Link href="/about" className="block text-sm font-medium">About</Link>
              <Link href="/admin" className="block text-sm font-medium">Admin</Link>

              {/* Mobile Search */}
              <div className="mt-2 flex items-center">
                <Search className="text-gray-500 size-5" />
                <Input placeholder="Search menu..." className="w-full" />
              </div>

              {/* Mobile Clerk User Button */}
              <div className="pt-2 border-t">
                <UserButton afterSignOutUrl="/signin" />
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
