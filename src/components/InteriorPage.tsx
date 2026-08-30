import Link from "next/link";
import { ChevronRight } from "lucide-react";
import type { ReactNode } from "react";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import type { SiteContent } from "@/data/site-content";

type InteriorPageProps = {
  content: SiteContent;
  eyebrow: string;
  title: string;
  description: string;
  icon: ReactNode;
  children: ReactNode;
};

export function InteriorPage({ content, eyebrow, title, description, icon, children }: InteriorPageProps) {
  return (
    <>
      <Header content={content} />
      <main id="contenido-principal">
        <section className="interior-hero">
          <div className="interior-hero-grid" aria-hidden="true" />
          <div className="mx-auto max-w-[1180px] px-5 py-16 sm:px-8 sm:py-20">
            <nav aria-label="Migas de pan" className="flex items-center gap-2 text-xs font-bold text-[#68808f]">
              <Link href="/" className="hover:text-[#115fe8]">Inicio</Link>
              <ChevronRight aria-hidden="true" size={14} />
              <span aria-current="page">{eyebrow}</span>
            </nav>
            <div className="mt-10 grid items-end gap-8 lg:grid-cols-[1fr_auto]">
              <div><p className="modern-eyebrow"><span>{icon}</span>{eyebrow}</p><h1>{title}</h1><p>{description}</p></div>
              <div className="interior-hero-mark" aria-hidden="true">VT</div>
            </div>
          </div>
        </section>
        <section className="bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-[1180px] px-5 sm:px-8">{children}</div>
        </section>
      </main>
      <Footer content={content} />
    </>
  );
}
