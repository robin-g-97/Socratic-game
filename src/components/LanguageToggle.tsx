import type { Locale, Translation } from "@/lib/i18n";

type LanguageToggleProps = {
  locale: Locale;
  labels: Translation["language"];
  onChange: (locale: Locale) => void;
};

export function LanguageToggle({
  locale,
  labels,
  onChange,
}: LanguageToggleProps) {
  return (
    <div className="language-toggle" aria-label={labels.label}>
      <button
        aria-pressed={locale === "en"}
        className={locale === "en" ? "active" : ""}
        onClick={() => onChange("en")}
        type="button"
      >
        EN
      </button>
      <button
        aria-pressed={locale === "nl"}
        className={locale === "nl" ? "active" : ""}
        onClick={() => onChange("nl")}
        type="button"
      >
        NL
      </button>
    </div>
  );
}
