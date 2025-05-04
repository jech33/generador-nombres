import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Generador de Nombres Creativos | Herramienta Gratuita",
  description:
    "Genera nombres únicos y memorables para marcas, empresas, productos y más. Ideal para emprendedores, creativos y startups.",
  keywords: [
    "generador de nombres",
    "nombres creativos",
    "nombres para empresas",
    "nombres para marcas",
    "nombres originales",
    "ideas de nombres",
    "nombres para productos",
  ],
  metadataBase: new URL("https://generadordenombres.com"), // TODO: update with real domain
  openGraph: {
    title: "Generador de Nombres Creativos",
    description:
      "Inspírate con ideas originales para tu próximo proyecto o negocio.",
    url: "https://generadordenombres.com",
    siteName: "Generador de Nombres",
    images: [
      {
        url: "https://generadordenombres.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Generador de Nombres",
      },
    ],
    locale: "es_CO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Generador de Nombres Creativos",
    description:
      "Herramienta gratuita para generar nombres para marcas, empresas y más.",
    images: ["https://generadordenombres.com/og-image.jpg"],
  },
  alternates: {
    canonical: "https://generadordenombres.com",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  other: process.env.NEXT_PUBLIC_GA_ID
    ? {
        "google-analytics": process.env.NEXT_PUBLIC_GA_ID,
      }
    : {},
};
