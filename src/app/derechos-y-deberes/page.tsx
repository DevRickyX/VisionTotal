import { HandHeart, HeartHandshake, Scale } from "lucide-react";

import { InteriorPage } from "@/components/InteriorPage";
import { getHomePageContent } from "@/lib/content";

const rights = [
  "Elegir libremente al médico, a los profesionales de salud y a la institución, dentro de los recursos y la red contratada.",
  "Recibir información clara y completa sobre su estado de salud, los procedimientos, tratamientos, beneficios, riesgos y pronóstico.",
  "Aceptar o rechazar procedimientos, directamente o mediante familiares y representantes cuando corresponda.",
  "Recibir un trato digno, sin discriminación y respetuoso de sus creencias, costumbres y opiniones.",
  "Mantener la confidencialidad de la historia clínica y autorizar quién puede conocerla.",
  "Recibir la mejor asistencia disponible durante el proceso de atención, respetando sus decisiones.",
  "Conocer y recibir explicaciones sobre los costos de los servicios recibidos.",
  "Recibir o rechazar apoyo espiritual o moral, de acuerdo con sus creencias.",
  "Decidir libremente si participa en investigaciones, después de conocer sus objetivos, beneficios y riesgos.",
  "Acceder a su historia clínica y decidir sobre la donación de órganos conforme a la ley.",
];

const duties = [
  "Cumplir las citas asignadas o cancelarlas con anticipación cuando no pueda asistir.",
  "Cuidar integralmente su salud y contribuir al cuidado de la comunidad.",
  "Seguir de manera responsable las recomendaciones del equipo de salud.",
  "Tratar con respeto al personal y cuidar las instalaciones.",
  "Cumplir las normas y actuar de buena fe frente al Sistema de Salud.",
  "Brindar información completa y veraz para recibir la atención adecuada.",
  "Compartir su experiencia mediante encuestas, sugerencias, felicitaciones, quejas o reclamos.",
];

export default async function RightsPage() {
  const content = await getHomePageContent();

  return (
    <InteriorPage
      content={content}
      eyebrow="Derechos y deberes"
      title="Tu atención también se construye con respeto e información."
      description="Conoce las garantías que te acompañan como paciente y los compromisos que ayudan a brindar una atención segura."
      icon={<Scale aria-hidden="true" size={16} />}
    >
      <div className="legal-intro">
        <span><HeartHandshake aria-hidden="true" size={25} /></span>
        <div><h2>Información para pacientes y familias</h2><p>Hemos organizado el contenido institucional para facilitar su lectura sin enviarte a otra página.</p></div>
      </div>

      <div className="mt-8 grid gap-7 lg:grid-cols-2">
        <section className="legal-list-card" aria-labelledby="rights-title">
          <div className="legal-list-heading"><span><HandHeart aria-hidden="true" size={23} /></span><div><small>Como paciente</small><h2 id="rights-title">Tus derechos</h2></div></div>
          <ol>{rights.map((right, index) => <li key={right}><span>{index + 1}</span><p>{right}</p></li>)}</ol>
        </section>
        <section className="legal-list-card legal-list-card-aqua" aria-labelledby="duties-title">
          <div className="legal-list-heading"><span><HeartHandshake aria-hidden="true" size={23} /></span><div><small>Para una atención segura</small><h2 id="duties-title">Tus deberes</h2></div></div>
          <ol>{duties.map((duty, index) => <li key={duty}><span>{index + 1}</span><p>{duty}</p></li>)}</ol>
        </section>
      </div>
    </InteriorPage>
  );
}
