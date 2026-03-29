import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description: "Datenschutzerklärung von FlagZone — Informationen zum Umgang mit deinen Daten.",
  robots: { index: false, follow: true },
  alternates: { canonical: "https://flagzone.de/datenschutz" },
};

export default function Datenschutz() {
  return (
    <main className="max-w-3xl mx-auto px-4 sm:px-6 py-12 md:py-16">
      <h1 className="text-navy text-3xl font-black font-headline tracking-tight mb-8">Datenschutzerklärung</h1>
      <div className="space-y-6 text-muted leading-relaxed">
        <section>
          <h2 className="text-navy text-xl font-bold mb-2">1. Verantwortlicher</h2>
          <p>Verantwortlich für die Datenverarbeitung auf dieser Website ist:<br />[Vorname Nachname]<br />[Adresse]<br />E-Mail: info@flagzone.de</p>
        </section>
        <section>
          <h2 className="text-navy text-xl font-bold mb-2">2. Hosting</h2>
          <p>Diese Website wird bei Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA gehostet. Vercel verarbeitet dabei technisch notwendige Daten wie IP-Adressen und Zugriffsdaten.</p>
        </section>
        <section>
          <h2 className="text-navy text-xl font-bold mb-2">3. Analyse</h2>
          <p>Wir verwenden ein cookie-freies Analyse-Tool, das keine personenbezogenen Daten speichert und keine Cookies setzt. Es werden lediglich anonymisierte Zugriffsdaten erhoben. Ein Cookie-Banner ist daher nicht erforderlich.</p>
        </section>
        <section>
          <h2 className="text-navy text-xl font-bold mb-2">4. Affiliate-Links</h2>
          <p>Diese Website enthält Affiliate-Links zu Drittanbietern (z.B. Amazon.de). Wenn du auf einen Affiliate-Link klickst, setzt der jeweilige Anbieter möglicherweise Cookies auf deinem Gerät.</p>
        </section>
        <section>
          <h2 className="text-navy text-xl font-bold mb-2">5. Deine Rechte</h2>
          <p>Du hast das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung der Verarbeitung deiner Daten sowie das Recht auf Datenübertragbarkeit. Bei Fragen wende dich an info@flagzone.de.</p>
        </section>
        <section>
          <h2 className="text-navy text-xl font-bold mb-2">6. Externe Schriftarten</h2>
          <p>Diese Website verwendet Google Fonts (Inter). Beim Aufruf der Seite wird eine Verbindung zu den Servern von Google LLC hergestellt, wobei deine IP-Adresse an Google übertragen wird.</p>
        </section>
      </div>
    </main>
  );
}
