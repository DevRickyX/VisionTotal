import { ArrowUpRight, MapPin, Phone } from "lucide-react";
import { InteriorPage } from "@/components/InteriorPage";
import { getHomePageContent } from "@/lib/content";

export default async function LocationsPage() {
  const content = await getHomePageContent();
  return <InteriorPage content={content} eyebrow="Sedes" title="Encuentra Visión Total cerca de ti." description="Consulta la dirección y los medios de contacto disponibles en Medellín, Apartadó y Montería." icon={<MapPin aria-hidden="true" size={16} />}>
    <div className="space-y-6">{content.locations.map((location) => { const channel = content.appointmentChannels.find((item) => item.city === location.city); return <article key={location.city} id={location.city.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")} className="location-detail-card"><div><p>{location.region}</p><h2>{location.city}</h2><strong>{location.label}</strong><address>{location.address}</address><small>{location.note}</small></div>{channel && <div className="location-channel"><span><Phone aria-hidden="true" size={20} /></span><p>{channel.channel}</p><strong>{channel.description}</strong><a href={channel.href} target={channel.href.startsWith("http") ? "_blank" : undefined} rel={channel.href.startsWith("http") ? "noreferrer" : undefined}>{channel.action}<ArrowUpRight aria-hidden="true" size={16} /></a></div>}</article>; })}</div>
  </InteriorPage>;
}
