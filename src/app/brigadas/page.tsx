import { ArrowUpRight, CalendarRange } from "lucide-react";
import { CommunityIllustration } from "@/components/CommunityIllustration";
import { InteriorPage } from "@/components/InteriorPage";
import { getHomePageContent } from "@/lib/content";

export default async function BrigadesPage() {
  const content = await getHomePageContent();
  return <InteriorPage content={content} eyebrow="Brigadas" title="Salud visual más cerca de las comunidades." description="Consulta las jornadas de atención programadas y los medios para recibir más información." icon={<CalendarRange aria-hidden="true" size={16} />}>
    <div className="grid items-center gap-10 rounded-[28px] bg-[#e7f5f1] p-6 sm:p-10 lg:grid-cols-2"><CommunityIllustration /><div><p className="modern-eyebrow">Próximas jornadas</p><h2 className="interior-section-title mt-4">Conoce las próximas brigadas de salud visual.</h2><p className="mt-4 leading-7 text-[#607582]">El calendario de fechas y municipios se actualiza de acuerdo con la programación institucional. Escríbenos para consultar la próxima jornada.</p><a href={`mailto:${content.organization.email}?subject=Información%20sobre%20brigadas`} className="modern-button modern-button-dark mt-7">Consultar brigadas <ArrowUpRight aria-hidden="true" size={17} /></a></div></div>
  </InteriorPage>;
}
