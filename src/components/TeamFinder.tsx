"use client";

import { useState, useMemo } from "react";

type Team = {
  name: string;
  city: string;
  state: string;
  lat: number;
  lng: number;
  league: string;
  website: string;
  gender: string[];
};

const STATES: Record<string, string> = {
  BW: "Baden-Württemberg",
  BY: "Bayern",
  BE: "Berlin",
  BB: "Brandenburg",
  HB: "Bremen",
  HH: "Hamburg",
  HE: "Hessen",
  MV: "Mecklenburg-Vorpommern",
  NI: "Niedersachsen",
  NRW: "Nordrhein-Westfalen",
  RP: "Rheinland-Pfalz",
  SL: "Saarland",
  SN: "Sachsen",
  ST: "Sachsen-Anhalt",
  SH: "Schleswig-Holstein",
  TH: "Thüringen",
};

export function TeamFinder({ teams }: { teams: Team[] }) {
  const [search, setSearch] = useState("");
  const [stateFilter, setStateFilter] = useState("");
  const [genderFilter, setGenderFilter] = useState("");

  const statesInData = useMemo(() => {
    const set = new Set(teams.map((t) => t.state));
    return Array.from(set).sort((a, b) =>
      (STATES[a] ?? a).localeCompare(STATES[b] ?? b)
    );
  }, [teams]);

  const filtered = useMemo(() => {
    const q = search.toLowerCase().trim();
    return teams.filter((team) => {
      if (q && !team.name.toLowerCase().includes(q) && !team.city.toLowerCase().includes(q)) {
        return false;
      }
      if (stateFilter && team.state !== stateFilter) {
        return false;
      }
      if (genderFilter && !team.gender.includes(genderFilter)) {
        return false;
      }
      return true;
    });
  }, [teams, search, stateFilter, genderFilter]);

  return (
    <div>
      {/* Filters */}
      <div className="bg-white border-b border-zinc-200 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex flex-col sm:flex-row gap-3">
          <input
            type="search"
            placeholder="Team oder Stadt suchen …"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 border border-zinc-300 rounded-lg px-4 py-2.5 text-sm text-[#18181b] placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all"
          />
          <select
            value={stateFilter}
            onChange={(e) => setStateFilter(e.target.value)}
            className="border border-zinc-300 rounded-lg px-4 py-2.5 text-sm text-[#18181b] bg-white focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all"
          >
            <option value="">Alle Bundesländer</option>
            {statesInData.map((abbr) => (
              <option key={abbr} value={abbr}>
                {STATES[abbr] ?? abbr}
              </option>
            ))}
          </select>
          <select
            value={genderFilter}
            onChange={(e) => setGenderFilter(e.target.value)}
            className="border border-zinc-300 rounded-lg px-4 py-2.5 text-sm text-[#18181b] bg-white focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all"
          >
            <option value="">Herren &amp; Damen</option>
            <option value="men">Herren</option>
            <option value="women">Damen</option>
          </select>
        </div>
      </div>

      {/* Results */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <p className="text-muted text-sm font-bold uppercase tracking-widest mb-6">
          {filtered.length} {filtered.length === 1 ? "Team" : "Teams"} gefunden
        </p>

        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-muted text-lg font-bold mb-2">Keine Teams gefunden</p>
            <p className="text-muted text-sm">Passe deine Filter an oder entferne die Suche.</p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 gap-5">
            {filtered.map((team) => (
              <div
                key={team.name}
                className="bg-white border border-zinc-200 rounded-2xl p-6 flex flex-col gap-4 hover:border-gold/50 hover:shadow-lg hover:shadow-gold/5 transition-all duration-200"
              >
                {/* Header row */}
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h2 className="text-[#18181b] font-black text-lg leading-snug">{team.name}</h2>
                    <p className="text-muted text-sm mt-0.5">
                      {team.city}, {STATES[team.state] ?? team.state}
                    </p>
                  </div>
                  <span className="shrink-0 bg-navy/5 text-navy text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full">
                    {team.league}
                  </span>
                </div>

                {/* Gender badges */}
                <div className="flex gap-2">
                  {team.gender.includes("women") && (
                    <span className="bg-gold text-navy text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full">
                      Damen
                    </span>
                  )}
                  {team.gender.includes("men") && (
                    <span className="bg-navy text-white text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full">
                      Herren
                    </span>
                  )}
                </div>

                {/* Website */}
                {team.website && (
                  <a
                    href={team.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-navy text-sm font-bold hover:text-gold transition-colors duration-150 inline-flex items-center gap-1"
                  >
                    Website besuchen →
                  </a>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Footer note */}
        <p className="text-muted text-sm text-center mt-14">
          Dein Team fehlt?{" "}
          <a
            href="mailto:kontakt@flagzone.de?subject=Team%20eintragen"
            className="text-navy font-bold hover:text-gold transition-colors duration-150 underline underline-offset-2 decoration-gold/50"
          >
            Schreib uns
          </a>{" "}
          und wir tragen es ein.
        </p>
      </div>
    </div>
  );
}
