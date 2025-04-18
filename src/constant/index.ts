import {
  BiListCheck,
  BiListUl,
  BiLockAlt,
  BiMessageAltCheck,
  BiMoney,
  BiPhotoAlbum,
  BiPurchaseTagAlt,
  BiSearch,
  BiServer,
  BiShield,
  BiSolidFlagAlt,
  BiSolidLandmark,
  BiTransfer,
} from "react-icons/bi";
import { IoArrowForward } from "react-icons/io5";
import { MdOutlineWbIridescent } from "react-icons/md";
import { SiMicrobit } from "react-icons/si";

export const Menus = [
  {
    id: 1,
    name: "Domaines",
    sections: [
      {
        title: "Trouver un domaine",
        items: [
          { name: "Recherchez des noms de domaine", icon: BiSearch },
          { name: "Transférez vos noms de domaine", icon: BiTransfer },
          { name: "Extensions de domaines gTLD", icon: BiListUl },
        ],
      },
      {
        title: "Enchères de noms de domaines",
        items: [
          { name: "Enchères de noms de domaine", icon: BiMessageAltCheck },
          { name: "Estimez la valeur d’un nom de domaine", icon: BiMoney },
          {
            name: "Club des noms de domaine à prix réduit",
            icon: BiPurchaseTagAlt,
          },
        ],
      },
      {
        title: "Outils et services",
        items: [
          { name: "Générez des noms de domaine", icon: BiMessageAltCheck },
          {
            name: "Trouvez le propriétaire d’un domaine (WHOIS)",
            icon: BiListUl,
          },
          { name: "Service de courtage de domaines", icon: BiMoney },
        ],
      },
    ],
  },
  {
    id: 2,
    name: "Sites web et hébergement ",
    sections: [
      {
        title: "Sites web",
        items: [
          { name: "Créateur de sites web", icon: SiMicrobit },
          { name: "Boutique en ligne", icon: BiSolidLandmark },
          {
            name: "Toutes les options de site web",
            icon: IoArrowForward,
          },
        ],
      },
      {
        title: "Hébergement",
        items: [
          { name: "Hébergement WordPress", icon: BiServer },
          { name: "Hébergement web", icon: BiServer },
          { name: "Hébergement VPS", icon: BiServer },
          {
            name: "Toutes les options d'hébergement",
            icon: IoArrowForward,
          },
        ],
      },
    ],
  },
  { id: 3, name: "Email" },
  {
    id: 4,
    name: "Certificats SSL",
    sections: [
      {
        title: "Certificats SSL",
        items: [
          { name: "Certificats SSL", icon: BiListCheck },
          { name: "Certificats SSL gérés", icon: BiLockAlt },
        ],
      },
      {
        title: "Sécurité web",
        items: [
          { name: "Sécurité site web", icon: BiShield },
          {
            name: "Toutes les options d'hébergement",
            icon: IoArrowForward,
          },
        ],
      },
    ],
  },
  {
    id: 5,
    name: "Market",
    sections: [
      {
        title: "Outils marketing",
        items: [
          { name: "Marketing numérique", icon: BiSolidFlagAlt },
          { name: "Créateur logo", icon: MdOutlineWbIridescent },
          {
            name: "Créateur de contenu et de photos",
            icon: BiPhotoAlbum,
          },
        ],
      },
    ],
  },

  { id: 6, name: "Tarif" },
];

export const faqData = [
  {
    id: 1,
    question:
      "Comment GoDaddy aide-t-il les propriétaires de petites entreprises à réussir ?",
    answer:
      "GoDaddy offre plus qu'une simple plate-forme pour construire votre site web. Nous offrons tout ce dont vous avez besoin pour créer une présence en ligne efficace et mémorable. Vous avez déjà un site ? Nous proposons des plans d'hébergement qui assurent sa rapidité, sa sécurité et sa mise en ligne. Notre messagerie professionnelle vous aide à créer une image professionnelle, tandis que nos outils de marketing en ligne permettent aux entrepreneurs de se lancer en ligne avec un site Web bien référencé (SEO). GoDaddy est un fournisseur de solutions tout-en-un pour la mise en ligne de votre idée, soutenu par un support technique expert personnalisé par les Guides GoDaddy.",
  },
  {
    id: 2,
    question: "Pourquoi obtenir un nom de domaine GoDaddy ?",
    answer:
      "GoDaddy est le plus grand et le plus fiable registraire de domaine de confiance au monde. Il permet aux personnes telles que vous de réussir en ligne grâce à leurs idées créatives. Nos outils intuitifs – tels que notre générateur de noms d’entreprise et notre générateur de noms de domaines – peuvent vous indiquer les meilleurs noms de domaine disponibles (à prix avantageux) pour lancer votre prochaine idée en ligne. De plus, lorsque vous achetez un domaine GoDaddy, vous bénéficiez d’un service clientèle primé, de la confidentialité gratuite de votre domaine à vie et de la possibilité d’améliorer la sécurité de votre domaine grâce à nos plans de protection de domaine qui contribuent à garantir que la présence en ligne de votre marque est entièrement protégée.",
  },
  {
    id: 3,
    question: "Pourquoi utiliser le Créateur de sites web de GoDaddy ?",
    answer:
      "Parce que c’est un moyen simple et rapide de créer un site web que vous et vos clients allez adorer. Il vous suffit de saisir votre idée ou votre secteur d’activité et le Créateur de sites web de GoDaddy vous proposera plusieurs modèles prêts à l’emploi conçus par des professionnels. À partir de là, il vous suffira d’ajouter vos textes et images, et vous pourrez rapidement lancer votre site. Et avec des dizaines de fonctionnalités, allant de la prise de rendez-vous en ligne au système de commerce électronique complet, Créateur de sites web peut répondre aux besoins de votre entreprise, aujourd’hui et à mesure qu'elle se développe.",
  },
  {
    id: 4,
    question:
      "Qu’est-ce qui fait de l’hébergement web GoDaddy le leader mondial ?",
    answer:
      "Depuis près de 20 ans que nous travaillons dans ce secteur, nous disposons de l’expérience, de la technologie et des experts en hébergement nécessaires pour aider webdesigners, développeurs, blogueurs et entreprises en ligne à créer et maintenir leur présence sur le web. Notre plateforme d’hébergement web sécurisée (comprenant cPanel) offre une garantie de disponibilité de 99,9 %*** et un support technique primé qui a déjà aidé près de Plus de 20 millions de de clients à se lancer en ligne.",
  },
];

export const footerLinks = [
  {
    id: 1,
    title: "À propos de GoDaddy",
    links: [
      "About Us",
      "Carrières",
      "Contact Us",
      "GoDaddyBlog",
      "Aspect juridique",
      "Centre de confiance",
    ],
  },
  {
    id: 2,
    title: "Support",
    links: ["Product Support", "Report Abuse", "Resources"],
  },
  {
    id: 3,
    title: "Ressources",
    links: [
      "Email Web",
      "WHOIS",
      "Confirmation de l’ICANN",
      "Domaines d’entreprise",
      "Catalogue des produits",
      "Générateur de nom d’entreprise",
    ],
  },
  {
    id: 4,
    title: "Programmes partenaires",
    links: ["Affiliés", "Programmes des revendeurs", "GoDaddy Pro"],
  },
  {
    id: 5,
    title: "Compte",
    links: [
      "Mes produits",
      "Renouvellements et facturation",
      "Créer un compte",
    ],
  },
  {
    id: 6,
    title: "Shopping",
    links: [
      "Acheter un domaine",
      "Sites web",
      "Messagerie Pro",
      "WordPress",
      "Hébergement",
      "Sécurité web",
      "Logo Generator",
    ],
  },
];
