import Image from "next/image";
import { ArrowRight, BookOpen } from "lucide-react";
import { InteriorPage } from "@/components/InteriorPage";
import { getHomePageContent } from "@/lib/content";

export default async function VisualHealthPage() {
  const content = await getHomePageContent();
  return <InteriorPage content={content} eyebrow="Salud visual" title="Información para cuidar mejor tus ojos." description="Conoce señales de alerta, controles recomendados y hábitos de prevención para toda la familia." icon={<BookOpen aria-hidden="true" size={16} />}>
    <div className="grid gap-6 md:grid-cols-3">{content.healthArticles.map((article) => <article key={article.title} className="article-card"><div><Image src={article.image} alt="" fill className="object-cover" sizes="(min-width:768px) 33vw, 100vw" /></div><p>{article.category}</p><h2>{article.title}</h2><span>Leer información <ArrowRight aria-hidden="true" size={15} /></span></article>)}</div>
  </InteriorPage>;
}
