import { useTranslation } from "@/src/app/i18n";
import Image from "next/image";
import React from "react";

type DirectionServiceType = {
  lng: supportedLangs;
  service: {
    img: string;
    title: string;
  };
};
export default async function DirectionService({
  service,
  lng,
}: DirectionServiceType) {
  const { t } = await useTranslation(lng, "page");
  return (
    <div className="p-3 md:p-8 bg-background overflow-hidden rounded-lg">
      <Image
        src={service.img}
        alt={service.title}
        className="p-0 m-0 w-20 relative right-6"
      />
      <div className="mb-5">
        <h3 className="md:text-xl text-base">{t(service.title)}</h3>
      </div>
    </div>
  );
}
