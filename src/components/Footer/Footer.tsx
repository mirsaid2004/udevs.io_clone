import Image from "next/image";
import logo from "@/public/assets/logo.svg";
import { useTranslation } from "@/src/app/i18n";
import FooterItems from "./components/FooterItems";
import { footerItemsList } from "./assets/footerItemsList";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Link from "next/link";

const Footer = async ({ lng }: { lng: supportedLangs }) => {
  const { t } = await useTranslation(lng, ["footer", "navbar"]);
  return (
    <footer className="w-full py-11 bg-background">
      {/* <Trans i18nKey="languageSwitcher" t={t}>
        Switch from <strong>{{ lng } as unknown as string}</strong> to:{" "}
      </Trans> */}
      <Image src={logo} alt="logo" className="w-24 h-8 p-0 my-0 m-auto" />
      <div className="flex flex-wrap gap-5 justify-between px-4 my-10 max-w-[1170px] mx-auto">
        {footerItemsList.map((footerItem) => (
          <FooterItems
            footerItem={footerItem}
            lng={lng}
            key={footerItem.title}
          />
        ))}
      </div>
      <div className="flex flex-wrap gap-5 justify-between items-center pt-6 max-w-[1170px] mx-auto border-t-2 border-[rgba(27, 91, 247, .2)]">
        <p className="text-sm text-primary px-4 font-semibold ">
          © 2024 Udevs. All rights reserved
        </p>
        <div className="flex gap-4 px-4">
          <Link
            href={""}
            className="rounded-full bg-primary text-white p-3 h-10 flex items-center justify-center aspect-square text-xl"
          >
            <InstagramIcon />
          </Link>
          <Link
            href={""}
            className="rounded-full bg-primary text-white p-3 h-10 flex items-center justify-center aspect-square text-xl"
          >
            <TwitterIcon />
          </Link>
          <Link
            href={""}
            className="rounded-full bg-primary text-white p-3 h-10 flex items-center justify-center aspect-square text-xl"
          >
            <YouTubeIcon />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
