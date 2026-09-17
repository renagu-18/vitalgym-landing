import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import Script from "next/script";
import Navbar from "@/components/Navbar";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";
import { seo } from "@/lib/data";
import "./globals.css";

const GA_MEASUREMENT_ID = "G-MF20G10PRR";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.vitalgym.cl"),
  title: seo.titulo,
  description: seo.descripcion,
  openGraph: {
    title: seo.titulo,
    description: seo.descripcion,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: seo.titulo,
    description: seo.descripcion,
  },
  verification: {
    google: "x8z7ghrPCdVjGuaF3iQ8mZDfYFLt9UJvveVppIVgk-s",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${oswald.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-vg-black text-foreground">
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
        <Navbar />
        <main className="flex-1">{children}</main>
        <WhatsAppFloatingButton />
      </body>
    </html>
  );
}
