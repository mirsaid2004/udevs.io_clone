import Link from "next/link";
import { useTranslation } from "../i18n";
import Footer from "@/src/components/Footer";

export default async function Page({
  params: { lng },
}: {
  params: { lng: supportedLangs };
}) {
  const { t } = await useTranslation(lng);
  return (
    <>
      <div className="h-screen w-full"></div>
    </>
  );
}
