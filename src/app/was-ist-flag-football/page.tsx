import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { getContentBySlug } from "@/lib/mdx";
import { MdxContent } from "@/components/MdxContent";

export const metadata: Metadata = {
  title: "Was ist Flag Football? Regeln einfach erklärt",
  description:
    "Flag Football Regeln, Positionen, Spielfeld und Scoring — einfach erklärt. Der komplette Guide für Einsteiger. 5 gegen 5, kein Tackling, einfach loslegen.",
  alternates: { canonical: "https://flagzone.de/was-ist-flag-football" },
};

const FAQ_ITEMS = [
  { q: "Wie viele Spieler sind auf dem Feld?", a: "5 gegen 5. Jedes Team hat einen Kader von 10 Spielern, aber nur 5 stehen gleichzeitig auf dem Feld." },
  { q: "Brauche ich teure Ausrüstung?", a: "Nein. Ein Flag-Belt-Set und Sportschuhe reichen. Kein Helm, keine Pads, keine Schutzausrüstung nötig." },
  { q: "Ist Flag Football gefährlich?", a: "Flag Football ist eine Nicht-Kontakt-Sportart. Tackling, Blocking und harter Körperkontakt sind verboten. Das Verletzungsrisiko ist deutlich geringer als bei Tackle Football." },
  { q: "Ab welchem Alter kann man spielen?", a: "Flag Football wird ab ca. 6 Jahren angeboten. Es gibt Ligen für Kinder, Jugendliche und Erwachsene — und es ist gemischtgeschlechtlich (Co-Ed) möglich." },
  { q: "Ist Flag Football olympisch?", a: "Ja! Flag Football feiert bei den Olympischen Spielen 2028 in Los Angeles seine Premiere — als erste Form von American Football überhaupt." },
];

export default async function WasIstFlagFootball() {
  const { mdxSource } = await getContentBySlug("was-ist-flag-football");

  return (
    <main>
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: FAQ_ITEMS.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: { "@type": "Answer", text: item.a },
        })),
      }} />

      {/* Hero */}
      <section className="bg-navy">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 md:py-20">
          <p className="text-gold text-xs font-bold uppercase tracking-widest mb-3">Regeln & Grundlagen</p>
          <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-black leading-[0.95] tracking-tight max-w-2xl">
            Was ist Flag Football?
          </h1>
          <p className="text-white/50 text-lg mt-4 max-w-xl">
            Kein Tackling, kein teures Equipment, sofort loslegen — der schnellste Einstieg in American Football.
          </p>
        </div>
      </section>

      <article className="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-16">

        {/* Key facts */}
        <div className="grid sm:grid-cols-3 gap-6 mb-16">
          {[
            { number: "5v5", label: "Spieler pro Team auf dem Feld" },
            { number: "70×25", label: "Yard — Spielfeldgröße" },
            { number: "2×20", label: "Minuten Spielzeit" },
          ].map((fact) => (
            <div key={fact.label} className="border-l-4 border-gold pl-5 py-2">
              <div className="text-navy text-4xl font-black tracking-tight">{fact.number}</div>
              <div className="text-muted text-sm mt-1">{fact.label}</div>
            </div>
          ))}
        </div>

        {/* Field diagram */}
        <section className="mb-16">
          <h2 className="text-navy text-2xl md:text-3xl font-black tracking-tight mb-6">Das Spielfeld</h2>
          <div className="bg-emerald-700 rounded-xl p-6 md:p-8 relative overflow-hidden mb-6">
            <div className="flex">
              <div className="w-[14%] border-2 border-dashed border-white/40 rounded-l-lg flex items-center justify-center min-h-[140px] md:min-h-[180px]">
                <span className="text-white/60 text-xs font-bold uppercase tracking-wider [writing-mode:vertical-lr] rotate-180">Endzone</span>
              </div>
              <div className="flex-1 border-y-2 border-white/40 relative">
                <div className="absolute left-1/2 top-0 bottom-0 border-l-2 border-dashed border-white/40" />
                <div className="absolute left-[8%] top-0 bottom-0 w-[12%] bg-white/10" />
                <div className="absolute right-[8%] top-0 bottom-0 w-[12%] bg-white/10" />
                <div className="flex items-center justify-center h-full min-h-[140px] md:min-h-[180px]">
                  <div className="text-center">
                    <div className="text-white font-bold text-base md:text-lg">70 Yards</div>
                    <div className="text-white/40 text-xs mt-1">+ 2×10 Yard Endzones</div>
                  </div>
                </div>
              </div>
              <div className="w-[14%] border-2 border-dashed border-white/40 rounded-r-lg flex items-center justify-center">
                <span className="text-white/60 text-xs font-bold uppercase tracking-wider [writing-mode:vertical-lr]">Endzone</span>
              </div>
            </div>
            <div className="text-center text-white/40 text-xs mt-3">25 Yards breit</div>
          </div>
          <p className="text-muted text-base leading-relaxed max-w-3xl">
            Das Spielfeld ist 70 Yards lang und 25 Yards breit — deutlich kleiner als ein Tackle-Football-Feld.
            An beiden Enden liegen die Endzones (je 10 Yards). Die helleren Bereiche markieren die No-Run-Zones.
          </p>
        </section>

        {/* MDX content for positions and rules */}
        <div className="prose prose-zinc max-w-3xl prose-headings:text-navy prose-headings:font-black prose-headings:tracking-tight prose-h2:text-2xl prose-h2:md:text-3xl prose-h3:text-lg prose-h3:font-bold prose-strong:text-navy prose-a:text-navy prose-a:underline prose-a:decoration-gold prose-a:decoration-2 prose-a:underline-offset-2 hover:prose-a:text-gold-hover mb-16">
          <MdxContent source={mdxSource} />
        </div>

        {/* FAQ */}
        <section className="mb-16">
          <h2 className="text-navy text-2xl md:text-3xl font-black tracking-tight mb-6">Häufige Fragen</h2>
          <div className="max-w-3xl divide-y divide-zinc-200">
            {FAQ_ITEMS.map((item) => (
              <details key={item.q} className="py-4 group">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <span className="text-navy font-semibold text-base pr-4">{item.q}</span>
                  <span className="text-muted text-xl shrink-0 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="text-muted text-sm mt-3 leading-relaxed">{item.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-navy rounded-xl p-8 md:p-12 text-center">
          <h2 className="text-white text-2xl md:text-3xl font-black mb-3">Bereit loszulegen?</h2>
          <p className="text-white/50 mb-6 max-w-md mx-auto">
            Finde ein Team in deiner Nähe oder schau dir an, welche Ausrüstung du brauchst.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/team-finden" className="bg-gold text-navy font-bold px-6 py-3 rounded-lg hover:bg-gold-hover transition-colors">
              Team finden
            </Link>
            <Link href="/ausruestung" className="border border-white/25 text-white/80 font-semibold px-6 py-3 rounded-lg hover:border-gold hover:text-white transition-colors">
              Equipment-Guide
            </Link>
          </div>
        </section>
      </article>
    </main>
  );
}
