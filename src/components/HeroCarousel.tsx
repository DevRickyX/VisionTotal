"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight, CalendarDays, Eye, HeartHandshake, ShieldCheck } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

const slides = [
  {
    eyebrow: "Red especializada en salud visual",
    title: "Especialistas en el cuidado",
    accent: "de tu salud visual.",
    description: "Atención oftalmológica integral para pacientes y familias en Medellín, Apartadó y Montería.",
    primary: { href: "/solicitar-cita", label: "Solicitar una cita" },
    secondary: { href: "/servicios", label: "Conocer servicios" },
    image: "/images/hero-care-vision-total-v3.png",
    alt: "Oftalmóloga explicando los resultados de una valoración a una paciente",
    captionLabel: "Estamos para escucharte",
    caption: "Atención humana, clara y especializada",
    proof: "Cuidando la salud visual desde 2004",
  },
  {
    eyebrow: "Atención para toda la familia",
    title: "Una mirada a tiempo puede cambiar",
    accent: "la forma de aprender.",
    description: "Valoraciones y acompañamiento para niñas, niños, adolescentes y sus familias.",
    primary: { href: "/servicios", label: "Ver oftalmología pediátrica" },
    secondary: { href: "/solicitar-cita", label: "Solicitar orientación" },
    image: "/images/hero-family-vision-total.png",
    alt: "Optometrista realizando una valoración visual a una niña acompañada por su madre",
    captionLabel: "Cuidado desde los primeros años",
    caption: "Una consulta oportuna hace la diferencia",
    proof: "Acompañamiento para cada etapa de la vida",
  },
] as const;

export function HeroCarousel() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const goToSlide = useCallback((index: number) => setActiveSlide((index + slides.length) % slides.length), []);

  useEffect(() => {
    if (isPaused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const interval = window.setInterval(() => setActiveSlide((current) => (current + 1) % slides.length), 7000);
    return () => window.clearInterval(interval);
  }, [isPaused]);

  return (
    <section className="hero-carousel" aria-roledescription="carrusel" aria-label="Información principal de Visión Total" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)} onFocusCapture={() => setIsPaused(true)} onBlurCapture={(event) => {
      if (!event.currentTarget.contains(event.relatedTarget)) setIsPaused(false);
    }}>
      <div className="hero-carousel-viewport">
        <div className="hero-carousel-track" style={{ transform: `translateX(-${activeSlide * 100}%)` }}>
          {slides.map((slide, index) => {
            const isActive = activeSlide === index;
            const Heading = isActive ? "h1" : "p";

            return (
              <article key={slide.image} className="hero-carousel-slide" aria-hidden={!isActive} aria-label={`${index + 1} de ${slides.length}`}>
                <div className="modern-hero">
                  <div className="hero-orb hero-orb-one" aria-hidden="true" />
                  <div className="hero-orb hero-orb-two" aria-hidden="true" />
                  <div className="mx-auto grid min-h-[720px] max-w-[1440px] items-center gap-14 px-5 py-16 sm:px-8 lg:grid-cols-[.92fr_1.08fr] lg:px-10 lg:py-20">
                    <div className="relative z-10 max-w-[660px]">
                      <p className="modern-eyebrow"><span><Eye aria-hidden="true" size={16} /></span>{slide.eyebrow}</p>
                      <Heading className="hero-title">{slide.title} <br /><span>{slide.accent}</span></Heading>
                      <p className="hero-copy">{slide.description}</p>

                      <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                        <Link href={slide.primary.href} tabIndex={isActive ? 0 : -1} className="modern-button modern-button-primary justify-center sm:justify-start">
                          <CalendarDays aria-hidden="true" size={19} />
                          {slide.primary.label}
                          <ArrowUpRight aria-hidden="true" size={18} />
                        </Link>
                        <Link href={slide.secondary.href} tabIndex={isActive ? 0 : -1} className="modern-button modern-button-secondary justify-center sm:justify-start">
                          {slide.secondary.label}
                          <ArrowRight aria-hidden="true" size={18} />
                        </Link>
                      </div>

                      <div className="hero-proof">
                        <div className="hero-proof-mark" aria-hidden="true"><span>M</span><span>A</span><span>M</span></div>
                        <div><strong>{slide.proof}</strong><p>Medellín · Apartadó · Montería</p></div>
                      </div>

                      {isActive && <div className="hero-carousel-controls" role="group" aria-label="Controles del banner principal">
                        <button type="button" onClick={() => goToSlide(activeSlide - 1)} aria-label="Ver banner anterior"><ArrowLeft aria-hidden="true" size={17} /></button>
                        <div className="hero-carousel-dots" role="tablist" aria-label="Seleccionar banner">
                          {slides.map((item, dotIndex) => <button key={item.image} type="button" role="tab" aria-selected={dotIndex === activeSlide} aria-label={`Ver banner ${dotIndex + 1}`} onClick={() => goToSlide(dotIndex)} />)}
                        </div>
                        <button type="button" onClick={() => goToSlide(activeSlide + 1)} aria-label="Ver siguiente banner"><ArrowRight aria-hidden="true" size={17} /></button>
                      </div>}
                    </div>

                    <div className="care-hero-stage">
                      <div className="care-hero-aura care-hero-aura-blue" aria-hidden="true" />
                      <div className="care-hero-aura care-hero-aura-aqua" aria-hidden="true" />
                      <figure className="care-hero-visual">
                        <Image src={slide.image} alt={slide.alt} fill priority={index === 0} className="object-cover" sizes="(min-width: 1024px) 54vw, 100vw" />
                        <div className="care-hero-shade" aria-hidden="true" />
                        <figcaption className="care-hero-caption"><span><HeartHandshake aria-hidden="true" size={22} /></span><div><small>{slide.captionLabel}</small><strong>{slide.caption}</strong></div><ShieldCheck aria-hidden="true" className="ml-auto text-[#68e3d7]" size={21} /></figcaption>
                      </figure>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
