import React from "react";
import logo from "@/public/assets/logo.svg";
import Image from "next/image";
import { navItems } from "./assets/navItemslist";
import NavItem from "./components/NavItem";
import CustomButton from "../CustomButton";
import ClientLink from "../ClientLink";
import NavbarDrawer from "./components/NavbarDrawer";

type NavbarType = {
  lng: supportedLangs;
};
export default function Navbar({ lng }: NavbarType) {
  return (
    <header className="fixed top-0 z-50 w-full shadow-gray-100 shadow-lg bg-white">
      <nav className=" m-auto max-w-[1170px] px-4 flex gap-5 justify-between items-center h-[72px]">
        <Image src={logo} alt="logo" className="w-24 h-8 p-0 m-0" />
        <ul className="gap-8 min-[950px]:flex hidden">
          {navItems.map((navItem) => (
            <NavItem navItem={navItem} lng={lng} key={navItem.id} />
          ))}
          <CustomButton className="h-10 w-28 font-bold p-0">
            <ClientLink
              to={"contact"}
              className="h-full w-full flex justify-center items-center"
            >
              Contact
            </ClientLink>
          </CustomButton>
        </ul>
        <div className="min-[950px]:hidden">
          <NavbarDrawer />
        </div>
      </nav>
    </header>
  );
}
