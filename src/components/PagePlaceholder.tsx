import { useTranslation } from "react-i18next";
import { CompassRose } from "./CompassRose";

interface PagePlaceholderProps {
  index: string;
  titleKey: string;
  subtitle?: string;
}

export function PagePlaceholder({ index, titleKey, subtitle }: PagePlaceholderProps) {
  const { t } = useTranslation();
  return (
    <section className="relative mx-auto max-w-7xl px-6 lg:px-10 py-32 md:py-40 min-h-[60vh]">
      <p className="label-tech">{index}</p>
      <h1 className="mt-6 font-display text-6xl md:text-8xl text-ink tracking-tight leading-[0.95]">
        {t(titleKey)}
      </h1>
      {subtitle && (
        <p className="mt-6 text-mid font-mono uppercase text-xs tracking-[0.2em]">{subtitle}</p>
      )}
      <div className="absolute right-6 lg:right-10 top-32 text-ink/10 hidden md:block">
        <CompassRose size={180} />
      </div>
    </section>
  );
}
