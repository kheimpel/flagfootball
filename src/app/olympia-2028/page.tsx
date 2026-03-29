import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { getContentBySlug } from "@/lib/mdx";
import { MdxContent } from "@/components/MdxContent";
import { YouTubeEmbed } from "@/components/YouTubeEmbed";

export const metadata: Metadata = {
  title: "Flag Football bei Olympia 2028 — Alles zur olympischen Premiere",
  description:
    "Flag Football ist ab 2028 olympisch! Alles über die Premiere in Los Angeles: Format, Regeln, deutsche Chancen und was die Aufnahme für den Sport bedeutet.",
  alternates: { canonical: "https://flagzone.de/olympia-2028" },
};

const TIMELINE = [
  {
    year: "2023",
    label: "IOC-Entscheidung",
    description: "141. IOC-Session in Mumbai: Flag Football wird olympisch für LA 2028.",
  },
  {
    year: "2025",
    label: "Qualifikation beginnt",
    description: "Kontinentalmeisterschaften starten den offiziellen Qualifikationsprozess.",
  },
  {
    year: "2026",
    label: "WM Düsseldorf",
    description: "Die letzte große Standortbestimmung vor Olympia — in Deutschland.",
  },
  {
    year: "2028",
    label: "Olympische Premiere",
    description: "Los Angeles: 6 Herren- und 6 Damen-Teams kämpfen um Gold.",
  },
];

const FORMAT_DETAILS = [
  { label: "Teams", value: "6 Nationen", note: "je Geschlecht" },
  { label: "Format", value: "5 on 5", note: "10er-Kader" },
  { label: "Spielzeit", value: "2 × 20", note: "Minuten" },
  { label: "Spielfeld", value: "70 × 25", note: "Yards" },
];

export default async function Olympia2028() {
  const { mdxSource } = await getContentBySlug("olympia-2028");

  return (
    <main>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "SportsEvent",
          name: "Flag Football bei den Olympischen Spielen 2028",
          startDate: "2028-07-14",
          endDate: "2028-08-30",
          location: {
            "@type": "Place",
            name: "Los Angeles",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Los Angeles",
              addressRegion: "CA",
              addressCountry: "US",
            },
          },
          sport: "Flag Football",
          organizer: {
            "@type": "Organization",
            name: "International Olympic Committee",
            url: "https://olympics.com",
          },
          description:
            "Flag Football feiert seine olympische Premiere bei den Spielen 2028 in Los Angeles — als erste Form von American Football bei Olympia.",
          url: "https://flagzone.de/olympia-2028",
        }}
      />

      {/* Hero */}
      <section className="bg-navy">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 md:py-20">
          <p className="text-gold text-xs font-bold uppercase tracking-widest mb-3">
            Los Angeles 2028
          </p>
          <h1 className="text-gold text-4xl sm:text-5xl md:text-6xl font-black font-headline leading-[0.95] tracking-tight max-w-2xl">
            Flag Football wird olympisch
          </h1>
          <p className="text-white/50 text-lg mt-4 max-w-xl">
            Erstmals in der Geschichte ist eine Form von American Football Teil der Olympischen
            Spiele. Was das bedeutet, wie man sich qualifiziert und welche Chancen Deutschland hat.
          </p>
        </div>
      </section>

      <article className="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-16">

        {/* Timeline */}
        <section className="mb-16">
          <h2 className="text-navy text-2xl md:text-3xl font-black font-headline tracking-tight mb-10">
            Der Weg zu den Spielen
          </h2>
          <div className="relative max-w-2xl">
            {/* Vertical line */}
            <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-gold/30" />
            <ol className="space-y-8">
              {TIMELINE.map((item) => (
                <li key={item.year} className="flex gap-6 relative">
                  {/* Gold circle with year */}
                  <div className="shrink-0 w-12 h-12 rounded-full bg-gold flex flex-col items-center justify-center z-10">
                    <span className="text-navy text-xs font-black leading-none">{item.year}</span>
                  </div>
                  <div className="pt-2">
                    <div className="text-navy font-bold text-base">{item.label}</div>
                    <div className="text-muted text-sm mt-1 leading-relaxed">{item.description}</div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Format details */}
        <section className="mb-16">
          <h2 className="text-navy text-2xl md:text-3xl font-black font-headline tracking-tight mb-6">
            Das olympische Format
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {FORMAT_DETAILS.map((item) => (
              <div key={item.label} className="bg-bg-warm rounded-xl p-6">
                <div className="text-muted text-xs font-bold uppercase tracking-widest mb-2">
                  {item.label}
                </div>
                <div className="text-navy text-3xl font-black tracking-tight">{item.value}</div>
                <div className="text-muted text-sm mt-1">{item.note}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Videos */}
        <section className="mb-16">
          <h2 className="text-navy text-2xl md:text-3xl font-black font-headline tracking-tight mb-6">Videos</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <YouTubeEmbed
                videoId="OVjJXCy6NgE"
                title="Vollmer: Flag Football soll bis 2028 olympisch sein"
              />
              <p className="text-muted text-sm mt-3">ran Sport — Sebastian Vollmer über Olympia</p>
            </div>
            <div>
              <YouTubeEmbed
                videoId="blLv1AcAL6k"
                title="Die Finals Dresden 2025 — Flag Football Highlights"
              />
              <p className="text-muted text-sm mt-3">AFVD — Deutsche Meisterschaft 2025 Highlights</p>
            </div>
          </div>
        </section>

        {/* MDX content */}
        <div className="prose prose-zinc max-w-3xl prose-headings:text-navy prose-headings:font-black prose-headings:font-headline prose-headings:tracking-tight prose-h2:text-2xl prose-h2:md:text-3xl prose-h3:text-lg prose-h3:font-bold prose-strong:text-navy prose-a:text-navy prose-a:underline prose-a:decoration-gold prose-a:decoration-2 prose-a:underline-offset-2 hover:prose-a:text-gold-hover mb-16">
          <MdxContent source={mdxSource} />
        </div>

        {/* CTA */}
        <section className="bg-navy rounded-xl p-8 md:p-12 text-center">
          <h2 className="text-white text-2xl md:text-3xl font-black font-headline mb-3">
            Die letzte Chance vor Olympia
          </h2>
          <p className="text-white/50 mb-6 max-w-md mx-auto">
            Die WM 2026 in Düsseldorf ist die entscheidende Qualifikationsstation für Los Angeles.
            Alles zum Turnier im eigenen Land.
          </p>
          <Link
            href="/wm-2026-duesseldorf"
            className="bg-gold text-navy font-bold px-6 py-3 rounded-lg hover:bg-gold-hover transition-colors inline-block"
          >
            WM 2026 Düsseldorf
          </Link>
        </section>
      </article>
    </main>
  );
}
