"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type Event = {
  id: string;
  title: string;
  dateStart: string;
  city: string;
};

function getDaysUntil(dateStr: string): number {
  const now = new Date();
  const target = new Date(dateStr);
  const diffMs = target.getTime() - now.getTime();
  return Math.ceil(diffMs / (1000 * 60 * 60 * 24));
}

export function EventTicker({ events }: { events: Event[] }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const upcoming = events
    .filter((e) => getDaysUntil(e.dateStart) > 0)
    .sort((a, b) => getDaysUntil(a.dateStart) - getDaysUntil(b.dateStart));

  const next = upcoming[0];
  if (!next) return null;

  const days = getDaysUntil(next.dateStart);

  return (
    <div className="bg-gold text-navy text-xs font-bold">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-center gap-3 h-8 overflow-hidden">
        <span className="uppercase tracking-wider text-[10px] font-black opacity-70">Nächstes Event</span>
        <span className="hidden sm:inline opacity-40">|</span>
        <Link href={`/${next.id === "wm-2026" ? "wm-2026-duesseldorf" : next.id === "olympia-2028" ? "olympia-2028" : ""}`} className="hover:underline truncate">
          {next.title} — {next.city}
        </Link>
        {mounted && (
          <>
            <span className="opacity-40">|</span>
            <span className="font-black tabular-nums shrink-0">
              noch {days} {days === 1 ? "Tag" : "Tage"}
            </span>
          </>
        )}
      </div>
    </div>
  );
}
