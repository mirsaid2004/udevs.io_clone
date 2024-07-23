import { directions } from "../types/directions";
import promotheus from "@/public/assets/instruments/promotheus.svg";
import bitbucket from "@/public/assets/instruments/bitbucket.svg";
import gitlab from "@/public/assets/instruments/gitlab.svg";
import loki from "@/public/assets/instruments/loki.svg";

import kotlin from "@/public/assets/instruments/kotlin.svg";
import android from "@/public/assets/instruments/android.svg";
import java from "@/public/assets/instruments/java.svg";

import azure from "@/public/assets/instruments/azure.svg";
import gcp from "@/public/assets/instruments/gcp.svg";
import digitalocean from "@/public/assets/instruments/digitalocean.svg";
import aws from "@/public/assets/instruments/aws.svg";
import kubernetes from "@/public/assets/instruments/kubernetes.svg";

import elk from "@/public/assets/instruments/elk.svg";
import grafana from "@/public/assets/instruments/grafana.svg";
import terraform from "@/public/assets/instruments/terraform.svg";

import ios from "@/public/assets/instruments/ios.svg";
import swift from "@/public/assets/instruments/swift.svg";
import flutter from "@/public/assets/instruments/flutter.svg";

import next from "@/public/assets/instruments/next.svg";
import react from "@/public/assets/instruments/react.svg";
import js from "@/public/assets/instruments/js.svg";

import balsamic from "@/public/assets/instruments/balsamic.svg";
import invision from "@/public/assets/instruments/invision.svg";
import figma from "@/public/assets/instruments/figma.svg";

import docker from "@/public/assets/instruments/docker.svg";

import postgressql from "@/public/assets/instruments/postgressql.svg";
import python from "@/public/assets/instruments/python.svg";
import node from "@/public/assets/instruments/node.svg";
import php from "@/public/assets/instruments/php.svg";
import go from "@/public/assets/instruments/go.svg";

import antdesign from "@/public/assets/instruments/antdesign.svg";
import gatsby from "@/public/assets/instruments/gatsby.png";
import vue from "@/public/assets/instruments/vue.svg";

import principle from "@/public/assets/instruments/principle.svg";
import sketch from "@/public/assets/instruments/sketch.svg";
import adobesuit from "@/public/assets/instruments/adobesuit.svg";

import yourtrack from "@/public/assets/instruments/youtrack.svg";
import appium from "@/public/assets/instruments/appium.svg";
import cypress from "@/public/assets/instruments/cypress.svg";
import jmeter from "@/public/assets/instruments/jmeter.svg";

import mongodb from "@/public/assets/instruments/mongodb.svg";
import casandra from "@/public/assets/instruments/casandra.svg";

import sass from "@/public/assets/instruments/sass.svg";
import mui from "@/public/assets/instruments/mui.svg";

import zeplin from "@/public/assets/instruments/zeplin.svg";
import illustrator from "@/public/assets/instruments/illustrator.svg";
import lottie from "@/public/assets/instruments/jmeter.svg";
import photoshop from "@/public/assets/instruments/photoshop.svg";

// .bg-frontend
// .bg-backend
// .bg-devops
// .bg-testing
// .bg-design
// .bg-infrastructure
// .bg-mobile

type ToolType = {
  name: string;
  img: string;
  direction: directions;
  className: string;
};

export const tools: ToolType[] = [
  {
    name: "Promotheus",
    img: promotheus,
    direction: "devops",
    className: "bg-devops",
  },
  { name: "Loki", img: loki, direction: "devops", className: "bg-devops" },
  {
    name: "Bitbucket",
    img: bitbucket,
    direction: "devops",
    className: "bg-devops",
  },
  { name: "Gitlab", img: gitlab, direction: "devops", className: "bg-devops" },

  { name: "Kotlin", img: kotlin, direction: "mobile", className: "bg-mobile" },
  {
    name: "Android",
    img: android,
    direction: "mobile",
    className: "bg-mobile",
  },
  { name: "Java", img: java, direction: "mobile", className: "bg-mobile" },

  {
    name: "Azure",
    img: azure,
    direction: "infrastructure",
    className: "bg-infrastructure",
  },
  {
    name: "GCP",
    img: gcp,
    direction: "infrastructure",
    className: "bg-infrastructure",
  },
  {
    name: "DigitalOcean",
    img: digitalocean,
    direction: "infrastructure",
    className: "bg-infrastructure",
  },
  {
    name: "AWS",
    img: aws,
    direction: "infrastructure",
    className: "bg-infrastructure",
  },
  {
    name: "Kubernetes",
    img: kubernetes,
    direction: "infrastructure",
    className: "bg-infrastructure",
  },
  { name: "ELK", img: elk, direction: "devops", className: "bg-devops" },
  {
    name: "Grafana",
    img: grafana,
    direction: "devops",
    className: "bg-devops",
  },
  {
    name: "Terraform",
    img: terraform,
    direction: "devops",
    className: "bg-devops",
  },
  { name: "IOS", img: ios, direction: "mobile", className: "bg-mobile" },
  { name: "Swift", img: swift, direction: "mobile", className: "bg-mobile" },
  {
    name: "Flutter",
    img: flutter,
    direction: "mobile",
    className: "bg-mobile",
  },

  {
    name: "Next.js",
    img: next,
    direction: "frontend",
    className: "bg-frontend",
  },
  {
    name: "React.js",
    img: react,
    direction: "frontend",
    className: "bg-frontend",
  },
  {
    name: "JavaScript",
    img: js,
    direction: "frontend",
    className: "bg-frontend",
  },

  {
    name: "Balsamic",
    img: balsamic,
    direction: "ux/ui",
    className: "bg-design",
  },
  {
    name: "Invision",
    img: invision,
    direction: "ux/ui",
    className: "bg-design",
  },
  {
    name: "Figma",
    img: figma,
    direction: "ux/ui",
    className: "bg-design",
  },
  { name: "Docker", img: docker, direction: "devops", className: "bg-devops" },
  {
    name: "PostgreSQL",
    img: postgressql,
    direction: "backend",
    className: "bg-backend",
  },
  {
    name: "Python",
    img: python,
    direction: "backend",
    className: "bg-backend",
  },
  { name: "Node.JS", img: node, direction: "backend", className: "bg-backend" },
  { name: "PHP", img: php, direction: "backend", className: "bg-backend" },
  { name: "GO", img: go, direction: "backend", className: "bg-backend" },

  {
    name: "Ant Design",
    img: antdesign,
    direction: "frontend",
    className: "bg-frontend",
  },
  {
    name: "Gatsby.JS",
    img: gatsby,
    direction: "frontend",
    className: "bg-frontend",
  },
  {
    name: "Vue.JS",
    img: vue,
    direction: "frontend",
    className: "bg-frontend",
  },

  {
    name: "Principle",
    img: principle,
    direction: "ux/ui",
    className: "bg-design",
  },
  {
    name: "Sketch",
    img: sketch,
    direction: "ux/ui",
    className: "bg-design",
  },
  {
    name: "Adobe suite",
    img: adobesuit,
    direction: "ux/ui",
    className: "bg-design",
  },

  {
    name: "YourTrack",
    img: yourtrack,
    direction: "testing",
    className: "bg-testing",
  },
  {
    name: "Appium",
    img: appium,
    direction: "testing",
    className: "bg-testing",
  },
  {
    name: "Cypress",
    img: cypress,
    direction: "testing",
    className: "bg-testing",
  },
  {
    name: "Jmeter",
    img: jmeter,
    direction: "testing",
    className: "bg-testing",
  },
  {
    name: "MongoDB",
    img: mongodb,
    direction: "backend",
    className: "bg-backend",
  },
  {
    name: "Cassandra",
    img: casandra,
    direction: "backend",
    className: "bg-backend",
  },

  {
    name: "Sass",
    img: sass,
    direction: "frontend",
    className: "bg-frontend",
  },
  {
    name: "Material UI",
    img: mui,
    direction: "frontend",
    className: "bg-frontend",
  },

  {
    name: "Zeplin",
    img: zeplin,
    direction: "ux/ui",
    className: "bg-design",
  },
  {
    name: "Illustrator",
    img: illustrator,
    direction: "ux/ui",
    className: "bg-design",
  },
  {
    name: "Lottie",
    img: lottie,
    direction: "ux/ui",
    className: "bg-design",
  },
  {
    name: "Photoshop",
    img: photoshop,
    direction: "ux/ui",
    className: "bg-design",
  },
];
