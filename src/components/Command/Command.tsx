import React from "react";
import Title from "../Title";
import { useTranslation } from "@/src/app/i18n";
import Counter from "./components/Counter";
import Image from "next/image";
import CommandSvg from "@/public/assets/command_section.svg";

type CommandType = {
  lng: supportedLangs;
};
export default async function Command({ lng }: CommandType) {
  const { t } = await useTranslation(lng, "page");
  return (
    <div id="command" className="w-full bg-background py-20">
      <div className="m-auto max-w-[1170px] px-4">
        <Title>{t("command_title")}</Title>
        <div className="flex w-full min-[950px]:flex-row flex-col-reverse gap-16">
          <div className="flex-1 flex flex-col">
            <p className="text-xl mb-6 font-medium">{t("command_desc")}</p>
            <Counter />
            <p className="md:text-4xl text-2xl font-bold text-secondary">
              {t("command_number")}
            </p>
          </div>
          <div className="flex-1">
            <Image
              src={CommandSvg}
              alt={"command svg"}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
