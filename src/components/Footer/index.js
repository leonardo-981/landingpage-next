"use client";
import { usePathname } from "next/navigation";

export function Footer() {
  const pathname = usePathname();

  return (
    <footer
      className={`${
        pathname !== "/video" && "absolute bottom-0"
      } w-full text-center py-4 bg-neutral-900 text-white`}
    >
      <p>Copyright &copy; 2025 Minha Empresa. Todos os direitos reservados.</p>
    </footer>
  );
}
