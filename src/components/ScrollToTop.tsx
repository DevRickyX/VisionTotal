"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    window.history.scrollRestoration = "manual";

    if (window.location.hash) return;

    const moveToTop = () => window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    let secondFrame = 0;

    moveToTop();
    const firstFrame = window.requestAnimationFrame(() => {
      moveToTop();
      secondFrame = window.requestAnimationFrame(moveToTop);
    });
    const finalCheck = window.setTimeout(moveToTop, 120);

    return () => {
      window.cancelAnimationFrame(firstFrame);
      window.cancelAnimationFrame(secondFrame);
      window.clearTimeout(finalCheck);
    };
  }, [pathname]);

  return null;
}
