import { ArrowUpRight, CalendarDays, MapPin } from "lucide-react";
import { InteriorPage } from "@/components/InteriorPage";
import { getHomePageContent } from "@/lib/content";

export default async function AppointmentPage() {
  const content = await getHomePageContent();
  return <InteriorPage content={content} eyebrow="Solicitar cita" title="Primero elige tu ciudad." description="Comunícate con el equipo correspondiente a Medellín, Apartadó o Montería para solicitar orientación." icon={<CalendarDays aria-hidden="true" size={16} />}>
    <div className="grid gap-5 lg:grid-cols-3">{content.appointmentChannels.map((channel) => <article key={channel.city} className="appointment-card"><span><MapPin aria-hidden="true" size={22} /></span><p>{channel.channel}</p><h2>{channel.city}</h2><small>{channel.description}</small><a href={channel.href} target={channel.href.startsWith("http") ? "_blank" : undefined} rel={channel.href.startsWith("http") ? "noreferrer" : undefined}>{channel.action}<ArrowUpRight aria-hidden="true" size={17} /></a></article>)}</div>
    <p className="mt-8 rounded-xl bg-[#fff6e2] p-4 text-sm leading-6 text-[#654b16]">La solicitud por WhatsApp o teléfono inicia el contacto; la cita queda confirmada únicamente cuando Visión Total lo indique.</p>
  </InteriorPage>;
}
