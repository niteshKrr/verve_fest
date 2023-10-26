"use client";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import Link from "next/link";
import Image from "next/image";

export default function Navbaar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = ["Home", "All_events", "About"];

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      className="bg-gradient-to-r from-orange-400 via-red-500 to-pink-500"
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          {/* // add your logo here */}
          <Link href="/">
            <p className="font-bold font-mono text-xl text-inherit">VERVE</p>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link className="font-bold" href="/">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="/all_events" className="font-bold mx-4">
            Events
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="font-bold" href="/about">
            About
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Link className="font-bold" href="/">
            <Image
              alt="Loading..."
              height={40}
              src="/daksha_logo.png"
              width={40}
            />
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              href={
                item.toLowerCase() === "home" ? "/" : `/${item.toLowerCase()}`
              }
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
