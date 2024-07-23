"use client";
import React, { useCallback, useState } from "react";
import Title from "../Title";
import { useTranslation } from "@/src/app/i18n/client";
import { FormControlLabel, RadioGroup } from "@mui/material";
import Radio from "@mui/material/Radio";
import { directions } from "./types/directions";
import dynamic from "next/dynamic";

type ToolsType = {
  lng: supportedLangs;
};

const ServerComponent = dynamic(() => import("./components/InstrumentsList"), {
  ssr: false,
});
export default function Tools({ lng }: ToolsType) {
  const { t } = useTranslation(lng, "navbar");
  const [value, setValue] = useState<directions>(undefined);
  const handleValue = useCallback((val: directions) => {
    setValue((pre) => (pre === val ? undefined : val));
  }, []);

  return (
    <div className="py-20 bg-background" id="tools">
      <div className="m-auto max-w-[1170px] px-4">
        <Title>{t("tools")}</Title>
        <RadioGroup
          row
          sx={(theme) => {
            return {
              display: "flex",
              flexWrap: "wrap",
              [theme.breakpoints.down("md")]: {
                display: "grid",
                gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
              },
            };
          }}
          className="min-[950px]:mt-20 mt-8 gap-2 text-sm"
        >
          {(
            [
              "frontend",
              "backend",
              "devops",
              "testing",
              "ux/ui",
              "infrastructure",
              "mobile",
            ] as directions[]
          ).map((item) => (
            <FormControlLabel
              key={item}
              control={
                <Radio
                  color="primary"
                  checked={value === item}
                  onClick={() => handleValue(item)}
                  value={item}
                  style={{
                    color: "#1b5bf7",
                    transform: "scale(1.2)",
                  }}
                />
              }
              label={item!.charAt(0).toUpperCase() + item!.slice(1)}
            />
          ))}
        </RadioGroup>
        <ServerComponent value={value} />
      </div>
    </div>
  );
}
