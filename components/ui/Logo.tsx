import Image from "next/image";
import logo from "@/public/logo.png";

/** Logo officiel "aA." de l'agence Artémys (PNG transparent dans /public). */
export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center ${className}`}>
      <Image
        src={logo}
        alt="Artémys"
        priority
        sizes="80px"
        className="logo-glow h-11 w-auto"
      />
    </span>
  );
}
