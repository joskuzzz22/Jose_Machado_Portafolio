import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { LanguageProvider } from "@/lib/language";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "José Machado — AI Solutions Engineer & Product Owner",
  description:
    "AI Solutions Engineer & Digital Transformation Product Owner. Founder of the Process Automation Office at Veritas Prime — shipping AI-powered products at the intersection of SAP, Google Workspace and LLMs.",
  keywords: [
    "AI Solutions Engineer",
    "Product Owner",
    "SAP SuccessFactors",
    "MCP",
    "Process Automation",
    "José Machado",
  ],
  openGraph: {
    title: "José Machado — AI Solutions Engineer & Product Owner",
    description:
      "AI-powered products in production: MCP server for SAP SuccessFactors, process automation, analytics dashboards. Lima, Perú — remote-ready.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
