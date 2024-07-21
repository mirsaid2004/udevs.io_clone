import React from "react";
import { footerItem } from "../assets/footerItemsList";
import { useTranslation } from "@/src/app/i18n";
import ClientLink from "../../ClientLink";

type FooterItemsType = { lng: supportedLangs; footerItem: footerItem };
export default async function FooterItems({
  footerItem,
  lng,
}: FooterItemsType) {
  const { t } = await useTranslation(lng, ["navbar", "footer"]);
  return (
    <div>
      <h3 className="font-bold text-lg text-[#000000CC] mb-4">
        {t(footerItem.title)}
      </h3>
      <div className="flex flex-col">
        {footerItem.list.map((footerItemList) => (
          <ClientLink
            to={footerItemList.id}
            key={footerItemList.id}
            className="text-primary text-lg cursor-pointer"
          >
            {t(footerItemList.title)}
          </ClientLink>
        ))}
      </div>
    </div>
  );
}
