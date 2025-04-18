import house_design_image from "@/assets/images/img9.jpg";
import saint_wool_image from "@/assets/images/img10.jpg";
import cake_image from "@/assets/images/img8.jpg";
import { GoArrowRight } from "react-icons/go";

const RecommendedContent = () => {
  return (
    <div className="flex h-full w-full flex-col items-center gap-4 lg:flex-row">
      <div
        style={{
          backgroundImage: `url(${saint_wool_image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="flex h-full w-full cursor-pointer flex-col items-start justify-end gap-2 rounded-lg border-none p-6 duration-300 ease-in-out hover:border-2 hover:border-white hover:shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] lg:h-full lg:w-1/2"
      >
        <h3 className="text-custom-black text-xl font-semibold lg:text-2xl">
          Messagerie professionnelle 2,39 $ par utilisateur/mois
        </h3>

        <p className="text-custom-black hidden max-w-full text-sm font-medium lg:block lg:max-w-sm">
          Gagnez la confiance de vos clients avec une addresse email qui
          correspond à votre domaine.
        </p>

        <button className="bg-custom-black mt-2 hidden rounded-md px-6 py-3 text-sm font-[500] text-white outline-none hover:scale-105 lg:block">
          Commencer
        </button>

        <button className="text-custom-black block text-xl font-medium lg:hidden">
          <GoArrowRight />
        </button>
      </div>

      <div className="hidden h-full w-full flex-row items-start gap-4 lg:flex lg:w-1/2 lg:flex-col">
        <div
          style={{
            backgroundImage: `url(${house_design_image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
          className="flex h-full w-full cursor-pointer flex-col items-start justify-center gap-2 rounded-lg border-none p-6 duration-300 ease-in-out hover:border-2 hover:border-white hover:shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]"
        >
          <h4 className="text-custom-black text-base font-semibold lg:text-lg">
            Sites web à 11,99 $ / mois
          </h4>

          <p className="text-custom-black max-w-full text-sm font-medium lg:max-w-[200px]">
            Démmarez gratuitement et concevez rapidement un joli site adapté aux
            appareils mobiles.
          </p>

          <button className="bg-custom-black mt-3 rounded-md px-6 py-3 text-sm font-[500] text-white outline-none hover:scale-105">
            Créer votre site
          </button>
        </div>

        <div
          style={{
            backgroundImage: `url(${cake_image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
          className="flex h-full w-full cursor-pointer flex-col items-start justify-center gap-2 rounded-lg border-none p-6 duration-300 ease-in-out hover:border-2 hover:border-white hover:shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]"
        >
          <h4 className="text-custom-black text-base font-semibold lg:text-lg">
            Hébergement web 8,39 $/mois
          </h4>

          <p className="text-custom-black max-w-full text-sm font-medium lg:max-w-[200px] lg:text-sm">
            Bénéficiez de temps de chargement rapide et d'une disponibilité
            garantie à 99,99%. ***
          </p>

          <button className="bg-custom-black mt-2 rounded-md px-6 py-3 text-sm font-[500] text-white outline-none hover:scale-105">
            Voir les plans et la tarification
          </button>
        </div>
      </div>

      <div className="flex h-full w-full flex-row items-start gap-4 lg:hidden lg:w-1/2">
        <div className="bg-custom-gray text-custom-black flex h-full w-full cursor-pointer flex-col items-start justify-between rounded-lg p-6">
          <button className="text-custom-black flex w-full items-end justify-end text-xl font-medium">
            <GoArrowRight />
          </button>

          <h4 className="text-custom-black text-base font-semibold sm:text-lg">
            Sites web 11,99 $/mois
          </h4>
        </div>

        <div className="bg-custom-gray text-custom-black flex h-full w-full cursor-pointer flex-col items-start justify-between rounded-lg p-6">
          <button className="text-custom-black flex w-full items-end justify-end text-xl font-medium">
            <GoArrowRight />
          </button>

          <h4 className="text-custom-black text-base font-semibold sm:text-lg">
            Hébergement web 8,39 $/mois
          </h4>
        </div>
      </div>
    </div>
  );
};

export default RecommendedContent;
