/**
 * Tout le contenu textuel et les données du site Artémys est centralisé ici.
 * Pour modifier un prix, un pack, une prestation ou un client : c'est dans ce fichier.
 * Source : Catalogue 2026 - Agence Artémys.
 */

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://artémys.fr";

export const COMPANY = {
  brandName: "Agence Artémys",
  shortName: "Artémys",
  director: "Queva Miguel",
  baseline: "Création • Impression • Installation",
  slogan: "On ne vous rend pas meilleur, mais irrésistible.",
  phone: "06 80 82 26 09",
  phoneRaw: "+33680822609",
  email: "contact.artemys@gmail.com",
  instagram: "@agenceartemys",
  instagramUrl: "https://www.instagram.com/agenceartemys",
  website: "artémys.fr",
  catalogueUrl: "https://www.calameo.com/books/0081777332f587adffc0d",
};

// Liens "/#ancre" pour fonctionner aussi depuis la page /portfolio.
export const NAV_LINKS = [
  { label: "Packs", href: "/#packs" },
  { label: "Abonnements", href: "/abonnements" },
  { label: "Pôles", href: "/#poles" },
  { label: "Prestations", href: "/prestations" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/#contact" },
];

// Partenaires affichés en pied de page.
// TODO : confirmer les URLs réelles (CreaLeads + Atelier MLM).
export const PARTNERS = {
  crealeadsUrl: "https://crealeads.fr",
  atelierMlmUrl: "", // laissé vide => texte simple tant que l'URL n'est pas fournie
};

export const HERO = {
  eyebrow: "Agence de communication",
  titleLines: ["Votre image,", "rendue", "irrésistible."],
  subtitle:
    "De la création graphique à la visibilité terrain : logo, web, print, signalétique, textile et goodies. Une agence, tous vos supports — en packs clés en main ou en abonnement mensuel.",
  primaryCta: { label: "Voir les packs", href: "#packs" },
  secondaryCta: { label: "Les abonnements", href: "/abonnements" },
};

export const STATS = [
  { value: "20+", label: "clients accompagnés" },
  { value: "6", label: "pôles de création" },
  { value: "48h", label: "livraison création" },
  { value: "100%", label: "sur-mesure" },
];

/* ------------------------------------------------------------------ */
/*  ART&PACKS — offres phares (le Premium est mis en avant)            */
/* ------------------------------------------------------------------ */

export type Pack = {
  id: string;
  name: string;
  price: string;
  tagline: string;
  description: string;
  includes: string[];
  bonus: string;
  featured?: boolean;
};

export const PACKS: Pack[] = [
  {
    id: "start",
    name: "Pack Start",
    price: "1 190 €",
    tagline: "L'essentiel pour lancer votre activité",
    description:
      "Tout ce qu'il faut pour démarrer avec une image professionnelle et cohérente.",
    includes: [
      "Logo (2 propositions), couleurs, typographies & icône",
      "Fichiers HD livrés",
      "500 cartes de visite",
      "1 bâche PVC 80 × 200 cm",
      "Pack textile : 1 softshell, 2 t-shirts, 1 sweat",
    ],
    bonus: "−10 % sur un abonnement pendant 3 mois",
  },
  {
    id: "premium",
    name: "Pack Premium",
    price: "3 590 €",
    tagline: "Passez au niveau supérieur",
    description:
      "Une offre complète pensée pour structurer durablement votre image et accélérer votre développement.",
    includes: [
      "Le Pack Start + le Pack Web + le Pack Textile personnalisé",
      "1 proposition de logo supplémentaire (3 au total)",
      "Kit réseaux sociaux (photo de profil + bannière)",
      "1 000 cartes de visite",
      "1 000 flyers",
      "1 roll-up ou bâche 80 × 200 cm",
    ],
    bonus: "−15 % sur un abonnement pendant 3 mois",
    featured: true,
  },
  {
    id: "360",
    name: "Pack 360°",
    price: "7 490 €",
    tagline: "La transformation complète",
    description:
      "Une solution globale pour structurer, professionnaliser et dominer votre communication.",
    includes: [
      "Le Pack Premium + une vidéo entreprise",
      "Site web optimisé SEO avancé",
      "15 visuels réseaux supplémentaires",
      "2 000 flyers (au lieu de 1 000)",
      "1 enseigne ou covering simple",
      "Pack textile équipe (5 pièces personnalisées en plus)",
      "Session stratégie annuelle (2h)",
    ],
    bonus: "−25 % sur un abonnement pendant 3 mois",
  },
];

export const PACKS_NOTE = "Paiement des packs possible en plusieurs fois.";

/* ------------------------------------------------------------------ */
/*  ABONNEMENTS ARTÉMYS                                                 */
/* ------------------------------------------------------------------ */

export type Plan = {
  id: string;
  name: string;
  price: string;
  period: string;
  tagline: string;
  note?: string;
  includes: string[];
  ideal: string;
  featured?: boolean;
};

export const PLANS: Plan[] = [
  {
    id: "infinity",
    name: "Infinity",
    price: "990 €",
    period: "/ mois",
    note: "Sans engagement",
    tagline: "Création graphique illimitée",
    includes: [
      "Créations graphiques illimitées",
      "Demandes traitées une par une",
      "Retours illimités",
      "Livraison sous 48h ouvrées",
      "Designer dédié",
    ],
    ideal: "Idéal pour les entreprises aux besoins réguliers en création.",
  },
  {
    id: "pro",
    name: "Pro",
    price: "1 790 €",
    period: "/ mois",
    tagline: "Communication active & présence digitale",
    includes: [
      "Tout Infinity, +",
      "Gestion réseaux sociaux (jusqu'à 12 posts / mois)",
      "Rédaction des contenus & programmation",
      "Reporting mensuel",
      "1 visio stratégie / mois",
      "−10 % sur les projets Artémys",
    ],
    ideal: "Idéal pour déléguer entièrement sa communication.",
    featured: true,
  },
  {
    id: "ultra",
    name: "Ultra",
    price: "2 990 €",
    period: "/ mois",
    tagline: "Votre service marketing externalisé",
    includes: [
      "Tout Pro, +",
      "Gestion & maintenance du site web",
      "1 000 € d'impression / mois (1 gros projet / trimestre)",
      "Priorité maximale (24-48h)",
      "2 tâches en parallèle",
      "Accompagnement stratégique continu",
    ],
    ideal: "Idéal pour une gestion complète et externalisée.",
  },
];

/* ------------------------------------------------------------------ */
/*  LES 6 PÔLES                                                         */
/* ------------------------------------------------------------------ */

/** `prestaId` cible l'onglet de la section "À la carte" (#prestations).
 *  Art&Mig n'a pas de catégorie dédiée : le clic mène à la section sans
 *  changer d'onglet (prestaId omis). */
export const POLES: {
  code: string;
  title: string;
  desc: string;
  prestaId?: string;
}[] = [
  {
    code: "Art&Mig",
    title: "Conseil & stratégie",
    desc: "On définit le cap : positionnement, message et plan de communication.",
  },
  {
    code: "Art&Concept",
    title: "Création visuel & web",
    desc: "Logo, identité visuelle, supports graphiques et sites internet.",
    prestaId: "concept",
  },
  {
    code: "Art&Studio",
    title: "Photo & vidéo",
    desc: "Shootings produits, portraits d'équipe et vidéos pour vos réseaux.",
    prestaId: "studio",
  },
  {
    code: "Art&Print",
    title: "Impression",
    desc: "De la carte de visite au grand format : tout votre print soigné.",
    prestaId: "print",
  },
  {
    code: "Art&Fabric",
    title: "Textile & goodies",
    desc: "Vêtements personnalisés, stickers et objets publicitaires.",
    prestaId: "fabric",
  },
  {
    code: "Art&Sign",
    title: "Covering & signalétique",
    desc: "Enseignes, vitrophanie, covering véhicule et déco intérieure.",
    prestaId: "sign",
  },
];

/** Nom de l'évènement custom qui synchronise un clic "pôle" avec l'onglet
 *  de la section "À la carte". */
export const SELECT_PRESTA_EVENT = "artemys:select-presta";

/* ------------------------------------------------------------------ */
/*  PRESTATIONS À LA CARTE (catalogue détaillé)                         */
/* ------------------------------------------------------------------ */

export type PrestaItem = { name: string; price?: string; desc?: string };
export type PrestaCategory = {
  id: string;
  pole: string;
  title: string;
  intro: string;
  items: PrestaItem[];
};

export const PRESTATIONS: PrestaCategory[] = [
  {
    id: "concept",
    pole: "Art&Concept",
    title: "Création & web",
    intro: "Votre univers graphique et votre présence en ligne.",
    items: [
      { name: "Création de logo", price: "dès 250 €", desc: "Logos uniques et professionnels, adaptés à votre secteur." },
      { name: "Identité visuelle", price: "dès 850 €", desc: "Univers graphique complet : couleurs, typo, déclinaisons." },
      { name: "Création graphique", price: "dès 60 €", desc: "Visuels pour supports imprimés (flyers, affiches, brochures...)." },
      { name: "Création visuelle", price: "dès 60 €", desc: "Visuels optimisés pour le digital et les réseaux." },
      { name: "Gestion réseaux", price: "dès 450 € / mois", desc: "Community management : visuels, contenus, planification." },
      { name: "Création de site web", price: "dès 390 € / page", desc: "Responsive, contenus, formulaire de contact, SEO de base." },
      { name: "Pack Web", price: "1 490 €", desc: "Site pro jusqu'à 5 pages, responsive, formulaire, SEO, mise en ligne." },
      { name: "Maintenance site", price: "dès 90 € / mois", desc: "Sécurité, performance et mises à jour." },
    ],
  },
  {
    id: "studio",
    pole: "Art&Studio",
    title: "Photo & vidéo",
    intro: "Des contenus de qualité pour valoriser votre activité.",
    items: [
      { name: "Shooting photo express (1h)", price: "dès 250 €" },
      { name: "Shooting photo complet", price: "dès 450 €" },
      { name: "Photo produit", price: "dès 290 €" },
      { name: "Vidéo courte réseaux", price: "dès 390 €" },
      { name: "Vidéo entreprise / institutionnelle", price: "dès 890 €" },
      { name: "Montage vidéo", price: "dès 250 €" },
      { name: "Publicité & contenu promo", price: "dès 490 €" },
    ],
  },
  {
    id: "print",
    pole: "Art&Print",
    title: "Impression & papeterie",
    intro: "De l'idée au support, votre image prend forme.",
    items: [
      { name: "Cartes de visite", price: "500 ex. dès 40 €", desc: "350g couché, finitions pelliculage, soft touch, vernis, dorure." },
      { name: "Flyers A5", price: "1 000 ex. dès 70 €" },
      { name: "Affiches A3", price: "50 ex. dès 65 €", desc: "Formats A3 à A0." },
      { name: "Dépliants A4", price: "50 ex. dès 130 €", desc: "Pliés en 2, 3 (tri-volet) ou A3." },
      { name: "Brochures", price: "100 ex. dès 120 €", desc: "A4 / A5, agrafées ou dos carré collé." },
      { name: "Menus", price: "50 ex. dès 85 €", desc: "Pour restaurants, bars et événements." },
      { name: "Catalogues", price: "100 ex. dès 245 €", desc: "A4 / A5 / carré, 16 pages." },
      { name: "Panneaux rigides", desc: "Forex, Akilux, Alupanel, Plexiglas, Carton plume — sur devis." },
    ],
  },
  {
    id: "sign",
    pole: "Art&Sign",
    title: "Signalétique & covering",
    intro: "Rendez votre marque visible, en grand.",
    items: [
      { name: "Bâche publicitaire", price: "dès 90 €", desc: "Gammes Éco, Pro enduite, microperforée, tissu." },
      { name: "Roll-up", price: "dès 90 €", desc: "85×200, 100×200 ou 200×200 (XXL)." },
      { name: "Enseigne lettrage", desc: "Lettres découpées PVC, alu ou dibond — sur devis." },
      { name: "Logo 3D & caisson lumineux", desc: "Relief premium, éclairage LED — sur devis." },
      { name: "Néon sur plexiglass", desc: "Enseigne lumineuse personnalisée — sur devis." },
      { name: "Covering véhicule", desc: "Lettrage, semi-covering ou covering complet — sur devis." },
      { name: "Vitrophanie", desc: "Films adhésifs, dépoli, microperforé — sur devis." },
      { name: "Mur végétal & logo bois", desc: "Décoration intérieure sur-mesure — sur devis." },
    ],
  },
  {
    id: "fabric",
    pole: "Art&Fabric",
    title: "Textile & goodies",
    intro: "Habillez votre équipe et marquez les esprits.",
    items: [
      { name: "Softshell personnalisé", price: "dès 24,99 €" },
      { name: "Sweat 80 % coton", price: "dès 29,99 €" },
      { name: "Marquage DTF", price: "cœur dès 4 € / dos dès 8 €", desc: "Impression haute définition, multicolore." },
      { name: "Pack Textile", price: "89,90 €", desc: "1 softshell, 2 t-shirts, 1 sweat." },
      { name: "Stickers & doming", desc: "Découpe sur mesure, effet résine 3D — sur devis." },
      { name: "Goodies", price: "mug dès 7 €, tote dès 3,50 €", desc: "Stylos, gourdes, bloc-notes, porte-clés..." },
      { name: "Supports événementiels", desc: "Bracelets, badges, lanyards, gobelets réutilisables — sur devis." },
    ],
  },
];

/* ------------------------------------------------------------------ */
/*  RÉFÉRENCES CLIENTS                                                   */
/*  TODO : remplacer par les vrais noms / logos clients (≈ 20).         */
/*  Si Miguel fournit des logos, les déposer dans /public/clients/      */
/*  et basculer le composant References sur des <Image>.                */
/* ------------------------------------------------------------------ */

// Clients réels (bandeau défilant). Logos optionnels à déposer plus tard
// dans /public/clients/ — pour l'instant on affiche les noms.
export const CLIENTS: string[] = [
  "CL Training",
  "Sport-Event",
  "La Sodem",
  "Le Buron du Prat de Bouc",
  "La Grange des Roches",
  "Les Créas de Sarah",
  "Instant Rénov",
  "Gris BTP",
  "Atelier MLM",
  "La Bonne Occase",
  "Les Pains Jenyo",
  "La Carrosserie du Plomb",
  "Le Plomb du Cantal",
  "FPPC",
  "Au Bout de la Moustache",
  "NS Auto",
  "Wonder Tattoo",
  "Gendarmerie Nationale",
  "Piscine O'Claire",
  "Run Club by CL Training",
];

/* ------------------------------------------------------------------ */
/*  PORTFOLIO (page /portfolio)                                         */
/*  TODO : remplacer par les vrais projets/visuels du Portfolio 2026.   */
/*  Déposer les images dans /public/portfolio/ et ajouter `image:`.     */
/* ------------------------------------------------------------------ */

export type CaseStudy = {
  id: string;
  client: string;
  intro: string;
  services: string[];
  images?: string[]; // chemins /portfolio/... dans /public — à fournir
};

export const PORTFOLIO: CaseStudy[] = [
  {
    id: "instant-renov",
    client: "Instant Rénov",
    intro:
      "Accompagnement complet dans la création de l'identité visuelle : logo, cartes de visite, site web et covering des véhicules. Chaque élément a été pensé pour offrir une image cohérente et professionnelle, renforcer leur visibilité et valoriser leur activité auprès de leurs clients.",
    services: [
      "Logo",
      "Identité visuelle",
      "Cartes de visite",
      "Site web",
      "Covering véhicule",
    ],
    images: [],
  },
  {
    id: "sport-event",
    client: "Sport-Event",
    intro:
      "Création de l'identité visuelle complète : logo, cartes de visite, flyers pour événements et site web. Nous avons aussi créé des goodies personnalisés (pulls, t-shirts, tasses) afin de renforcer leur image auprès des participants et partenaires.",
    services: [
      "Logo",
      "Identité visuelle",
      "Cartes de visite",
      "Flyers",
      "Site web",
      "Goodies",
    ],
    images: [],
  },
];

/* Avis Google — affichés "en dur" pour l'instant.
 * TODO : remplacer la note, le nombre et les avis par les vrais (page Google).
 */
export const GOOGLE = {
  rating: 4.9,
  reviewsCount: 20,
  reviewsUrl: "https://www.google.com/search?q=agence+art%C3%A9mys",
};

export const TESTIMONIALS: {
  name: string;
  role: string;
  text: string;
  rating?: number;
}[] = [
  {
    name: "Maxime Hatrel",
    role: "Avis Google",
    rating: 5,
    text: "Très bonne agence de communication ! À l'écoute des attentes et très rapide ! Je recommande ! 😉",
  },
  {
    name: "Sarah Torres",
    role: "Avis Google",
    rating: 5,
    text: "J'ai fait appel à l'agence Artémys pour ma micro-entreprise : création de logo, visuels, image de marque. J'ai aussi commandé mes cartes de visite et un roll-up qui fait un très bel effet sur les marchés !",
  },
  {
    name: "Cédric Lacour",
    role: "Avis Google",
    rating: 5,
    text: "Très professionnel et rapide !! Je conseille vivement !",
  },
  {
    name: "Raphaël Gil",
    role: "Avis Google",
    rating: 5,
    text: "Agence très sérieuse, avec un travail appliqué fait avec précision. Je conseille fortement.",
  },
  {
    name: "Julie Blanc",
    role: "Avis Google",
    rating: 5,
    text: "Très bonne expérience avec Artémys, vous pouvez y aller les yeux fermés. Je recommande.",
  },
  {
    name: "Anthony Mbengi",
    role: "Avis Google",
    rating: 4,
    text: "Très bonne agence, compréhensif et à l'écoute. Je recommande fortement !",
  },
  {
    name: "Jen 84",
    role: "Avis Google",
    rating: 5,
    text: "Excellent travail, soigné. Personne très professionnelle.",
  },
  {
    name: "Mat Paris Kileur",
    role: "Avis Google",
    rating: 5,
    text: "Très professionnel dans son travail, je recommande.",
  },
];
