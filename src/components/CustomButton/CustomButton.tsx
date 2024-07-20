import clsx from "clsx";
import React, { HTMLAttributes } from "react";

type CustomButtonType = {
  children: React.ReactNode;
} & HTMLAttributes<HTMLDivElement>;
export default function CustomButton({
  className,
  children,
  ...rest
}: CustomButtonType) {
  return (
    <div
      className={clsx(
        "rounded-lg bg-primary text-white hover:scale-105 transition-all cursor-pointer",
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
}
