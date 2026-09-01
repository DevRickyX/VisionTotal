import Image from "next/image";
import Link from "next/link";
import {
  Activity, ArrowRight, ArrowUpRight, Baby, BookOpen, CalendarDays,
  CalendarRange, Check, ClipboardCheck, Eye, FileText, Glasses,
  HeartPulse, MapPin, MessageSquareText, Microscope, Phone, Star,
} from "lucide-react";

import { CommunityIllustration } from "@/components/CommunityIllustration";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HeroCarousel } from "@/components/HeroCarousel";
import { getHomePageContent } from "@/lib/content";

const quickIcons = { calendar: CalendarDays, message: MessageSquareText, clipboard: ClipboardCheck };
const serviceIcons = { eye: Eye, glasses: Glasses, activity: Activity, scan: Microscope, baby: Baby, heart: HeartPulse };

export default async function Home() {
  const content = await getHomePageContent();

  return (
    <>
      <Header content={content} />

      <main id="contenido-principal">
        <HeroCarousel />

        <section aria-labelledby="acciones-title" className="relative z-10 bg-white py-8 sm:py-11">
          <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
            <h2 id="acciones-title" className="sr-only">Gestiones para pacientes</h2>
            <div className="quick-action-rail">
              {content.quickActions.map((item, index) => {
                const Icon = quickIcons[item.icon];
                return (
                  <Link key={item.title} href={item.href} className="quick-action-item">
                    <span className={`quick-action-icon quick-action-icon-${index + 1}`}><Icon aria-hidden="true" size={23} /></span>
                    <span><small>{["Citas", "Atención al usuario", "Tu experiencia"][index]}</small><strong>{item.title}</strong></span>
                    <ArrowUpRight aria-hidden="true" className="ml-auto text-[#728596]" size={19} />
                  </Link>
                );
              })}
              <Link href="/derechos-y-deberes" className="quick-action-item">
                <span className="quick-action-icon quick-action-icon-4"><FileText aria-hidden="true" size={23} /></span>
                <span><small>Información</small><strong>Derechos y deberes</strong></span>
                <ArrowUpRight aria-hidden="true" className="ml-auto text-[#728596]" size={19} />
              </Link>
            </div>
          </div>
        </section>

        <section className="visual-care-section" aria-labelledby="visual-care-title">
          <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
            <div className="visual-care-card">
              <Image src="/images/care-family-editorial.png" alt="Profesional de salud visual orientando a una madre y su hija" fill className="object-cover" sizes="(min-width: 1024px) 80vw, 100vw" />
              <div className="visual-care-shade" aria-hidden="true" />
              <div className="visual-care-copy">
                <p><Eye aria-hidden="true" size={16} />Cuidado para toda la familia</p>
                <h2 id="visual-care-title">Ver bien también es vivir con más confianza.</h2>
                <Link href="/servicios" className="modern-button visual-care-button">Conocer nuestro cuidado <ArrowUpRight aria-hidden="true" size={18} /></Link>
              </div>
              <div className="visual-care-facts" aria-label="Cobertura de atención">
                <span><strong>3</strong> ciudades</span>
                <span><strong>6+</strong> áreas de cuidado</span>
                <span><strong>20+</strong> años acompañando</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section-modern bg-[#f6f8f7]" aria-labelledby="sedes-title">
          <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
            <div className="section-modern-heading">
              <div><p className="modern-eyebrow"><span><MapPin aria-hidden="true" size={16} /></span>Atención por ciudad</p><h2 id="sedes-title">Conoce nuestras sedes<br />y cómo comunicarte.</h2></div>
              <div><p>Consulta la información de Medellín, Apartadó y Montería antes de desplazarte o solicitar una cita.</p><Link href="/sedes" className="text-link">Ver todas las sedes <ArrowRight aria-hidden="true" size={17} /></Link></div>
            </div>

            <div className="mt-12 grid gap-5 lg:grid-cols-3">
              {content.locations.map((location, index) => (
                <article key={location.city} id={location.city.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")} className={`location-card location-card-${index + 1}`}>
                  <div className="location-card-top"><span>0{index + 1}</span><MapPin aria-hidden="true" size={22} /></div>
                  <p>{location.region}</p><h3>{location.city}</h3>
                  <div className="location-card-detail"><strong>{location.label}</strong><address>{location.address}</address></div>
                  <Link href={`/sedes#${location.city.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`} className="location-card-link">Ver información de la sede <ArrowUpRight aria-hidden="true" size={17} /></Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-modern bg-white" aria-labelledby="servicios-title">
          <div className="mx-auto grid max-w-[1320px] items-center gap-14 px-5 sm:px-8 lg:grid-cols-[.9fr_1.1fr]">
            <div className="clinical-photo-panel">
              <Image src="/images/service-service-1.jpg" alt="Equipo clínico durante un procedimiento oftalmológico" fill className="object-cover" sizes="(min-width: 1024px) 45vw, 100vw" />
              <div className="clinical-photo-overlay" aria-hidden="true" />
              <div className="clinical-photo-caption"><span><Activity aria-hidden="true" size={20} /></span><div><small>Atención integral</small><strong>Diagnóstico, tratamiento y seguimiento</strong></div></div>
            </div>

            <div>
              <p className="modern-eyebrow"><span><Microscope aria-hidden="true" size={16} /></span>Servicios especializados</p>
              <h2 id="servicios-title" className="section-title">Cuidado visual para cada etapa de la vida.</h2>
              <p className="section-copy">Consulta nuestras especialidades y confirma la disponibilidad del servicio en tu ciudad.</p>
              <div className="mt-9 grid gap-x-8 sm:grid-cols-2">
                {content.services.map((service) => {
                  const Icon = serviceIcons[service.icon];
                  return <div key={service.title} className="service-row"><span><Icon aria-hidden="true" size={21} /></span><div><h3>{service.title}</h3><p>{service.description}</p></div></div>;
                })}
              </div>
              <Link href="/servicios" className="modern-button modern-button-dark mt-8">Ver todos los servicios <ArrowRight aria-hidden="true" size={18} /></Link>
            </div>
          </div>
        </section>

        <section className="commercial-section" aria-labelledby="particulares-title">
          <div className="commercial-glow" aria-hidden="true" />
          <div className="mx-auto grid max-w-[1320px] items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[1.04fr_.96fr] lg:py-24">
            <div className="relative z-10">
              <p className="modern-eyebrow modern-eyebrow-dark"><span><Star aria-hidden="true" size={16} /></span>Atención particular</p>
              <h2 id="particulares-title">Atención particular, sin vueltas.</h2>
              <p>Cuéntanos en qué ciudad estás y qué servicio necesitas. Nuestro equipo te orientará para continuar.</p>
              <div className="mt-8 flex flex-wrap gap-3">
                {["Consulta especializada", "Ayudas diagnósticas", "Cirugía oftalmológica"].map((item) => <span key={item} className="commercial-tag"><Check aria-hidden="true" size={15} />{item}</span>)}
              </div>
              <Link href="/particulares" className="modern-button commercial-button mt-9">Quiero que me contacten <ArrowUpRight aria-hidden="true" size={18} /></Link>
            </div>

            <div className="lead-flow-card">
              <div className="lead-flow-header"><span><Glasses aria-hidden="true" size={24} /></span><div><small>Solicitud particular</small><strong>Te contactamos nosotros</strong></div></div>
              <ol>
                <li><span>01</span><div><strong>Elige tu ciudad</strong><p>Medellín, Apartadó o Montería</p></div></li>
                <li><span>02</span><div><strong>Cuéntanos qué necesitas</strong><p>Selecciona el servicio de interés</p></div></li>
                <li><span>03</span><div><strong>Recibe orientación</strong><p>Un asesor se comunica contigo</p></div></li>
              </ol>
              <div className="lead-flow-note"><Phone aria-hidden="true" size={16} />Después de recibir tu solicitud, un asesor te indicará la disponibilidad y los pasos para confirmar la cita.</div>
            </div>
          </div>
        </section>

        <section className="section-modern bg-[#f6f8f7]" aria-labelledby="actualidad-title">
          <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
            <div className="section-modern-heading">
              <div><p className="modern-eyebrow"><span><CalendarRange aria-hidden="true" size={16} /></span>Contenido vivo</p><h2 id="actualidad-title">Brigadas y prevención,<br />siempre actualizadas.</h2></div>
              <p>Consulta jornadas de atención, recomendaciones y contenidos para cuidar la visión de toda la familia.</p>
            </div>
            <div className="mt-12 grid gap-6 lg:grid-cols-2">
              <Link href="/brigadas" className="feature-story feature-story-illustrated">
                <div className="feature-story-visual"><CommunityIllustration /></div>
                <div className="feature-story-copy"><span>Brigadas visuales</span><h3>Consulta los próximos puntos de atención.</h3><p>Fechas, municipios y canales publicados mes a mes.</p><strong>Ver brigadas <ArrowRight aria-hidden="true" size={17} /></strong></div>
              </Link>
              <Link href="/salud-visual" className="feature-story feature-story-photo">
                <Image src="/images/news-news-1.jpg" alt="Detalle de un ojo humano" fill className="object-cover" sizes="(min-width: 1024px) 50vw, 100vw" />
                <div className="feature-story-photo-overlay" />
                <div className="feature-story-copy"><span>Salud y prevención</span><h3>Entiende mejor las señales de tus ojos.</h3><p>Información clara sobre enfermedades, controles y hábitos.</p><strong>Explorar contenidos <BookOpen aria-hidden="true" size={17} /></strong></div>
              </Link>
            </div>
          </div>
        </section>

        <section className="final-cta">
          <div className="mx-auto flex max-w-[1180px] flex-col items-center justify-between gap-8 px-5 py-16 text-center sm:px-8 lg:flex-row lg:text-left">
            <div><p>¿No sabes qué sede o canal necesitas?</p><h2>Te ayudamos a encontrar el siguiente paso.</h2></div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link href="/solicitar-cita" className="modern-button modern-button-primary justify-center"><CalendarDays aria-hidden="true" size={18} />Solicitar orientación</Link>
              <a href={content.organization.phoneHref} className="modern-button modern-button-secondary justify-center"><Phone aria-hidden="true" size={18} />Llamar ahora</a>
            </div>
          </div>
        </section>
      </main>

      <Footer content={content} />
    </>
  );
}
