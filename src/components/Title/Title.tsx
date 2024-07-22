import React from "react";

type TitleType = {
  children: React.ReactNode;
};
export default function Title({ children }: TitleType) {
  return (
    <div className="text-primary text-3xl mb-6 font-bold min-[950px]:text-6xl min-[950px]:mb-10">
      {children}
    </div>
  );
}
