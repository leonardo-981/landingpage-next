"use client";
import { useEffect, useState } from "react";

export function Footer() {
  const [ctaHeight, setCtaHeight] = useState(0);

  useEffect(() => {
    const updateCtaHeight = () => {
      const cta = document.querySelector(".cta-size");
      if (cta) {
        setCtaHeight(cta.offsetHeight);
      } else {
        setCtaHeight(0);
      }
    };

    updateCtaHeight();

    window.addEventListener("resize", updateCtaHeight);

    return () => window.removeEventListener("resize", updateCtaHeight);
  }, []);

  return (
    <footer
      className="w-full text-center py-4 bg-neutral-900 text-white"
      style={{ marginBottom: `${ctaHeight}px` }}
    >
      <p>
        Copyright &copy; 2025 Movimentos Mágicos. Todos os direitos reservados.
      </p>
    </footer>
  );
}
