import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { YouTubeEmbed } from "@/components/YouTubeEmbed";
import eventsData from "@/data/events.json";

function formatDateRange(start: string, end: string): string {
  const s = new Date(start);
  const e = new Date(end);
  const months = [
    "Januar", "Februar", "März", "April", "Mai", "Juni",
    "Juli", "August", "September", "Oktober", "November", "Dezember",
  ];
  if (s.getMonth() === e.getMonth() && s.getFullYear() === e.getFullYear()) {
    return `${s.getDate()}.–${e.getDate()}. ${months[s.getMonth()]} ${s.getFullYear()}`;
  }
  return `${s.getDate()}. ${months[s.getMonth()]}–${e.getDate()}. ${months[e.getMonth()]} ${s.getFullYear()}`;
}

const articles = [
  {
    tag: "Regeln",
    title: "Die Grundregeln des Flag Footballs — alles, was du wissen musst",
    description: "Downs, Scoring, Rushing Passer: Wir erklären, wie das Spiel funktioniert — ohne Ausrüstung, ohne Tackling.",
    readTime: "5 Min.",
    date: "28. März 2026",
    href: "/was-ist-flag-football",
  },
  {
    tag: "WM 2026",
    title: "IFAF WM 2026 in Düsseldorf: Deutschland als Gastgeber",
    description: "32 Teams, 19 Nationen — die letzte große Bühne vor den Olympischen Spielen 2028. Was du wissen musst.",
    readTime: "4 Min.",
    date: "28. März 2026",
    href: "/wm-2026-duesseldorf",
  },
  {
    tag: "Equipment",
    title: "Ausrüstung für Flag Football: Was brauchst du wirklich?",
    description: "Flag-Gürtel, Cleats, Handschuhe — oder doch nur Sneaker? Unser Einsteigerguide für alle Budgets.",
    readTime: "6 Min.",
    date: "28. März 2026",
    href: "/ausruestung",
  },
];

export default function Home() {
  return (
    <main>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "FlagZone",
          url: "https://flagzone.de",
          description: "Dein Einstieg in Flag Football — Regeln, Teams, Events & mehr.",
          inLanguage: "de-DE",
        }}
      />

      {/* ── HERO ── */}
      <section className="relative bg-navy overflow-hidden min-h-[70vh] flex items-center">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/dave-adamson--nATH0CrkMU-unsplash.jpg')" }}
        />
        <div className="absolute inset-0 bg-navy/80" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-16 grid lg:grid-cols-[1fr_auto] gap-12 items-center w-full">
          <div className="max-w-3xl">
            {/* badge */}
            <span className="inline-flex items-center gap-2 border border-gold/40 text-gold text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-gold inline-block" />
              Ab 2028 olympisch
            </span>

            <h1
              className="text-gold leading-[0.92] font-black font-headline mb-6"
              style={{ fontSize: "clamp(3rem, 7vw, 6rem)" }}
            >
              Flag Football<br />
              in Deutschland.<br />
              <span className="text-white">Einfach loslegen.</span>
            </h1>

            <p className="text-white/60 text-lg max-w-xl mb-10 leading-relaxed">
              Kein Tackling. Kein Equipment-Wahnsinn. Nur Speed, Strategie — und der Spaß am amerikanischen Football.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/was-ist-flag-football"
                className="bg-gold text-navy font-black px-8 py-4 rounded-lg text-sm uppercase tracking-wide hover:bg-gold-hover transition-colors duration-150"
              >
                Wie funktioniert&apos;s?
              </Link>
              <Link
                href="/team-finden"
                className="border border-white/30 text-white font-bold px-8 py-4 rounded-lg text-sm uppercase tracking-wide hover:bg-white/10 hover:border-white/50 transition-all duration-150"
              >
                Team finden →
              </Link>
            </div>
          </div>

          {/* side decoration */}
          <div className="hidden lg:flex flex-col gap-3 text-right">
            {["Offensiv", "Defensiv", "Special Teams"].map((label) => (
              <span key={label} className="text-white/20 font-black text-5xl leading-none select-none">
                {label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section className="bg-white border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <dl className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-zinc-200">
            {[
              { value: "500+", label: "Vereine in Deutschland" },
              { value: "2028", label: "Olympia-Premiere" },
              { value: "20 Mio", label: "NFL-Fans in DE" },
              { value: "100+", label: "Länder weltweit" },
            ].map(({ value, label }) => (
              <div key={label} className="px-6 lg:px-10 py-6 first:pl-0 last:pr-0">
                <dd className="text-[#18181b] font-black text-3xl lg:text-4xl leading-none mb-1">
                  {value}
                </dd>
                <dt className="text-muted text-[10px] font-bold uppercase tracking-widest">
                  {label}
                </dt>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── CONTENT CARDS (mixed grid) ── */}
      <section className="bg-bg py-14">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="mb-8">
            <p className="text-gold font-black text-xs uppercase tracking-widest mb-2">Einsteiger</p>
            <h2 className="text-[#18181b] font-black font-headline text-4xl lg:text-5xl leading-tight">
              Dein Weg<br />auf den Platz.
            </h2>
          </div>

          {/* 5-col grid: large card (3) + two stacked (2) */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-5">
            {/* Featured card — 3 cols */}
            <Link
              href="/was-ist-flag-football"
              className="group lg:col-span-3 bg-navy rounded-2xl p-10 flex flex-col justify-between min-h-[400px] relative overflow-hidden hover:ring-2 hover:ring-gold/40 transition-all duration-200"
            >
              <div>
                <span className="inline-block bg-gold text-navy text-xs font-black uppercase tracking-widest px-3 py-1 rounded-full mb-6">
                  Grundlagen
                </span>
                <h3 className="text-white font-black text-3xl lg:text-4xl leading-tight mb-4">
                  Was ist<br />Flag Football?
                </h3>
                <p className="text-white/60 text-base leading-relaxed max-w-sm">
                  Kein Helm, kein Tackling — und trotzdem alles, was Football großartig macht. Regeln, Positionen, Spielprinzip.
                </p>
              </div>
              <div className="flex items-center gap-2 text-gold font-bold text-sm group-hover:gap-4 transition-all duration-200 mt-8">
                Jetzt lesen <span aria-hidden>→</span>
              </div>
            </Link>

            {/* Two smaller cards — 2 cols */}
            <div className="lg:col-span-2 flex flex-col gap-5">
              <Link
                href="/olympia-2028"
                className="group bg-white border border-zinc-200 rounded-2xl p-8 flex flex-col justify-between min-h-[190px] hover:border-gold/50 hover:shadow-lg hover:shadow-gold/5 transition-all duration-200"
              >
                <div>
                  <span className="inline-block bg-gold/10 text-gold-hover text-xs font-black uppercase tracking-widest px-3 py-1 rounded-full mb-4">
                    Olympia 2028
                  </span>
                  <h3 className="text-[#18181b] font-black text-xl leading-tight">
                    Flag Football als olympische Disziplin — was steckt dahinter?
                  </h3>
                </div>
                <span className="text-gold font-bold text-sm group-hover:underline mt-4 inline-block">
                  Mehr erfahren →
                </span>
              </Link>

              <Link
                href="/team-finden"
                className="group bg-white border border-zinc-200 rounded-2xl p-8 flex flex-col justify-between min-h-[190px] hover:border-gold/50 hover:shadow-lg hover:shadow-gold/5 transition-all duration-200"
              >
                <div>
                  <span className="inline-block bg-navy/5 text-navy font-black text-xs uppercase tracking-widest px-3 py-1 rounded-full mb-4">
                    Einstieg
                  </span>
                  <h3 className="text-[#18181b] font-black text-xl leading-tight">
                    Team in deiner Stadt finden — so geht&apos;s
                  </h3>
                </div>
                <span className="text-navy font-bold text-sm group-hover:underline mt-4 inline-block">
                  Team suchen →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── VIDEO: So funktioniert Flag Football ── */}
      <section className="bg-white py-14">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <YouTubeEmbed
              videoId="RlIhXGzBCSU"
              title="So spielst du (Flag) Football — Deutsches Tutorial der Carolina Panthers"
            />
            <div>
              <p className="text-gold font-black text-xs uppercase tracking-widest mb-2">Video</p>
              <h2 className="text-[#18181b] font-black font-headline text-3xl lg:text-4xl leading-tight mb-4">
                Flag Football in 6 Minuten erklärt
              </h2>
              <p className="text-muted text-base leading-relaxed mb-6">
                Die Carolina Panthers erklären auf Deutsch, wie Flag Football funktioniert — Regeln, Gameplay und warum der Sport so schnell wächst.
              </p>
              <Link
                href="/was-ist-flag-football"
                className="text-navy font-bold text-sm hover:text-gold-hover transition-colors"
              >
                Ausführlicher Regel-Guide →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── EVENTS ── */}
      <section className="bg-navy py-14">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-10 items-start">
          {/* Left: heading */}
          <div className="lg:sticky lg:top-24">
            <p className="text-gold font-black text-xs uppercase tracking-widest mb-4">Termine</p>
            <h2 className="text-white font-black font-headline text-4xl lg:text-5xl leading-tight mb-6">
              2026 wird das<br />
              <span className="text-gold">Jahr des Flag</span><br />
              Footballs.
            </h2>
            <p className="text-white/50 text-base leading-relaxed max-w-sm">
              Von der Deutschen Meisterschaft bis zur Weltmeisterschaft in Düsseldorf — der Kalender 2026 hat es in sich.
            </p>
          </div>

          {/* Right: event cards */}
          <div className="flex flex-col gap-4">
            {eventsData.map((event) => (
              <div
                key={event.id}
                className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-200"
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <span
                      className={`inline-block text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded mb-2 ${
                        event.type === "international"
                          ? "bg-gold/20 text-gold"
                          : "bg-white/10 text-white/60"
                      }`}
                    >
                      {event.type === "international" ? "International" : "National"}
                    </span>
                    <h3 className="text-white font-bold text-lg leading-snug">{event.title}</h3>
                  </div>
                  <p className="text-white/40 text-sm font-mono whitespace-nowrap shrink-0">
                    {event.city}
                  </p>
                </div>
                <p className="text-white/50 text-sm mb-3 leading-relaxed">{event.description}</p>
                <p className="text-gold text-sm font-bold">
                  {formatDateRange(event.dateStart, event.dateEnd)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ARTICLE TEASERS ── */}
      <section className="bg-bg-warm py-14">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="mb-8">
            <h2 className="text-[#18181b] font-black font-headline text-3xl lg:text-4xl">
              Lies dich rein.
            </h2>
          </div>

          <div className="flex flex-col gap-5">
            {articles.map((article) => (
              <Link
                key={article.href}
                href={article.href}
                className="group bg-white border border-zinc-200 rounded-2xl p-6 flex gap-6 items-center hover:shadow-xl hover:shadow-zinc-900/5 hover:border-zinc-300 transition-all duration-200"
              >
                {/* thumbnail */}
                <div className={`shrink-0 w-20 h-20 lg:w-28 lg:h-28 rounded-lg flex items-center justify-center ${
                  article.tag === "Regeln" ? "bg-navy" : article.tag === "WM 2026" ? "bg-gold" : "bg-navy-light"
                }`}>
                  <span className={`text-2xl lg:text-3xl font-headline font-black ${
                    article.tag === "WM 2026" ? "text-navy" : "text-white"
                  }`}>
                    {article.tag.charAt(0)}
                  </span>
                </div>

                {/* text */}
                <div className="flex-1 min-w-0">
                  <span className="inline-block bg-gold/10 text-gold-hover text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded mb-2">
                    {article.tag}
                  </span>
                  <h3 className="text-[#18181b] font-black text-lg lg:text-xl leading-snug mb-2 group-hover:text-navy transition-colors duration-150">
                    {article.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed line-clamp-2 mb-3">
                    {article.description}
                  </p>
                  <span className="text-muted text-xs font-bold uppercase tracking-wide">
                    {article.date} · {article.readTime} Lesezeit
                  </span>
                </div>

                <span
                  aria-hidden
                  className="shrink-0 text-zinc-300 group-hover:text-gold group-hover:translate-x-1 transition-all duration-200 text-xl hidden lg:block"
                >
                  →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
