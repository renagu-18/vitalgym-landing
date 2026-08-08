import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import Navbar from "@/components/Navbar";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";
import { negocio } from "@/lib/data";
import "./globals.css";

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
  metadataBase: new URL("https://vitalgym.cl"),
  title: `${negocio.nombre} | Entrenamiento personalizado en ${negocio.ubicacion}`,
  description:
    "Gimnasio en casa con entrenamiento 100% personalizado en San Miguel, Santiago. Máximo 3 personas por bloque, rutina individual y seguimiento de progreso. Coordina tu clase de prueba por WhatsApp.",
  openGraph: {
    title: `${negocio.nombre} | Entrenamiento personalizado`,
    description:
      "Gimnasio en casa con entrenamiento 100% personalizado en San Miguel, Santiago.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${oswald.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-vg-black text-foreground">
        <Navbar />
        <main className="flex-1">{children}</main>
        <WhatsAppFloatingButton />
      </body>
    </html>
  );
}
