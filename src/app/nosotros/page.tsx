import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Building2, Eye, HeartHandshake, ShieldCheck, Sparkles } from "lucide-react";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { getHomePageContent } from "@/lib/content";

export const metadata = {
  title: "Nosotros",
  description: "Conoce la misión, visión y principios que orientan la atención de Visión Total.",
};

export default async function AboutPage() {
  const content = await getHomePageContent();

  return (
    <>
      <Header content={content} />
      <main id="contenido-principal" className="about-page">
        <section className="about-intro" aria-labelledby="about-title">
          <div className="about-intro-copy">
            <p><Eye aria-hidden="true" size={16} />Nosotros</p>
            <h1 id="about-title">Cuidamos la visión con experiencia y sentido humano.</h1>
            <span>{content.about.introduction}</span>
            <Link href="/sedes" className="modern-button modern-button-primary">Conocer nuestras sedes <ArrowRight aria-hidden="true" size={18} /></Link>
          </div>
          <div className="about-intro-image">
            <Image src="/images/resource-about-1.jpg" alt="Sede de Visión Total" fill className="object-cover" sizes="(min-width: 1024px) 45vw, 100vw" priority />
            <div><strong>{new Date().getFullYear() - content.about.foundedYear} años</strong><span>acompañando la salud visual</span></div>
          </div>
        </section>

        <section className="about-purpose" aria-label="Misión y visión">
          <article>
            <span><HeartHandshake aria-hidden="true" size={24} /></span>
            <p>Nuestro propósito</p>
            <h2>Misión</h2>
            <div className="about-purpose-visual" aria-hidden="true"><ShieldCheck size={52} /></div>
            <strong>{content.about.mission}</strong>
          </article>
          <article className="about-purpose-dark">
            <span><Sparkles aria-hidden="true" size={24} /></span>
            <p>Hacia dónde vamos</p>
            <h2>Visión</h2>
            <div className="about-purpose-visual" aria-hidden="true"><Building2 size={52} /></div>
            <strong>{content.about.vision}</strong>
          </article>
        </section>
      </main>
      <Footer content={content} />
    </>
  );
}
