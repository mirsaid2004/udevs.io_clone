import React, { HTMLAttributes } from "react";
import { clsx } from "clsx";
import { service } from "../assets/servicesList";
import Title from "../../Title";
import { useTranslation } from "@/src/app/i18n";
import ServiceInfoPart from "./ServiceInfoPart";

type ServiceType = {
  lng: supportedLangs;
  service?: Omit<service, "side_img">;
  sideImg: React.ReactNode;
} & HTMLAttributes<HTMLDivElement>;

export default async function Service({
  lng,
  service,
  className,
  sideImg,
  ...rest
}: ServiceType) {
  const { t } = await useTranslation(lng, "page");
  return (
    <div className={clsx("w-full py-20", className)} {...rest}>
      <div className="m-auto max-w-[1170px] px-4">
        <Title>{t(service?.title)}</Title>
        {service?.direction === "ltr" ? (
          <div className="flex gap-16 min-[950px]:flex-row flex-col-reverse">
            <ServiceInfoPart lng={lng} service={service} />
            {sideImg}
          </div>
        ) : (
          <div className="flex gap-16 min-[950px]:flex-row flex-col">
            {sideImg}
            <ServiceInfoPart lng={lng} service={service} />
          </div>
        )}
      </div>
    </div>
  );
}
