import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { EventTicker } from "@/components/EventTicker";
import { Footer } from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react";
import eventsData from "@/data/events.json";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://flagzone.de"),
  title: {
    default: "FlagZone — Dein Einstieg in Flag Football",
    template: "%s | FlagZone",
  },
  description:
    "Alles rund um Flag Football in Deutschland: Regeln, Teams, Events, Olympia 2028 und die WM 2026 in Düsseldorf.",
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: "FlagZone",
  },
  twitter: {
    card: "summary_large_image",
  },
  alternates: {
    canonical: "https://flagzone.de",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body className="min-h-screen flex flex-col">
        <Nav />
        <EventTicker events={eventsData} />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
