import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import type { SiteContent } from "@/data/site-content";

export function Footer({ content }: { content: SiteContent }) {
  return (
    <footer className="bg-[#031f35] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr] lg:px-8">
        <div><div className="inline-flex rounded-lg bg-white p-3"><Image src="/images/logo.png" alt="Visión Total" width={180} height={38} style={{ height: "auto" }} /></div><p className="mt-5 max-w-md text-base leading-7 text-white/80">Atención especializada para cuidar la salud visual de pacientes y familias en Antioquia y Córdoba.</p></div>
        <div><h2 className="text-lg font-extrabold">Canales de atención</h2><ul className="mt-4 space-y-3 text-white/85"><li><a className="inline-flex items-start gap-3 hover:text-white hover:underline" href={content.organization.phoneHref}><Phone aria-hidden="true" className="mt-1 shrink-0" size={18} />{content.organization.phoneDisplay}</a></li><li><a className="inline-flex items-start gap-3 break-all hover:text-white hover:underline" href={`mailto:${content.organization.email}`}><Mail aria-hidden="true" className="mt-1 shrink-0" size={18} />{content.organization.email}</a></li></ul></div>
        <div><h2 className="text-lg font-extrabold">Dónde estamos</h2><ul className="mt-4 space-y-3 text-white/85">{content.locations.map((location) => <li key={location.city}><Link href={`/sedes#${location.city.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`} className="flex items-center gap-3 hover:text-white hover:underline"><MapPin aria-hidden="true" size={18} />{location.city}, {location.region}</Link></li>)}</ul></div>
      </div>
      <div className="border-t border-white/20"><div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-6 text-sm text-white/75 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8"><p>© {new Date().getFullYear()} {content.organization.legalName}</p><nav aria-label="Enlaces institucionales y legales" className="flex flex-wrap gap-x-5 gap-y-2"><Link href="/nosotros" className="hover:text-white hover:underline">Nosotros</Link><Link href="/politica-de-datos" className="hover:text-white hover:underline">Política de datos</Link><Link href="/derechos-y-deberes" className="hover:text-white hover:underline">Derechos y deberes</Link><Link href="/pqrsf" className="hover:text-white hover:underline">PQRSF</Link></nav></div></div>
    </footer>
  );
}
