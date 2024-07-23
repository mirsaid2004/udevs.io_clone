import React from "react";
import { tools } from "../assets/toolsList";
import Image from "next/image";
import clsx from "clsx";
import { directions } from "../types/directions";

type InstrumentsListType = {
  value: directions;
};
export default function InstrumentsList({ value }: InstrumentsListType) {
  return (
    <div className="grid min-[950px]:grid-cols-12 grid-cols-5 min-[950px]:mt-12 mt-4 gap-2">
      {tools.map((tool) => (
        <div
          key={tool.name}
          className={clsx(
            "rounded-lg flex flex-col items-center justify-center min-[950px]:h-24 h-14 transition-all ease-in-out duration-200",
            value && value === tool.direction
              ? tool.className
              : !value
              ? tool.className
              : " opacity-40"
          )}
        >
          <Image
            src={tool.img}
            alt={tool.name}
            className="min-[950px]:h-6 min-[950px]:w-6 h-4 w-4"
          />
          <h6 className="mt-1 min-[950px]:mt-4 w-full truncate text-center min-[950px]:text-xs text-[9px]">
            {tool.name}
          </h6>
        </div>
      ))}
    </div>
  );
}
