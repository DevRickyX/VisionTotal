import { ArrowUpRight, Check, Star } from "lucide-react";
import { InteriorPage } from "@/components/InteriorPage";
import { getHomePageContent } from "@/lib/content";

export default async function PrivatePatientsPage() {
  const content = await getHomePageContent();
  return <InteriorPage content={content} eyebrow="Particulares" title="Atención particular, sin vueltas." description="Elige tu ciudad y cuéntanos qué servicio necesitas. Nuestro equipo te ayudará a continuar." icon={<Star aria-hidden="true" size={16} />}>
    <div className="grid gap-8 lg:grid-cols-[1fr_.85fr]"><div><h2 className="interior-section-title">Cuéntanos dónde necesitas atención.</h2><div className="mt-7 grid gap-4 sm:grid-cols-3">{content.appointmentChannels.map((channel) => <a key={channel.city} href={channel.href} className="choice-card"><span><Check aria-hidden="true" size={15} /></span><strong>{channel.city}</strong><small>{channel.action}</small><ArrowUpRight aria-hidden="true" size={17} /></a>)}</div></div><aside className="contact-aside"><p>Servicios de interés</p><ul><li>Consulta especializada</li><li>Optometría</li><li>Ayudas diagnósticas</li><li>Cirugía oftalmológica</li></ul><a href={`mailto:${content.organization.email}?subject=Solicitud%20de%20atención%20particular`} className="modern-button commercial-button mt-7">Enviar solicitud por correo <ArrowUpRight aria-hidden="true" size={17} /></a></aside></div>
  </InteriorPage>;
}
