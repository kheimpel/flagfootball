import type { Metadata } from "next";
import teamsData from "@/data/teams.json";
import { TeamFinder } from "@/components/TeamFinder";

export const metadata: Metadata = {
  title: "Team finden — Flag Football in Deutschland | FlagZone",
  description:
    "Finde ein Flag-Football-Team in deiner Nähe. Durchsuche Teams nach Bundesland, Stadt und Spielklasse — und steig direkt ein.",
  alternates: { canonical: "https://flagzone.de/team-finden" },
};

export default function TeamFindenPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-navy">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 md:py-20">
          <p className="text-gold text-xs font-bold uppercase tracking-widest mb-3">
            Community
          </p>
          <h1 className="text-gold text-4xl sm:text-5xl md:text-6xl font-black font-headline leading-[0.95] tracking-tight max-w-2xl">
            Finde ein Team in deiner Nähe
          </h1>
          <p className="text-white/50 text-lg mt-4 max-w-xl">
            Suche nach Bundesland, Stadt oder Spielklasse — und finde dein nächstes Team direkt hier.
          </p>
        </div>
      </section>

      {/* Team Finder */}
      <TeamFinder teams={teamsData} />
    </main>
  );
}
