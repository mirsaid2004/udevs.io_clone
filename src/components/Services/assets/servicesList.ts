import ios from "@/public/assets/services/ios.svg";
import android from "@/public/assets/services/android.svg";
import crossplatform from "@/public/assets/services/cross_platform.svg";
import sideImg1 from "@/public/assets/service_sideimg_1.png";
import sideImg2 from "@/public/assets/service_sideimg_2.png";
import sideImg3 from "@/public/assets/service_sideimg_3.png";
import sideImg5 from "@/public/assets/service_sideimg_5.svg";
import crm from "@/public/assets/services/crm.svg";
import elearning from "@/public/assets/services/elearning.svg";
import ecommerce from "@/public/assets/services/ecommerce.svg";
import pos from "@/public/assets/services/pos.svg";
import smsemail from "@/public/assets/services/smsemail.svg";
import warehouse from "@/public/assets/services/warehouse.svg";

import figma from "@/public/assets/services/figma.svg";
import sketch from "@/public/assets/services/sketch.svg";
import lottie from "@/public/assets/services/lottie.svg";
import illustrator from "@/public/assets/services/illustrator.svg";

import ux from "@/public/assets/services/ux.svg";
import ui from "@/public/assets/services/ui.svg";
import prototyping from "@/public/assets/services/prototyping.svg";
import mobiledesign from "@/public/assets/services/mobiledesign.svg";
import webdesign from "@/public/assets/services/webdesign.svg";
import atomicdesign from "@/public/assets/services/atomicdesign.svg";

import architecture from "@/public/assets/services/architecture.svg";
import autotesting from "@/public/assets/services/autotesting.svg";
import stresstesting from "@/public/assets/services/stresstesting.svg";
import loadtesting from "@/public/assets/services/loadtesting.svg";
import cloud from "@/public/assets/services/cloud.svg";
import cicd from "@/public/assets/services/cicd.svg";

import frontend from "@/public/assets/services/frontend.svg";
import backend from "@/public/assets/services/backend.svg";
import devops from "@/public/assets/services/devops.svg";
import uxui from "@/public/assets/services/uxui.svg";
import qa from "@/public/assets/services/qa.svg";

import swift from "@/public/assets/services/swift.svg";
import kotlin from "@/public/assets/services/kotlin.svg";
import flutter from "@/public/assets/services/flutter.svg";

import { StaticImageData } from "next/image";

export type service = {
  title: string;
  description: string;
  direction: "ltr" | "rtl";
  directions: { img: string; title: string }[];
  technologies?: { img: string; title: string }[];
  side_img: StaticImageData;
  id: string;
};
export const servicesList: service[] = [
  {
    title: "services_title_1",
    id: "services_1",
    description: "services_desc_1",
    direction: "ltr",
    directions: [
      {
        img: ios,
        title: "IOS",
      },
      {
        img: android,
        title: "Android",
      },
      {
        img: crossplatform,
        title: "Crossplatform",
      },
    ],
    technologies: [
      { img: swift, title: "Swift" },
      { img: kotlin, title: "Kotlin" },
      { img: flutter, title: "Flutter" },
    ],
    side_img: sideImg1,
  },
  {
    title: "services_title_2",
    id: "services_2",
    description: "services_desc_2",
    direction: "rtl",
    directions: [
      {
        img: crm,
        title: "CRM",
      },
      {
        img: elearning,
        title: "eLearning",
      },
      {
        img: ecommerce,
        title: "E-Commerce",
      },
      {
        img: pos,
        title: "POS",
      },
      {
        img: smsemail,
        title: "SMS / Email",
      },
      {
        img: warehouse,
        title: "Warehouse",
      },
    ],
    side_img: sideImg2,
  },
  {
    title: "services_title_3",
    id: "services_3",
    description: "services_desc_3",
    direction: "ltr",
    directions: [
      {
        img: ux,
        title: "UX",
      },
      {
        img: ui,
        title: "UI",
      },
      {
        img: prototyping,
        title: "Prototyping",
      },
      {
        img: mobiledesign,
        title: "Mobile Design",
      },
      {
        img: webdesign,
        title: "Web Design",
      },
      {
        img: atomicdesign,
        title: "Atomic design",
      },
    ],
    technologies: [
      { img: figma, title: "Figma" },
      { img: sketch, title: "Sketch" },
      { img: lottie, title: "Lottie" },
      { img: illustrator, title: "Illustrator" },
    ],
    side_img: sideImg3,
  },
  {
    title: "services_title_4",
    id: "services_4",
    description: "services_desc_4",
    direction: "rtl",
    directions: [
      {
        img: architecture,
        title: "Architecture",
      },
      {
        img: autotesting,
        title: "Auto Testing",
      },
      {
        img: stresstesting,
        title: "Stress Testing",
      },
      {
        img: loadtesting,
        title: "Load Testing",
      },
      {
        img: devops,
        title: "Devops",
      },
      {
        img: cloud,
        title: "Cloud",
      },
      {
        img: cicd,
        title: "CI / CD",
      },
    ],
    side_img: sideImg2,
  },
  {
    title: "services_title_5",
    id: "services_5",
    description: "services_desc_5",
    direction: "ltr",
    directions: [
      {
        img: frontend,
        title: "Frontend",
      },
      {
        img: backend,
        title: "Backend",
      },
      {
        img: architecture,
        title: "Prototyping",
      },
      {
        img: devops,
        title: "Devops",
      },
      {
        img: uxui,
        title: "UX / UI",
      },
      {
        img: qa,
        title: "QA",
      },
    ],
    side_img: sideImg5,
  },
];
