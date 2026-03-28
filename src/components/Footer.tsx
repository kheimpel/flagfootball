import Link from "next/link";

const FOOTER_LINKS = [
  { href: "/was-ist-flag-football", label: "Regeln" },
  { href: "/olympia-2028", label: "Olympia 2028" },
  { href: "/wm-2026-duesseldorf", label: "WM 2026" },
  { href: "/ausruestung", label: "Equipment" },
  { href: "/team-finden", label: "Team finden" },
];

const LEGAL_LINKS = [
  { href: "/impressum", label: "Impressum" },
  { href: "/datenschutz", label: "Datenschutz" },
];

export function Footer() {
  return (
    <footer className="bg-navy text-white/50 mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
          <div>
            <Link href="/" className="text-lg font-black tracking-tight">
              <span className="text-white">Flag</span>
              <span className="text-gold">Zone</span>
            </Link>
            <p className="mt-2 text-sm max-w-xs">
              Dein Einstieg in Flag Football — Regeln, Teams, Events & mehr.
            </p>
          </div>
          <div className="flex gap-12">
            <div>
              <h4 className="text-white/70 text-xs font-bold uppercase tracking-wider mb-3">Inhalte</h4>
              <ul className="space-y-1.5">
                {FOOTER_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm hover:text-gold transition-colors">{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-white/70 text-xs font-bold uppercase tracking-wider mb-3">Rechtliches</h4>
              <ul className="space-y-1.5">
                {LEGAL_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm hover:text-gold transition-colors">{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-white/10 text-xs text-center">
          &copy; {new Date().getFullYear()} FlagZone. Made with 🏈 in Deutschland.
        </div>
      </div>
    </footer>
  );
}
