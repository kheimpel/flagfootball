import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum und Anbieterkennzeichnung von FlagZone.",
  robots: { index: false, follow: true },
  alternates: { canonical: "https://flagzone.de/impressum" },
};

export default function Impressum() {
  return (
    <main className="max-w-3xl mx-auto px-4 sm:px-6 py-12 md:py-16">
      <h1 className="text-navy text-3xl font-black font-headline tracking-tight mb-8">Impressum</h1>
      <div className="space-y-6 text-muted leading-relaxed">
        <section>
          <h2 className="text-navy text-xl font-bold mb-2">Angaben gemäß § 5 TMG</h2>
          <p>Konrad Heimpel<br />Fritz-Salm-Straße 17<br />68167 Mannheim<br />Deutschland</p>
        </section>
        <section>
          <h2 className="text-navy text-xl font-bold mb-2">Kontakt</h2>
          <p>E-Mail: kontakt@flagzone.de</p>
        </section>
        <section>
          <h2 className="text-navy text-xl font-bold mb-2">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
          <p>Konrad Heimpel<br />Fritz-Salm-Straße 17<br />68167 Mannheim</p>
        </section>
        <section>
          <h2 className="text-navy text-xl font-bold mb-2">Haftungsausschluss</h2>
          <h3 className="text-navy font-semibold text-base mb-1">Haftung für Inhalte</h3>
          <p>Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.</p>
          <h3 className="text-navy font-semibold text-base mb-1 mt-4">Haftung für Links</h3>
          <p>Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter verantwortlich.</p>
        </section>
        <section>
          <h2 className="text-navy text-xl font-bold mb-2">Affiliate-Links</h2>
          <p>Diese Website enthält Affiliate-Links. Wenn du über diese Links Produkte kaufst, erhalten wir eine kleine Provision. Für dich ändert sich am Preis nichts. Affiliate-Links sind entsprechend gekennzeichnet.</p>
        </section>
      </div>
    </main>
  );
}
