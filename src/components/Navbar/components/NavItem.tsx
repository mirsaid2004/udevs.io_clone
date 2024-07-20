import React from "react";
import { navItem } from "../types/navItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import clsx from "clsx";
import ClientLink from "../../ClientLink";
import { useTranslation } from "@/src/app/i18n";
import Link from "next/link";
import ListItem from "./ListItem";

type NavItemType = { navItem: navItem; lng: supportedLangs };

export default async function NavItem({ lng, navItem }: NavItemType) {
  const { t } = await useTranslation(lng, "navbar");
  return (
    <li className="relative flex gap-1 items-center cursor-pointer nav-item">
      <ClientLink
        activeClass="active-scrollLink"
        to={navItem.id}
        className="py-3 font-bold text-sm text-black"
      >
        {t(navItem.id)}
        {navItem.children ? (
          <KeyboardArrowDownIcon
            className="text-sm"
            style={{ fontSize: "15px" }}
          />
        ) : null}
      </ClientLink>
      {navItem?.children?.list ? (
        <div
          className={clsx(
            "absolute top-3/4 p-0 py-4 nav-dropdown bg-white rounded-lg shadow-gray-200 shadow-lg",
            navItem.children.style
          )}
        >
          {navItem?.children?.title && (
            <p className="text-xs text-gray-500 px-4">
              {t(navItem.children.title)}
            </p>
          )}
          {navItem?.children?.title
            ? navItem?.children?.list.map((listItem) => (
                <ClientLink to={listItem.id} key={listItem.id}>
                  <ListItem navItem={navItem} listItem={listItem} lng={lng} />
                </ClientLink>
              ))
            : navItem?.children?.list.map((listItem) => (
                <Link href={listItem.id} key={listItem.id}>
                  <ListItem navItem={navItem} listItem={listItem} lng={lng} />
                </Link>
              ))}
        </div>
      ) : null}
    </li>
  );
}
