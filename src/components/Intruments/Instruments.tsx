import React from "react";
import Title from "../Title";
import { useTranslation } from "@/src/app/i18n";

type InstrumentsType = {
  lng: supportedLangs;
};
export default async function Instruments({ lng }: InstrumentsType) {
  const { t } = await useTranslation(lng, "page");
  return (
    <div>
      <Title>{}</Title>
    </div>
  );
}
