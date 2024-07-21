import Image from "next/image";
import React from "react";
import HeroSvg from "@/public/assets/hero_section.svg";
import Logo from "@/public/assets/logo.svg";
import { useTranslation } from "@/src/app/i18n";
import TypeHero from "./components/TypeHero";
import CustomButton from "../CustomButton";
import ClientLink from "../ClientLink";

type HeroType = {
  lng: supportedLangs;
};

export default async function Hero({ lng }: HeroType) {
  const { t } = await useTranslation(lng, ["navbar", "page"]);
  const sequences = [
    t("services_1"),
    4000,
    t("services_2"),
    4000,
    t("services_3"),
    4000,
    t("services_4"),
    4000,
    t("services_5"),
    4000,
  ];
  console.log("hero");
  return (
    <section className="min-h-screen w-full">
      <div className="mt-20 bg-template">
        <div className="m-auto max-w-[1170px] px-4 py-28 flex flex-col gap-8 justify-center min-[950px]:justify-between min-[950px]:flex-row">
          <div className="flex-1 flex flex-col items-center min-[950px]:items-start">
            <Image
              src={Logo}
              alt="Logo"
              className=" w-24 h-8 min-[950px]:w-60 min-[950px]:h-28 mb-6"
            />
            <h1 className="text-font-color inline-block min-[950px]:text-4xl text-2xl font-bold mb-6">
              {t("page:about_u_devs")}
            </h1>
            {sequences && <TypeHero sequences={sequences} />}
            <CustomButton className="w-60 h-14 hidden items-center justify-center min-[950px]:flex">
              <ClientLink
                to={"contact"}
                className="h-full w-full flex justify-center items-center text-xl font-bold"
              >
                {t("contact")}
              </ClientLink>
            </CustomButton>
          </div>
          <div className="flex-1">
            <Image src={HeroSvg} alt="hero" className="w-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
