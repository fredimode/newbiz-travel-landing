import type { Metadata } from "next";
import { DM_Serif_Display, DM_Sans } from "next/font/google";
import "./globals.css";

const dmSerifDisplay = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const dmSans = DM_Sans({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://newbiztravel.com.ar";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "New Biz Travel · Diseñamos tu viaje a medida",
  description:
    "Agencia de viajes en Buenos Aires. Asesoramiento personalizado, mejores precios y acompañamiento durante todo tu viaje. Legajo EVyT 14764.",
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false },
  },
  openGraph: {
    title: "New Biz Travel · Diseñamos tu viaje a medida",
    description:
      "Agencia de viajes en Buenos Aires. Asesoramiento personalizado, mejores precios y acompañamiento durante todo tu viaje.",
    url: siteUrl,
    siteName: "New Biz Travel",
    locale: "es_AR",
    type: "website",
    // og:image se genera automáticamente desde el archivo de convención
    // src/app/opengraph-image.jpg (no referenciar archivos manuales aquí).
  },
  twitter: {
    card: "summary_large_image",
    title: "New Biz Travel · Diseñamos tu viaje a medida",
    description:
      "Agencia de viajes en Buenos Aires. Asesoramiento personalizado, mejores precios y acompañamiento durante todo tu viaje.",
    // twitter:image cae automáticamente al og:image del archivo de convención.
  },
  other: {
    "theme-color": "#0d9488",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es-AR"
      className={`${dmSerifDisplay.variable} ${dmSans.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
