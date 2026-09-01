"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Building2, CalendarDays, ChevronDown, HeartPulse, Home, MapPin, Menu, Phone, Stethoscope, UsersRound, X } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useEffect, useRef } from "react";

import type { SiteContent } from "@/data/site-content";

export function Header({ content }: { content: SiteContent }) {
  const navigationRef = useRef<HTMLElement>(null);
  const closeDropdowns = () => navigationRef.current?.querySelectorAll("details[open]").forEach((menu) => menu.removeAttribute("open"));

  useEffect(() => {
    const handleOutsideClick = (event: PointerEvent) => {
      if (!navigationRef.current?.contains(event.target as Node)) closeDropdowns();
    };
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeDropdowns();
    };
    document.addEventListener("pointerdown", handleOutsideClick);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("pointerdown", handleOutsideClick);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const navIcons: Record<string, LucideIcon> = {
    Atención: Stethoscope,
    "Dónde estamos": MapPin,
    Comunidad: UsersRound,
  };

  return (
    <>
      <a href="#contenido-principal" className="skip-link">
        Saltar al contenido principal
      </a>

      <header className="sticky top-0 z-50 border-b border-[#dfe6ea] bg-white/92 backdrop-blur-xl">
        <div className="mx-auto flex min-h-[88px] max-w-[1440px] items-center justify-between gap-6 px-5 sm:px-8 lg:px-10">
          <Link href="/" aria-label="Visión Total, ir al inicio" className="shrink-0 rounded-sm">
            <Image
              src="/images/logo.png"
              alt="Visión Total"
              width={180}
              height={38}
              className="h-auto w-[168px] sm:w-[182px]"
              style={{ height: "auto" }}
              priority
            />
          </Link>

          <nav ref={navigationRef} aria-label="Navegación principal" className="hidden items-center gap-1 xl:flex">
            <Link href="/" className="nav-link flex items-center gap-2"><Home aria-hidden="true" size={16} />Inicio</Link>
            {content.navigation.map((item) => (
              <details key={item.href} className="nav-dropdown relative group" onToggle={(event) => {
                if (!event.currentTarget.open) return;
                navigationRef.current?.querySelectorAll("details[open]").forEach((menu) => {
                  if (menu !== event.currentTarget) menu.removeAttribute("open");
                });
              }}>
                <summary className="nav-link flex cursor-pointer list-none items-center gap-2">{item.label}<ChevronDown className="nav-chevron" aria-hidden="true" size={15} strokeWidth={2.2} /></summary>
                <div className="nav-mega-panel">
                  <div className="nav-mega-intro">
                    {(() => { const Icon = navIcons[item.label]; return <Icon aria-hidden="true" size={23} />; })()}
                    <strong>{item.label}</strong>
                    <p>{item.label === "Atención" ? "Servicios y opciones para cuidar tu salud visual." : item.label === "Dónde estamos" ? "Sedes y canales para solicitar atención." : "Prevención, información y trabajo con la comunidad."}</p>
                  </div>
                  <div className="nav-mega-links">
                    {item.children.map((child) => <Link key={child.href} href={child.href} onClick={closeDropdowns}><span>{child.label === "Sedes" ? <Building2 aria-hidden="true" size={19} /> : child.label === "Salud visual" ? <HeartPulse aria-hidden="true" size={19} /> : <ArrowRight aria-hidden="true" size={19} />}</span><strong>{child.label}</strong><ArrowUpRight aria-hidden="true" size={16} /></Link>)}
                  </div>
                </div>
              </details>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a href={content.organization.phoneHref} className="header-phone">
              <span className="header-phone-icon"><Phone aria-hidden="true" size={17} /></span>
              <span><small>Orientación</small>{content.organization.phoneDisplay}</span>
            </a>
            <Link href="/solicitar-cita" className="modern-button modern-button-primary">
              Solicitar cita
              <ArrowUpRight aria-hidden="true" size={18} />
            </Link>
          </div>

          <details className="mobile-menu relative xl:hidden">
            <summary className="mobile-menu-trigger">
              <Menu className="menu-open" aria-hidden="true" size={23} />
              <X className="menu-close hidden" aria-hidden="true" size={23} />
              <span className="hidden sm:inline">Menú</span>
            </summary>
            <div className="absolute right-0 top-14 w-[min(88vw,23rem)] rounded-[22px] border border-[#dce5ea] bg-white p-3 shadow-[0_24px_70px_rgba(7,28,44,.18)]">
              <nav aria-label="Navegación móvil" className="flex flex-col">
                <Link href="/" className="rounded-xl px-4 py-3.5 font-bold text-[#173248] hover:bg-[#eef6f7]">Inicio</Link>
                {content.navigation.map((group) => <div key={group.href} className="mobile-nav-group"><p>{group.label}</p>{group.children.map((item) => <Link key={item.href} href={item.href}>{item.label}<ArrowUpRight aria-hidden="true" size={15} /></Link>)}</div>)}
                <Link href="/solicitar-cita" className="modern-button modern-button-primary mt-2 justify-center">
                  <CalendarDays aria-hidden="true" size={18} />
                  Solicitar cita
                </Link>
              </nav>
            </div>
          </details>
        </div>
      </header>
    </>
  );
}
