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
