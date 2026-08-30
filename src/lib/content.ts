import { siteContent } from "@/data/site-content";

/**
 * Punto único de lectura de contenido.
 * Al conectar Sanity, este adaptador será el único archivo que cambie;
 * los componentes no dependerán directamente del proveedor del CMS.
 */
export async function getHomePageContent() {
  return siteContent;
}
