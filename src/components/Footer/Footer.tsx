import { footerLinks } from "../../constant";
import {
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";

import godaddy_logo from "@/assets/logos/godaddy-logo.svg";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-custom-black w-full px-4 py-10 text-white md:px-12">
      <div className="w-full">
        {/* Grille des colonnes */}
        <div className="grid w-full grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
          {footerLinks.map((item) => (
            <div key={item.id} className="space-y-2 md:space-y-4">
              <h4 className="text-sm leading-[20px] font-[850] text-white">
                {item.title}
              </h4>

              <ul className="text-custom-grey space-y-2 text-[12px] leading-[19px] font-[565]">
                {item.links.map((link, index) => (
                  <li key={index} className="cursor-pointer hover:underline">
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Ligne séparatrice */}
        <div className="my-8 h-px w-full bg-gray-700" />

        {/* Bas du footer */}
        <div className="flex w-full flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          {/* Logo + langue/devise */}

          <img
            src={godaddy_logo}
            alt="Godaddy Logo"
            className="h-auto w-24 object-cover md:w-32"
          />

          <div className="flex w-full items-center justify-between md:justify-center">
            <span className="flex items-center gap-1 text-sm leading-[24px] font-bold text-white md:text-base">
              France - Français <MdOutlineKeyboardArrowDown />
            </span>

            <span className="flex items-center gap-1 text-sm leading-[24px] font-bold text-white md:text-base">
              USD $ <MdOutlineKeyboardArrowDown />
            </span>
          </div>

          {/* Réseaux sociaux */}
          <div className="flex items-center gap-4 text-xl text-white">
            <FaFacebook className="cursor-pointer text-xl leading-[24px] font-[565] text-white hover:text-gray-400 md:text-2xl lg:text-3xl" />
            <FaInstagram className="cursor-pointer text-xl leading-[24px] font-[565] text-white hover:text-gray-400 md:text-2xl lg:text-3xl" />
            <FaTiktok className="cursor-pointer text-xl leading-[24px] font-[565] text-white hover:text-gray-400 md:text-2xl lg:text-3xl" />
            <FaXTwitter className="cursor-pointer text-xl leading-[24px] font-[565] text-white hover:text-gray-400 md:text-2xl lg:text-3xl" />
            <FaYoutube className="cursor-pointer text-xl leading-[24px] font-[565] text-white hover:text-gray-400 md:text-2xl lg:text-3xl" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
