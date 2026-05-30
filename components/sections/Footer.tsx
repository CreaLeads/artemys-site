import { Logo } from "@/components/ui/Logo";
import { COMPANY, NAV_LINKS } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="px-4 pb-6">
      <div className="glass glass-sheen container-custom max-w-7xl rounded-[2rem] px-8 py-12">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <span className="text-cream">
              <Logo />
            </span>
            <p className="script-accent mt-3 text-xl">{COMPANY.baseline}</p>
            <p className="mt-4 max-w-sm text-sm text-cream/60">
              Agence de communication — création, impression et installation.
              Dirigée par {COMPANY.director}.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-cream/50">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="link-muted">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-cream/50">
              Contact
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href={`tel:${COMPANY.phoneRaw}`} className="link-muted">
                  {COMPANY.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${COMPANY.email}`} className="link-muted">
                  {COMPANY.email}
                </a>
              </li>
              <li>
                <a
                  href={COMPANY.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-muted"
                >
                  {COMPANY.instagram}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-cream/40 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {COMPANY.brandName}. Tous droits réservés.
          </p>
          <p>{COMPANY.slogan}</p>
        </div>
      </div>
    </footer>
  );
}
