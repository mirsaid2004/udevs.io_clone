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
      {/* <h1>{t("title")}</h1>
      <div className="scroll-container">
        <div className="scroll-content">
          <div className="scroll-item">Item 1</div>
          <div className="scroll-item">Item 2</div>
          <div className="scroll-item">Item 3</div>
          <div className="scroll-item">Item 4</div>
        </div>
      </div> */}
      {/* <Link href={`/${lng}/second-page`}>{t("to-second-page")}</Link> */}
      <Footer lng={lng} />
    </>
  );
}
