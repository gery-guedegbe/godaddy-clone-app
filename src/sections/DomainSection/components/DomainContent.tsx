import { GoArrowRight } from "react-icons/go";

import select_input_image from "@/assets/images/img2.webp";
import flower_back_image from "@/assets/images/img4.jpg";
import cafe_back_image from "@/assets/images/img3.jpg";

const DomainContent = () => {
  return (
    <div className="flex h-full w-full flex-col items-center gap-4 lg:flex-row">
      <div
        style={{
          backgroundImage: `url(${select_input_image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="flex h-52 w-full cursor-pointer flex-col items-start justify-end gap-2 rounded-lg border-none p-6 duration-300 ease-in-out hover:border-2 hover:border-white hover:shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] lg:h-full lg:w-1/2"
      >
        <h3 className="text-custom-black text-lg font-semibold lg:text-2xl">
          Domaines
        </h3>

        <p className="text-custom-black hidden max-w-full text-sm font-medium lg:block lg:max-w-sm">
          Lancez-vous avec le domaine idéal, qui offre la protection de la
          confidentialité de domaine gratuite à vie.
        </p>

        <button className="bg-custom-black mt-2 hidden rounded-md px-6 py-3 text-sm font-[500] text-white outline-none hover:scale-105 lg:block">
          Rechercher des domaines
        </button>

        <button className="text-custom-black block text-xl font-medium lg:hidden">
          <GoArrowRight />
        </button>
      </div>

      <div className="hidden h-full w-full flex-row items-start gap-4 lg:flex lg:w-1/2 lg:flex-col">
        <div
          style={{
            backgroundImage: `url(${cafe_back_image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
          className="flex h-full w-full cursor-pointer flex-col items-start justify-center gap-2 rounded-lg border-none p-6 duration-300 ease-in-out hover:border-2 hover:border-white hover:shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]"
        >
          <h4 className="text-custom-black text-base font-semibold lg:text-lg">
            .co à 0,02 $/1re année
          </h4>

          <p className="text-custom-black max-w-full text-sm font-medium lg:max-w-sm">
            Faites en sorte que votre entreprise et votre site web se démarquent
            avec un domaine .co. Abonnement de 3 an requis. Année(s)
            supplémentaire(s) à 62,39 $.
          </p>

          <button className="bg-custom-black mt-3 rounded-md px-6 py-3 text-sm font-[500] text-white outline-none hover:scale-105">
            Trouvez votre domaine
          </button>
        </div>

        <div
          style={{
            backgroundImage: `url(${flower_back_image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
          className="flex h-full w-full cursor-pointer flex-col items-start justify-center gap-2 rounded-lg border-none p-6 duration-300 ease-in-out hover:border-2 hover:border-white hover:shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]"
        >
          <h4 className="text-custom-black text-base font-semibold lg:text-lg">
            .fr 23,99 $/1re année
          </h4>

          <p className="text-custom-black max-w-full text-sm font-medium lg:max-w-xs lg:text-sm">
            Optimisez votre impact local avec nos domaines de premier niveau
            localisés.
          </p>

          <button className="bg-custom-black mt-2 rounded-md px-6 py-3 text-sm font-[500] text-white outline-none hover:scale-105">
            Commencer
          </button>
        </div>
      </div>

      <div className="flex h-full w-full flex-row items-start gap-4 lg:hidden lg:w-1/2">
        <div className="bg-custom-gray text-custom-black flex h-40 w-full cursor-pointer flex-col items-start justify-between rounded-lg p-6">
          <button className="text-custom-black flex w-full items-end justify-end text-xl font-medium">
            <GoArrowRight />
          </button>

          <h4 className="text-custom-black text-base font-semibold lg:text-lg">
            .co à 0,02 $/1re année
          </h4>
        </div>

        <div className="bg-custom-gray text-custom-black flex h-40 w-full cursor-pointer flex-col items-start justify-between rounded-lg p-6">
          <button className="text-custom-black flex w-full items-end justify-end text-xl font-medium">
            <GoArrowRight />
          </button>

          <h4 className="text-custom-black text-base font-semibold lg:text-lg">
            .fr à 23 $/1re année
          </h4>
        </div>
      </div>
    </div>
  );
};

export default DomainContent;
