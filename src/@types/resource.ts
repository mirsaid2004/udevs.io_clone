import footer from "@/app/i18n/locales/en/footer.json";
import second_page from "@/app/i18n/locales/en/second-page.json";
import translation from "@/app/i18n/locales/en/translation.json";

const resources = {
  translation,
  footer,
  "second-page": second_page,
} as const;

export default resources;
