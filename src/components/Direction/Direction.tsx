import React from "react";
import Title from "../Title";
import { useTranslation } from "@/src/app/i18n";
import { directionServices } from "./assets/directionServices";
import DirectionService from "./components/DirectionService";

type DirectionType = {
  lng: supportedLangs;
};
export default async function Direction({ lng }: DirectionType) {
  const { t } = await useTranslation(lng, "page");
  return (
    <div className="w-full py-24" id="direction">
      <div className="m-auto max-w-[1170px] px-4">
        <Title>{t("our_services")}</Title>
        <div className="grid md:grid-cols-3 grid-cols-2 md:gap-7 gap-3">
          {directionServices.map((directionService) => (
            <DirectionService
              lng={lng}
              service={directionService}
              key={directionService.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
