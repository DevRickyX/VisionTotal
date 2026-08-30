import type { Metadata } from "next";
import "@fontsource-variable/manrope";
import "./globals.css";
import { ScrollToTop } from "@/components/ScrollToTop";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.visiontotal.com.co"),
  title: {
    default: "Visión Total | Salud visual en Medellín, Apartadó y Montería",
    template: "%s | Visión Total",
  },
  description: "Atención oftalmológica integral, optometría, cirugía y ayudas diagnósticas en Medellín, Apartadó y Montería.",
  openGraph: {
    title: "Visión Total | Atención oftalmológica integral",
    description: "Cuidamos tu salud visual con atención especializada en Medellín, Apartadó y Montería.",
    locale: "es_CO",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" data-contrast="normal">
      <body><ScrollToTop />{children}</body>
    </html>
  );
}
