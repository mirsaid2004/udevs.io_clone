import React from "react";
import Service from "./components/Service";
import { servicesList } from "./assets/servicesList";
import SecontBgTemplate from "@/public/assets/bg_pattern-u.png";
import Image from "next/image";

type ServicesType = {
  lng: supportedLangs;
};
export default function Services({ lng }: ServicesType) {
  return (
    <div id="services">
      {servicesList.map((serviceList) => (
        <Service
          id={serviceList.id}
          lng={lng}
          service={serviceList}
          key={serviceList.title}
          className={
            serviceList.direction == "ltr" ? "bg-template" : "bg-background"
          }
          sideImg={
            <div className="flex-1 relative min-[950px]:w-[48%] p-7 rounded-2xl overflow-hidden flex items-center justify-center">
              <Image
                src={SecontBgTemplate}
                priority={false}
                alt={"bg"}
                className="absolute top-0 left-0 w-full h-full object-cover object-center"
              />
              <Image
                src={serviceList.side_img}
                priority={false}
                alt={serviceList.title}
                className="relative z-10"
              />
            </div>
          }
        />
      ))}
    </div>
  );
}
