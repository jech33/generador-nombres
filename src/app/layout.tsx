import { Inter } from "next/font/google";
import "@/styles/globals.css";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import { AdBanner } from "@/components/AdBanner";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <GoogleAnalytics />
      </head>
      <body className={inter.className}>
        <AdBanner position="top" />
        {children}
        <AdBanner position="bottom" />
      </body>
    </html>
  );
}
