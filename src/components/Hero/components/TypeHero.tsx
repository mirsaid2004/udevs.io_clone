"use client";
import { useTranslation } from "@/src/app/i18n/client";
import React, { useMemo } from "react";
import { TypeAnimation } from "react-type-animation";

export default function TypeHero({
  sequences,
}: {
  sequences: (string | number)[];
}) {
  return (
    <TypeAnimation
      className="text-primary min-[950px]:text-5xl text-xl font-bold mb-12 min-[950px]:text-start text-center"
      sequence={sequences}
      wrapper="h1"
      speed={50}
      repeat={Infinity}
    />
  );
}
