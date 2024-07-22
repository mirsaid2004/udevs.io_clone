import Direction from "@/src/components/Direction";
import { useTranslation } from "../i18n";
import Hero from "@/src/components/Hero";

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
      </div>
    </>
  );
}
