import { ArrowUpRight, ClipboardCheck } from "lucide-react";
import { InteriorPage } from "@/components/InteriorPage";
import { getHomePageContent } from "@/lib/content";

export default async function SurveyPage() {
  const content = await getHomePageContent();
  return <InteriorPage content={content} eyebrow="Encuesta de satisfacción" title="Tu experiencia también mejora la atención." description="Cuéntanos cómo fue tu atención. Las encuestas se gestionan de acuerdo con la ciudad y la sede visitada." icon={<ClipboardCheck aria-hidden="true" size={16} />}>
    <div className="action-panel"><div><p>Encuesta por sede</p><h2>Solicita la encuesta correspondiente a tu atención</h2><span>Escríbenos indicando la ciudad y la sede donde recibiste el servicio. El equipo de Atención al Usuario te compartirá el formulario correspondiente.</span></div><a href={`mailto:${content.organization.email}?subject=Encuesta%20de%20satisfacción`} className="modern-button modern-button-dark">Solicitar encuesta por correo <ArrowUpRight aria-hidden="true" size={17} /></a></div>
  </InteriorPage>;
}
