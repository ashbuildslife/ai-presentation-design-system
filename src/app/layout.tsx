import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "AI Presentation Design System",
  description: "Design tokens, brand profiles, and AI-powered slide generation with narrative intelligence and content review."
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}