import Image from "next/image";
import logo from "@/public/logo.png";

/** Logo officiel "aA." de l'agence Artémys (PNG transparent dans /public). */
export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <Image
        src={logo}
        alt="Artémys"
        priority
        className="h-8 w-auto"
        sizes="48px"
      />
      <span className="font-display text-lg tracking-tight">ARTÉMYS</span>
    </span>
  );
}
