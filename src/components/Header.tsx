import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CalendarDays, Menu, Phone, X } from "lucide-react";

import type { SiteContent } from "@/data/site-content";

export function Header({ content }: { content: SiteContent }) {
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
              priority
            />
          </Link>

          <nav aria-label="Navegación principal" className="hidden items-center gap-1 xl:flex">
            {content.navigation.map((item) => (
              <details key={item.href} className="nav-dropdown relative group">
                <summary className="nav-link flex cursor-pointer list-none items-center gap-2">{item.label}<span aria-hidden="true">⌄</span></summary>
                <div className="absolute left-0 top-12 min-w-52 rounded-2xl border border-[#dce5ea] bg-white p-2 shadow-[0_20px_50px_rgba(7,28,44,.15)]">
                  {item.children.map((child) => <Link key={child.href} href={child.href} className="block rounded-xl px-4 py-3 text-sm font-bold text-[#173248] hover:bg-[#eef6f7]">{child.label}</Link>)}
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
                {content.navigation.flatMap((item) => item.children).map((item) => (
                  <Link key={item.href} href={item.href} className="rounded-xl px-4 py-3.5 font-bold text-[#173248] hover:bg-[#eef6f7]">{item.label}</Link>
                ))}
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
