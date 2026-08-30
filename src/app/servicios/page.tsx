import { Activity, ArrowRight, Baby, Eye, Glasses, HeartPulse, Microscope } from "lucide-react";
import Link from "next/link";
import { InteriorPage } from "@/components/InteriorPage";
import { getHomePageContent } from "@/lib/content";

const icons = { eye: Eye, glasses: Glasses, activity: Activity, scan: Microscope, baby: Baby, heart: HeartPulse };

export default async function ServicesPage() {
  const content = await getHomePageContent();
  return <InteriorPage content={content} eyebrow="Servicios" title="Atención visual que se adapta a cada sede." description="Consulta la oferta general y confirma disponibilidad en Medellín, Apartadó o Montería." icon={<Eye aria-hidden="true" size={16} />}>
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{content.services.map((service) => { const Icon = icons[service.icon]; return <article key={service.title} className="interior-card"><span><Icon aria-hidden="true" size={25} /></span><h2>{service.title}</h2><p>{service.description}</p><Link href="/sedes" className="text-link">Consultar por sede <ArrowRight aria-hidden="true" size={16} /></Link></article>; })}</div>
  </InteriorPage>;
}
