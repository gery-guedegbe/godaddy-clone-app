import { GoArrowRight } from "react-icons/go";

import ia_suggest_image from "@/assets/images/img11.jpg";
import orange_image from "@/assets/images/img12.jpg";

const WordpressContent = () => {
  return (
    <div className="flex h-full w-full flex-col items-center gap-4 lg:flex-row">
      <div
        style={{
          backgroundImage: `url(${ia_suggest_image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="flex h-52 w-full cursor-pointer flex-col items-start justify-end gap-2 rounded-lg border-none p-6 duration-300 ease-in-out hover:border-2 hover:border-white hover:shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] lg:h-full lg:w-1/2"
      >
        <h3 className="text-custom-black text-lg font-semibold lg:text-2xl">
          WordPress 9,59 $/mois
        </h3>

        <p className="text-custom-black hidden max-w-full text-sm font-medium lg:block lg:max-w-sm">
          Laissez l’IA créer rapidement en toute sérénité un site web
          entièrement géré et toujours à jour.
        </p>

        <button className="bg-custom-black mt-2 hidden rounded-md px-6 py-3 text-sm font-[500] text-white outline-none hover:scale-105 lg:block">
          Découvrez les plans WordPress
        </button>

        <button className="text-custom-black block text-xl font-medium lg:hidden">
          <GoArrowRight />
        </button>
      </div>

      <div
        style={{
          backgroundImage: `url(${orange_image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="flex h-52 w-full cursor-pointer flex-col items-start justify-end gap-2 rounded-lg border-none p-6 duration-300 ease-in-out hover:border-2 hover:border-white hover:shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] lg:h-full lg:w-1/2"
      >
        <div className="text-custom-black flex h-auto w-fit items-center justify-center bg-[#A6FFF8] p-1.5 text-xs font-semibold uppercase">
          Recommandé
        </div>

        <h4 className="text-custom-black text-base font-semibold lg:text-lg">
          Certificats SSL 83,99 $/an
        </h4>

        <p className="text-custom-black hidden max-w-full text-sm font-medium lg:block lg:max-w-sm">
          Contribuez à la sécurité des données sensibles de votre site et
          améliorez votre classement dans les moteurs de recherche avec un
          certificat SSL.
        </p>

        <button className="bg-custom-black mt-3 hidden rounded-md px-6 py-3 text-sm font-[500] text-white outline-none hover:scale-105 lg:block">
          Sécurisez vos données
        </button>

        <button className="text-custom-black block text-xl font-medium lg:hidden">
          <GoArrowRight />
        </button>
      </div>
    </div>
  );
};

export default WordpressContent;
