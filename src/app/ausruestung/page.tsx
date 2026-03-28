import type { Metadata } from "next";
import Link from "next/link";
import { getContentBySlug } from "@/lib/mdx";
import { MdxContent } from "@/components/MdxContent";
import { JsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Flag Football Ausrüstung — Was du wirklich brauchst",
  description:
    "Flag Football Equipment Guide: Flag-Belts, Footballs, Schuhe und mehr. Was du zum Spielen brauchst und wo du es am besten kaufst.",
  alternates: { canonical: "https://flagzone.de/ausruestung" },
};

type Priority = "pflicht" | "empfohlen" | "optional";

type EquipmentItem = {
  name: string;
  priority: Priority;
  description: string;
  price: string;
  affiliate?: boolean;
};

const EQUIPMENT_ITEMS: EquipmentItem[] = [
  {
    name: "Flag Belts",
    priority: "pflicht",
    description:
      "Das Herzstück des Spiels. Ein Set enthält Gürtel und Flags für mehrere Spieler — für ein ganzes Team reicht ein Set.",
    price: "25–50 EUR (Team-Set)",
    affiliate: true,
  },
  {
    name: "Football",
    priority: "pflicht",
    description:
      "Ein regulärer Football oder ein Gummi-Football für den Outdoor-Einsatz. Für Anfänger reicht ein günstiges Modell völlig aus.",
    price: "15–40 EUR",
  },
  {
    name: "Schuhe",
    priority: "empfohlen",
    description:
      "Football-Cleats oder Fußball-Stollen funktionieren gut. Auf Kunstrasen oder Halle reichen normale Sportschuhe.",
    price: "20–50 EUR",
  },
  {
    name: "Receiver-Handschuhe",
    priority: "optional",
    description:
      "Verbessern den Grip beim Fangen erheblich — besonders bei feuchtem Wetter. Nicht notwendig, aber beliebt.",
    price: "ab ~20 EUR",
  },
  {
    name: "Hütchen & Pylonen",
    priority: "optional",
    description:
      "Zum Markieren des Spielfelds, der Endzones und der No-Run-Zones. Günstig und praktisch für Trainings.",
    price: "~10 EUR",
  },
];

const PRIORITY_CONFIG: Record<Priority, { label: string; borderClass: string; dotClass: string }> = {
  pflicht: {
    label: "Pflicht",
    borderClass: "border-gold",
    dotClass: "bg-gold",
  },
  empfohlen: {
    label: "Empfohlen",
    borderClass: "border-navy",
    dotClass: "bg-navy",
  },
  optional: {
    label: "Optional",
    borderClass: "border-zinc-300",
    dotClass: "bg-zinc-300",
  },
};

export default async function AusruestungPage() {
  const { mdxSource } = await getContentBySlug("ausruestung");

  return (
    <main>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Flag Football Ausrüstung — Was du wirklich brauchst",
          description:
            "Flag Football Equipment Guide: Flag-Belts, Footballs, Schuhe und mehr. Was du zum Spielen brauchst und wo du es am besten kaufst.",
          datePublished: "2026-03-28",
          dateModified: "2026-03-28",
          url: "https://flagzone.de/ausruestung",
          publisher: {
            "@type": "Organization",
            name: "FlagZone",
            url: "https://flagzone.de",
          },
        }}
      />

      {/* Hero */}
      <section className="bg-navy">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 md:py-20">
          <p className="text-gold text-xs font-bold uppercase tracking-widest mb-3">
            Equipment Guide
          </p>
          <h1 className="text-gold text-4xl sm:text-5xl md:text-6xl font-black leading-[0.95] tracking-tight max-w-2xl">
            Was brauchst du zum Spielen?
          </h1>
          <p className="text-white/50 text-lg mt-4 max-w-xl">Spoiler: Nicht viel.</p>
        </div>
      </section>

      <article className="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-16">

        {/* MDX intro */}
        <div className="prose prose-zinc max-w-3xl prose-headings:text-navy prose-headings:font-black prose-headings:tracking-tight prose-strong:text-navy prose-a:text-navy prose-a:underline prose-a:decoration-gold prose-a:decoration-2 prose-a:underline-offset-2 hover:prose-a:text-gold-hover mb-12">
          <MdxContent source={mdxSource} />
        </div>

        {/* Priority legend */}
        <div className="flex flex-wrap gap-4 mb-8">
          {(Object.entries(PRIORITY_CONFIG) as [Priority, typeof PRIORITY_CONFIG[Priority]][]).map(
            ([, config]) => (
              <div key={config.label} className="flex items-center gap-2">
                <span className={`w-3 h-3 rounded-full ${config.dotClass} shrink-0`} />
                <span className="text-muted text-sm">{config.label}</span>
              </div>
            )
          )}
        </div>

        {/* Equipment items */}
        <div className="space-y-4 mb-16">
          {EQUIPMENT_ITEMS.map((item) => {
            const config = PRIORITY_CONFIG[item.priority];
            return (
              <div
                key={item.name}
                className={`bg-bg-warm rounded-lg border-l-4 ${config.borderClass} px-6 py-5`}
              >
                <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <span className={`w-2.5 h-2.5 rounded-full ${config.dotClass} shrink-0 mt-0.5`} />
                    <h3 className="text-navy font-bold text-base">{item.name}</h3>
                    <span className="text-muted text-xs font-medium uppercase tracking-wide">
                      {config.label}
                    </span>
                  </div>
                  <span className="text-muted text-sm font-semibold shrink-0">{item.price}</span>
                </div>
                <p className="text-muted text-sm leading-relaxed pl-5">{item.description}</p>
                {item.affiliate && (
                  <p className="text-muted text-xs mt-3 pl-5 italic">
                    * Links auf dieser Seite können Affiliate-Links sein — für dich entstehen keine
                    Mehrkosten.
                  </p>
                )}
              </div>
            );
          })}
        </div>

        {/* Pricing summary */}
        <section className="bg-navy rounded-xl p-8 md:p-10 mb-16">
          <h2 className="text-white text-xl md:text-2xl font-black mb-6">Kosten im Überblick</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="border-l-4 border-gold pl-5">
              <div className="text-gold text-3xl font-black tracking-tight">0–30 EUR</div>
              <div className="text-white/70 text-sm mt-1">Minimum (Einzelspieler)</div>
              <div className="text-white/50 text-xs mt-1">
                Wenn das Team schon Belts und einen Ball hat
              </div>
            </div>
            <div className="border-l-4 border-white/30 pl-5">
              <div className="text-white text-3xl font-black tracking-tight">~90 EUR</div>
              <div className="text-white/70 text-sm mt-1">Komplettes Team-Set (10 Spieler)</div>
              <div className="text-white/50 text-xs mt-1">Flag-Belts + Ball + Hütchen</div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <h2 className="text-navy text-2xl md:text-3xl font-black mb-3">
            Bereit loszulegen?
          </h2>
          <p className="text-muted mb-6 max-w-md mx-auto">
            Du hast alles, was du brauchst — oder fast. Finde jetzt ein Team in deiner Nähe.
          </p>
          <Link
            href="/team-finden"
            className="inline-block bg-gold text-navy font-bold px-8 py-3 rounded-lg hover:bg-gold-hover transition-colors"
          >
            Team finden
          </Link>
        </section>
      </article>
    </main>
  );
}
