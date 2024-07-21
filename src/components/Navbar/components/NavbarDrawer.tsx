"use client";
import React, { useState } from "react";
import { Drawer, IconButton } from "@mui/material";
import Image from "next/image";
import logo from "@/public/assets/logo.svg";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import ClientLink from "../../ClientLink";
import { useTranslation } from "@/src/app/i18n/client";
import { navItemsMobile } from "../assets/navItemslist";
import CustomButton from "../../CustomButton";
import Link from "next/link";

export default function NavbarDrawer({ lng }: { lng: supportedLangs }) {
  const [state, setState] = useState(false);
  const { t } = useTranslation(lng, "navbar");
  return (
    <>
      <IconButton onClick={() => setState(true)}>
        <MenuIcon />
      </IconButton>
      <Drawer anchor={"right"} open={state} onClose={() => setState(false)}>
        <div className="w-screen h-screen bg-background flex flex-col justify-between overflow-hidden">
          <div className="px-4 w-full h-16 flex justify-between items-center">
            <Image src={logo} alt="logo" className="w-24 h-8 p-0 m-0" />
            <IconButton onClick={() => setState(false)}>
              <CloseIcon />
            </IconButton>
          </div>
          <div className="flex flex-col justify-between">
            {navItemsMobile.map((navItem) => (
              <ClientLink
                key={navItem.id}
                activeClass="active-scrollLink"
                to={navItem.id}
                className="py-3 text-3xl text-black text-center font-bold"
              >
                {t(navItem.id)}
              </ClientLink>
            ))}
          </div>
          <div className="px-4 flex flex-col gap-5 justify-center mb-12">
            <CustomButton className="w-full px-4 py-3 font-bold text-2xl">
              <ClientLink
                to={"contact"}
                className="h-full w-full flex justify-center items-center"
              >
                Contact
              </ClientLink>
            </CustomButton>
            <div className="w-full flex justify-center gap-5">
              <Link
                href={""}
                className="rounded-full bg-primary text-white p-3 h-12 flex items-center justify-center aspect-square text-xl"
              >
                <InstagramIcon />
              </Link>
              <Link
                href={""}
                className="rounded-full bg-primary text-white p-3 h-12 flex items-center justify-center aspect-square text-xl"
              >
                <TwitterIcon />
              </Link>
              <Link
                href={""}
                className="rounded-full bg-primary text-white p-3 h-12 flex items-center justify-center aspect-square text-xl"
              >
                <YouTubeIcon />
              </Link>
            </div>
          </div>
        </div>
      </Drawer>
    </>
  );
}
