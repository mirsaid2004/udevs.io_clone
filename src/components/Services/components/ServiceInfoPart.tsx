import { useTranslation } from "@/src/app/i18n";
import React from "react";
import { service } from "../assets/servicesList";
import Image from "next/image";
import clsx from "clsx";

type ServiceInfoPartType = {
  lng: supportedLangs;
  service?: Omit<service, "side_img">;
};

export default async function ServiceInfoPart({
  lng,
  service,
}: ServiceInfoPartType) {
  const { t } = await useTranslation(lng, "page");
  return (
    <div className="flex-1">
      <p className="text-2xl text-dark font-medium mb-6">
        {t(service?.description)}
      </p>
      <div className="grid grid-cols-3 min-[950px]:gap-4 gap-2 my-10">
        {service?.directions?.map((direction) => (
          <div
            key={direction.title}
            className={clsx(
              "bg-background min-[950px]:p-3 min-[950px]:pr-5 p-2 rounded-lg",
              service.direction === "ltr" ? "bg-background" : "bg-secondary"
            )}
          >
            <Image
              src={direction.img}
              alt={direction.title}
              className="min-[950px]:w-14 w-10 min-[950px]:h-14 h-10 relative right-2"
            />
            <h4 className="min-[950px]:text-lg text-sm font-semibold truncate">
              {t(direction.title)}
            </h4>
          </div>
        ))}
      </div>
      {service?.technologies && (
        <div className="mt-10 mb-6">
          <h3 className="mb-8 text-3xl font-extrabold">{t("technologies")}</h3>
          <div className="flex flex-wrap gap-4 min-[950px]:gap-12">
            {service.technologies.map((technology) => (
              <div key={technology.title}>
                <Image
                  src={technology.img}
                  alt={technology.title}
                  className="min-[950px]:w-14 w-10 min-[950px]:h-14 h-10 mb-2"
                />
                <span className="text-lg min-[950px]:text-xl font-semibold">
                  {t(technology.title)}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
