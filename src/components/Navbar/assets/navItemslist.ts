import { navItem } from "../types/navItem";

// NOTE services list svg images
import servicePhone from "@/public/assets/service_phone.svg";
import serviceErp from "@/public/assets/service_erp.svg";
import serviceDesign from "@/public/assets/service_design.svg";
import serviceConsulting from "@/public/assets/service_consulting.svg";
import serviceOptimization from "@/public/assets/service_optimization.svg";

// NOTE porfolios list svg images
import portfolioDelever from "@/public/assets/portfolio_delever.svg";
import portfolioSmsUz from "@/public/assets/portfolio_smsuz.svg";
import portfolioGoodzone from "@/public/assets/portfolio_goodzone.svg";
import portfolioIman from "@/public/assets/portfolio_iman.svg";

// NOTE languages list svg images
import russianFlag from "@/public/assets/russia_flag.svg";
import britainFlag from "@/public/assets/britain_flag.svg";

export const navItems: navItem[] = [
  { id: "direction" },
  { id: "command" },
  {
    id: "services",
    children: {
      title: "services",
      style: "min-w-80 left-[-150%]",
      list: [
        { id: "services_1", img: servicePhone },
        { id: "services_2", img: serviceErp },
        { id: "services_3", img: serviceDesign },
        { id: "services_4", img: serviceConsulting },
        { id: "services_5", img: serviceOptimization },
      ],
    },
  },
  { id: "tools" },
  { id: "clients" },
  {
    id: "portfolio",
    children: {
      title: "portfolio",
      style: "min-w-80 left-[-200%]",
      list: [
        { id: "portfolio_1", img: portfolioDelever },
        { id: "portfolio_2", img: portfolioSmsUz },
        { id: "portfolio_3", img: portfolioGoodzone },
        { id: "portfolio_4", img: portfolioIman },
      ],
    },
  },
  {
    id: "language",
    children: {
      style: "min-w-48 left-[-100%]",
      list: [
        { id: "ru", img: russianFlag },
        { id: "en", img: britainFlag },
      ],
    },
  },
];

export const navItemsMobile: navItem[] = [
  {
    id: "services",
  },
  { id: "clients" },
  { id: "command" },
];
