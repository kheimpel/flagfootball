import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { getContentBySlug } from "@/lib/mdx";
import { MdxContent } from "@/components/MdxContent";
import { YouTubeEmbed } from "@/components/YouTubeEmbed";

export const metadata: Metadata = {
  title: "Flag Football WM 2026 in Düsseldorf — Alles zur Weltmeisterschaft",
  description:
    "Die IFAF Flag Football Weltmeisterschaft 2026 findet in Düsseldorf statt. 32 Teams, 19 Nationen — die letzte große Bühne vor Olympia 2028.",
  alternates: { canonical: "https://flagzone.de/wm-2026-duesseldorf" },
};

export default async function Wm2026Duesseldorf() {
  const { mdxSource } = await getContentBySlug("wm-2026-duesseldorf");

  return (
    <main>
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "SportsEvent",
        name: "IFAF Flag Football Weltmeisterschaft 2026",
        startDate: "2026-08-13",
        endDate: "2026-08-16",
        location: {
          "@type": "Place",
          name: "Bezirkssportanlage Koblenzer Straße",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Düsseldorf",
            addressCountry: "DE",
          },
        },
        organizer: {
          "@type": "Organization",
          name: "IFAF",
          url: "https://www.ifaf.org",
        },
        description:
          "Die IFAF Flag Football Weltmeisterschaft 2026 findet in Düsseldorf statt. 32 Teams, 19 Nationen — die letzte große Bühne vor Olympia 2028.",
        url: "https://flagzone.de/wm-2026-duesseldorf",
      }} />

      {/* Hero */}
      <section className="bg-navy">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 md:py-20">
          <p className="text-gold text-xs font-bold uppercase tracking-widest mb-3">13.–16. August 2026</p>
          <h1 className="text-gold text-4xl sm:text-5xl md:text-6xl font-black leading-[0.95] tracking-tight max-w-2xl">
            Flag Football WM 2026 in Düsseldorf
          </h1>
          <p className="text-white/50 text-lg mt-4 max-w-xl">
            Die IFAF Weltmeisterschaft — das letzte große internationale Turnier vor der olympischen Premiere in Los Angeles 2028.
          </p>
        </div>
      </section>

      <article className="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-16">

        {/* Key facts */}
        <div className="grid sm:grid-cols-4 gap-6 mb-16">
          {[
            { number: "32", label: "Teams aus aller Welt" },
            { number: "19", label: "Nationen vertreten" },
            { number: "16+16", label: "Herren & Damen" },
            { number: "4", label: "Tage Weltklasse-Sport" },
          ].map((fact) => (
            <div key={fact.label} className="border-l-4 border-gold pl-5 py-2">
              <div className="text-navy text-4xl font-black tracking-tight">{fact.number}</div>
              <div className="text-muted text-sm mt-1">{fact.label}</div>
            </div>
          ))}
        </div>

        {/* Schedule */}
        <section className="mb-16">
          <h2 className="text-navy text-2xl md:text-3xl font-black tracking-tight mb-6">Spielplan</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                date: "13. Aug",
                day: "Tag 1",
                description: "Gruppenphase — Herren & Damen. Alle Teams starten in die Weltmeisterschaft.",
              },
              {
                date: "14. Aug",
                day: "Tag 2",
                description: "Gruppenphase — Herren & Damen. Entscheidung über die Achtelfinal-Plätze.",
              },
              {
                date: "15. Aug",
                day: "Tag 3",
                description: "Achtelfinale & Viertelfinale. Die besten Teams kämpfen um das Halbfinale.",
              },
              {
                date: "16. Aug",
                day: "Tag 4",
                description: "Halbfinale, Finale & Siegerehrung. Die Weltmeister werden gekrönt.",
              },
            ].map((slot) => (
              <div key={slot.date} className="bg-bg-warm rounded-xl p-5">
                <p className="text-gold text-xs font-bold uppercase tracking-widest mb-1">{slot.date}</p>
                <p className="text-navy font-black text-lg mb-2">{slot.day}</p>
                <p className="text-muted text-sm leading-relaxed">{slot.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Videos */}
        <section className="mb-16">
          <h2 className="text-navy text-2xl md:text-3xl font-black tracking-tight mb-6">Videos</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <YouTubeEmbed
                videoId="vckwt2GKK98"
                title="Düsseldorf ist Gastgeberin der Flag Football Weltmeisterschaft 2026"
              />
              <p className="text-muted text-sm mt-3">Stadt Düsseldorf — offizielle Ankündigung</p>
            </div>
            <div>
              <YouTubeEmbed
                videoId="blLv1AcAL6k"
                title="Die Finals Dresden 2025 — Flag Football Highlights"
              />
              <p className="text-muted text-sm mt-3">AFVD — Die Finals 2025 Highlights</p>
            </div>
          </div>
        </section>

        {/* MDX content */}
        <div className="prose prose-zinc max-w-3xl prose-headings:text-navy prose-headings:font-black prose-headings:tracking-tight prose-h2:text-2xl prose-h2:md:text-3xl prose-h3:text-lg prose-h3:font-bold prose-strong:text-navy prose-a:text-navy prose-a:underline prose-a:decoration-gold prose-a:decoration-2 prose-a:underline-offset-2 hover:prose-a:text-gold-hover mb-16">
          <MdxContent source={mdxSource} />
        </div>

        {/* CTA */}
        <section className="bg-navy rounded-xl p-8 md:p-12 text-center">
          <h2 className="text-white text-2xl md:text-3xl font-black mb-3">Neu im Flag Football?</h2>
          <p className="text-white/50 mb-6 max-w-md mx-auto">
            Lern die Grundlagen des Sports kennen — Regeln, Positionen und alles für den Einstieg.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/was-ist-flag-football" className="bg-gold text-navy font-bold px-6 py-3 rounded-lg hover:bg-gold-hover transition-colors">
              Was ist Flag Football?
            </Link>
          </div>
        </section>
      </article>
    </main>
  );
}
