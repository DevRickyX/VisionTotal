import {
  Baby, CheckCircle2, Database, FileCheck2, LockKeyhole,
  Mail, MapPin, Scale, ShieldCheck, UserRoundCheck,
} from "lucide-react";

import { InteriorPage } from "@/components/InteriorPage";
import { getHomePageContent } from "@/lib/content";

const dataGroups = [
  "Datos de identificación y contacto, como nombre, documento, dirección, teléfono y correo electrónico.",
  "Información demográfica necesaria para la atención, como fecha de nacimiento, género, nacionalidad y residencia.",
  "Datos sobre los servicios solicitados o recibidos, facturación, medios de pago y comunicaciones con Atención al Usuario.",
  "Información de afiliación, entidad promotora de salud y persona responsable del paciente, cuando sea necesaria.",
  "Datos de salud e historia clínica, sujetos a reserva y a las normas especiales que protegen la información clínica.",
  "Información entregada en encuestas, actividades educativas, comerciales, laborales o de investigación autorizadas.",
];

const purposes = [
  "Prestar, confirmar y hacer seguimiento a los servicios de salud solicitados.",
  "Gestionar procesos asistenciales, administrativos, contables, de facturación y auditoría.",
  "Responder consultas, solicitudes, quejas o reclamos de pacientes y usuarios.",
  "Compartir información sobre prevención, campañas de salud, nuevos servicios y actualización científica.",
  "Cumplir obligaciones legales, contractuales, laborales, académicas y de seguridad de la información.",
];

const holderRights = [
  "Conocer, actualizar y rectificar sus datos personales.",
  "Solicitar prueba de la autorización otorgada, cuando corresponda.",
  "Saber qué uso se ha dado a su información.",
  "Presentar consultas, reclamos y quejas ante Visión Total y las autoridades competentes.",
  "Solicitar la revocatoria de la autorización o la supresión de datos cuando proceda legalmente.",
  "Acceder gratuitamente a los datos personales que hayan sido objeto de tratamiento.",
];

const terms = [
  ["Autorización", "Consentimiento previo, expreso e informado para tratar los datos personales."],
  ["Dato personal", "Información que identifica o puede asociarse con una persona."],
  ["Dato sensible", "Información que afecta la intimidad o cuyo uso indebido puede producir discriminación; incluye datos de salud y biométricos."],
  ["Titular", "Persona a quien pertenecen los datos personales."],
  ["Tratamiento", "Cualquier operación de recolección, almacenamiento, uso, circulación o supresión de información."],
  ["Responsable", "Entidad que decide sobre la base de datos y el tratamiento de la información."],
];

export default async function DataPolicyPage() {
  const content = await getHomePageContent();

  return (
    <InteriorPage
      content={content}
      eyebrow="Política de datos personales"
      title="Tu información merece cuidado y transparencia."
      description="Conoce qué datos trata Visión Total, para qué los utiliza y cómo puedes ejercer tus derechos."
      icon={<ShieldCheck aria-hidden="true" size={16} />}
    >
      <div className="policy-layout">
        <aside className="policy-summary" aria-label="Resumen de la política">
          <span><LockKeyhole aria-hidden="true" size={28} /></span>
          <p>Responsable del tratamiento</p>
          <h2>Visión Total S.A.S.</h2>
          <dl>
            <div><dt>NIT</dt><dd>830504734-2</dd></div>
            <div><dt>Correo</dt><dd><a href="mailto:info@visiontotal.com.co">info@visiontotal.com.co</a></dd></div>
            <div><dt>Sede principal</dt><dd>Calle 28 # 7-34, Edificio SOMEC, Montería</dd></div>
          </dl>
          <nav aria-label="Contenido de la política">
            <a href="#alcance">Alcance</a><a href="#datos">Datos tratados</a><a href="#finalidades">Finalidades</a><a href="#derechos">Tus derechos</a><a href="#consultas">Consultas y reclamos</a>
          </nav>
        </aside>

        <div className="policy-content">
          <section id="alcance" className="policy-section">
            <div className="policy-section-icon"><FileCheck2 aria-hidden="true" size={23} /></div>
            <p className="policy-kicker">01 · Alcance</p>
            <h2>Compromiso con la confidencialidad</h2>
            <p>Visión Total protege la información que obtiene, registra, utiliza, transmite y actualiza en el desarrollo de sus servicios de salud y de sus actividades laborales, comerciales, académicas y de investigación.</p>
            <p>El tratamiento se realiza con autorización previa, expresa e informada, de acuerdo con la Ley 1581 de 2012 y sus normas reglamentarias. La historia clínica cuenta además con protección especial y se administra bajo deberes de custodia y confidencialidad.</p>
          </section>

          <section id="datos" className="policy-section">
            <div className="policy-section-icon"><Database aria-hidden="true" size={23} /></div>
            <p className="policy-kicker">02 · Información</p>
            <h2>Datos que pueden ser tratados</h2>
            <ul className="policy-check-list">{dataGroups.map((item) => <li key={item}><CheckCircle2 aria-hidden="true" size={18} /><span>{item}</span></li>)}</ul>
          </section>

          <section id="finalidades" className="policy-section">
            <div className="policy-section-icon"><UserRoundCheck aria-hidden="true" size={23} /></div>
            <p className="policy-kicker">03 · Uso responsable</p>
            <h2>Para qué se utiliza la información</h2>
            <ul className="policy-check-list">{purposes.map((item) => <li key={item}><CheckCircle2 aria-hidden="true" size={18} /><span>{item}</span></li>)}</ul>
            <div className="policy-callout"><ShieldCheck aria-hidden="true" size={22} /><p>Visión Total declara que no vende la información de sus usuarios y que no comparte datos personales sin autorización, salvo los casos permitidos o exigidos por la ley.</p></div>
          </section>

          <section id="derechos" className="policy-section">
            <div className="policy-section-icon"><Scale aria-hidden="true" size={23} /></div>
            <p className="policy-kicker">04 · Titulares</p>
            <h2>Tus derechos sobre los datos personales</h2>
            <ol className="policy-number-list">{holderRights.map((item, index) => <li key={item}><span>{index + 1}</span><p>{item}</p></li>)}</ol>
          </section>

          <section className="policy-section">
            <div className="policy-section-icon"><Baby aria-hidden="true" size={23} /></div>
            <p className="policy-kicker">05 · Autorización</p>
            <h2>Datos sensibles y menores de edad</h2>
            <p>Al solicitar información se debe comunicar claramente la finalidad del tratamiento, los derechos del titular y los medios disponibles para ejercerlos. Autorizar datos sensibles es facultativo, salvo las excepciones legales.</p>
            <p>El tratamiento de datos de niños, niñas y adolescentes debe ser autorizado por sus padres o representantes legales y respetar siempre su interés superior.</p>
          </section>

          <section id="consultas" className="policy-section">
            <div className="policy-section-icon"><Mail aria-hidden="true" size={23} /></div>
            <p className="policy-kicker">06 · Atención de solicitudes</p>
            <h2>Consultas, reclamos y negativa al tratamiento</h2>
            <div className="policy-deadlines">
              <article><strong>10 días hábiles</strong><p>Plazo inicial para responder consultas. Puede ampliarse hasta por 5 días hábiles.</p></article>
              <article><strong>15 días hábiles</strong><p>Plazo inicial para responder reclamos. Puede ampliarse hasta por 8 días hábiles.</p></article>
            </div>
            <p>Las solicitudes deben identificar al titular, describir los hechos y aportar los documentos que se quieran hacer valer. Si un reclamo está incompleto, se solicitará su corrección dentro de los cinco días hábiles siguientes.</p>
            <div className="policy-contact">
              <a href="mailto:info@visiontotal.com.co"><Mail aria-hidden="true" size={19} /><span><small>Correo electrónico</small>info@visiontotal.com.co</span></a>
              <div><MapPin aria-hidden="true" size={19} /><span><small>Correspondencia</small>Área de Calidad · Calle 28 # 7-34, Montería</span></div>
            </div>
          </section>

          <section className="policy-section">
            <p className="policy-kicker">07 · Conceptos clave</p>
            <h2>Glosario breve</h2>
            <div className="policy-glossary">{terms.map(([term, definition]) => <details key={term}><summary>{term}</summary><p>{definition}</p></details>)}</div>
          </section>

          <p className="policy-source-note">Contenido organizado a partir de la política institucional publicada por Visión Total. Antes del lanzamiento definitivo debe ser revisado y aprobado por el responsable jurídico y de protección de datos de la organización.</p>
        </div>
      </div>
    </InteriorPage>
  );
}
