"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

// Cada campaña es una sola pieza gráfica enlazable. Al conectar el CMS,
// Yeraldin podrá reemplazar image, alt y href sin modificar el componente.
const banners = [
  {
    image: "/images/hero-care-vision-total-v3.png",
    alt: "Campaña de atención integral en salud visual",
    href: "/solicitar-cita",
    label: "Solicita orientación para cuidar tu salud visual",
  },
  {
    image: "/images/hero-family-vision-total.png",
    alt: "Campaña de cuidado visual para niñas, niños y sus familias",
    href: "/servicios",
    label: "Conoce la atención visual para toda la familia",
  },
] as const;

export function HeroCarousel() {
  const [activeBanner, setActiveBanner] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const goToBanner = useCallback((index: number) => {
    setActiveBanner((index + banners.length) % banners.length);
  }, []);

  useEffect(() => {
    if (isPaused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const interval = window.setInterval(() => setActiveBanner((current) => (current + 1) % banners.length), 7000);
    return () => window.clearInterval(interval);
  }, [isPaused]);

  return (
    <section
      className="campaign-carousel"
      aria-roledescription="carrusel"
      aria-label="Campañas destacadas de Visión Total"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setIsPaused(false);
      }}
    >
      <div className="campaign-viewport">
        <div className="campaign-track" style={{ transform: `translateX(-${activeBanner * 100}%)` }}>
          {banners.map((banner, index) => (
            <article key={banner.image} className="campaign-slide" aria-hidden={index !== activeBanner}>
              <Link href={banner.href} tabIndex={index === activeBanner ? 0 : -1} className="campaign-link" aria-label={banner.label}>
                <Image src={banner.image} alt={banner.alt} fill priority={index === 0} className="object-cover" sizes="100vw" />
                <span className="campaign-image-shade" aria-hidden="true" />
                <span className="campaign-placeholder-note">Pieza gráfica provisional</span>
              </Link>
            </article>
          ))}
        </div>
      </div>

      <div className="campaign-controls" role="group" aria-label="Controles del banner principal">
        <button type="button" onClick={() => goToBanner(activeBanner - 1)} aria-label="Ver banner anterior"><ArrowLeft aria-hidden="true" size={18} /></button>
        <div className="campaign-dots" role="tablist" aria-label="Seleccionar campaña">
          {banners.map((banner, index) => <button key={banner.image} type="button" role="tab" aria-selected={index === activeBanner} aria-label={`Ver campaña ${index + 1}`} onClick={() => goToBanner(index)} />)}
        </div>
        <button type="button" onClick={() => goToBanner(activeBanner + 1)} aria-label="Ver siguiente banner"><ArrowRight aria-hidden="true" size={18} /></button>
      </div>
    </section>
  );
}
