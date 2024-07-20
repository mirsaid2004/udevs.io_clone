import Link from "next/link";
import { Trans } from "react-i18next/TransWithoutContext";
import { languages } from "@/src/app/i18n/settings";
import { useTranslation } from "@/src/app/i18n";

const Footer = async ({ lng }: { lng: supportedLangs }) => {
  const { t } = await useTranslation(lng, "footer");
  return (
    <footer style={{ marginTop: 50 }}>
      <Trans i18nKey="languageSwitcher" t={t}>
        Switch from <strong>{{ lng } as unknown as string}</strong> to:{" "}
      </Trans>
      {languages
        .filter((l) => lng !== l)
        .map((l, index) => {
          return (
            <span key={l}>
              {index > 0 && " or "}
              <Link href={`/${l}`}>{l}</Link>
            </span>
          );
        })}
    </footer>
  );
};

export default Footer;
