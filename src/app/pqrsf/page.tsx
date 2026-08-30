import { ArrowUpRight, MessageSquareText } from "lucide-react";
import { InteriorPage } from "@/components/InteriorPage";
import { getHomePageContent } from "@/lib/content";

const existingForm = "https://docs.google.com/forms/d/e/1FAIpQLSeIRqq_-V6bx7Ow-gswM9m_r3oqpWUr6DFAKSxPerdx8HwsUw/viewform";

export default async function PqrsfPage() {
  const content = await getHomePageContent();
  return <InteriorPage content={content} eyebrow="PQRSF" title="Queremos escucharte." description="Presenta una petición, queja, reclamo, sugerencia o felicitación a través del formulario institucional." icon={<MessageSquareText aria-hidden="true" size={16} />}>
    <div className="action-panel"><div><p>Atención al usuario</p><h2>Formulario institucional de Visión Total</h2><span>Utiliza este formulario para compartir tu solicitud con el equipo encargado de recibir y gestionar las PQRSF.</span></div><a href={existingForm} target="_blank" rel="noreferrer" className="modern-button modern-button-primary">Diligenciar formulario PQRSF <ArrowUpRight aria-hidden="true" size={17} /></a></div>
  </InteriorPage>;
}
