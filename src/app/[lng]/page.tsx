import Direction from "@/src/components/Direction";
import { useTranslation } from "../i18n";
import Hero from "@/src/components/Hero";
import Command from "@/src/components/Command";
import Services from "@/src/components/Services";

export default async function Page({
  params: { lng },
}: {
  params: { lng: supportedLangs };
}) {
  const { t } = await useTranslation(lng);
  return (
    <>
      <div className="h-full w-full">
        <Hero lng={lng} />
        <Direction lng={lng} />
        <Command lng={lng} />
        <Services lng={lng} />
      </div>
    </>
  );
}
