import React from "react";
import Image from "next/image";
import { navItem } from "../types/navItem";
import { useTranslation } from "@/src/app/i18n";
import clsx from "clsx";

type ListItemType = {
  listItem: {
    id: string;
    img: string;
  };
  navItem: navItem;
  lng: supportedLangs;
};
export default async function ListItem({
  navItem,
  listItem,
  lng,
}: ListItemType) {
  const { t } = await useTranslation(lng, "navbar");

  return (
    <div className="list-item">
      <Image
        src={listItem.img}
        alt={listItem.id}
        className={clsx(
          !navItem?.children?.title && "h-8 w-auto aspect-square min-w"
        )}
      />

      <p className="py-3 font-bold text-sm">{t(listItem.id)}</p>
    </div>
  );
}
