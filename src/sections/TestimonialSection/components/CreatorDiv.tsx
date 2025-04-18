import avatar_1 from "@/assets/images/avatar_1.jpg";
import avatar_2 from "@/assets/images/avatar_3.jpg";
import { CiSearch, CiShop, CiLock } from "react-icons/ci";

const CreatorDiv = () => {
  return (
    <div className="relative mt-4 flex h-full w-full flex-col items-start px-2 lg:h-screen lg:px-8">
      <img
        src={avatar_1}
        alt="Avatar 1"
        className="h-48 w-full rounded-t-2xl object-cover sm:h-64 lg:h-full lg:rounded-2xl"
      />

      <div className="bg-custom-light-green/30 relative flex h-auto w-full flex-col justify-between gap-4 rounded-lg p-3 text-start lg:absolute lg:top-4 lg:right-12 lg:h-[94vh] lg:w-[60%] lg:bg-white lg:p-8">
        <h3 className="text-xl leading-[130%] font-semibold sm:text-2xl lg:text-3xl lg:font-bold">
          « L’outil Créateur de sites web de GoDaddy est super-pratique quand on
          a une idée de ce que l’on veut créer mais qu’on ne dispose pas des
          compétences techniques nécessaires. »
        </h3>

        <div className="flex w-full items-start justify-between">
          <div className="mt-0 w-full space-y-6 lg:mt-2 lg:w-1/3">
            <h4 className="text-custom-black/80 flex flex-col gap-1 text-sm font-medium">
              Produits utilisés par{" "}
              <span className="font-bold text-black">Roletape :</span>
            </h4>

            <ul className="text-custom-black space-y-3 text-sm font-[550] lg:space-y-4 lg:text-[15px]">
              <li className="flex items-center gap-2">
                <span className="bg-custom-green/20 text-custom-black flex items-center justify-center rounded-lg p-1.5 text-lg font-bold">
                  <CiSearch />
                </span>
                Domaine
              </li>

              <li className="flex items-center gap-2">
                <span className="bg-custom-green/20 text-custom-black flex items-center justify-center rounded-lg p-1.5 text-lg font-bold">
                  <CiShop />
                </span>
                Boutique en ligne
              </li>

              <li className="flex items-center gap-2">
                <span className="bg-custom-green/20 text-custom-black flex items-center justify-center rounded-lg p-1.5 text-lg font-bold">
                  <CiLock />
                </span>
                Certificats SSL
              </li>
            </ul>
          </div>

          <img
            src={avatar_2}
            alt="Avatar 2"
            className="hidden h-auto w-[30vw] rounded-lg object-cover md:block"
          />
        </div>
      </div>
    </div>
  );
};

export default CreatorDiv;
