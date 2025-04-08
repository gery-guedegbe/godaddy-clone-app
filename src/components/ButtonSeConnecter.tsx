import { useState } from "react";
import { BiChevronDown, BiSolidUser } from "react-icons/bi";
import { IoClose } from "react-icons/io5";

const ButtonSeConnecter = () => {
  const [istoggled, setIsToggled] = useState(false);

  const handleToggled = () => {
    setIsToggled((prev) => !prev);
  };

  return (
    <div className="relative">
      <button
        onClick={handleToggled}
        className="hidden cursor-pointer items-center gap-0.5 rounded-md px-2 py-1.5 text-sm font-medium text-white lg:flex"
      >
        Se Connecter
        <BiChevronDown
          className={`text-base text-white transition-transform duration-200 ${
            istoggled ? "rotate-180" : ""
          }`}
        />
      </button>

      <BiSolidUser
        onClick={handleToggled}
        className="flex text-xl font-semibold text-white lg:hidden"
      />

      {istoggled && (
        <div className="absolute top-12 -right-4 flex h-auto w-xs flex-col gap-4 rounded-md bg-white p-3 text-start shadow-md lg:right-0">
          <div className="absolute -top-3 right-3 h-0 w-0 border-r-14 border-b-14 border-l-14 border-r-transparent border-b-white border-l-transparent"></div>

          <div className="flex w-full items-center justify-between">
            <h3 className="text-custom-black text-sm font-semibold">
              Utilisateurs enregistrés
            </h3>

            <IoClose
              onClick={() => setIsToggled(false)}
              className="text-custom-black cursor-pointer text-2xl"
            />
          </div>

          <p className="text-custom-black text-sm font-semibold break-words">
            Vous avez un compte ? Connectez-vous.
          </p>

          <a
            href="#"
            className="text-custom-green border-b-[1.5px] border-b-black/10 pb-3 text-sm font-semibold underline"
          >
            Se connecter
          </a>

          <h3 className="text-custom-black text-sm font-semibold">
            Nouveau client
          </h3>

          <p className="text-custom-black text-sm font-semibold break-words">
            Vous ne connaissez pas encore GoDaddy ? Créez un compte et commencez
            dès aujourd’hui.
          </p>

          <a
            href="#"
            className="text-custom-green border-b-[1.5px] border-b-black/10 pb-3 text-sm font-semibold underline"
          >
            Créer un compte
          </a>

          <p className="text-custom-black/50 text-xs font-semibold uppercase">
            LIENS DE LA BOÎTE DE RÉCEPTION
          </p>

          <a
            href="#"
            className="text-custom-green border-b-[1.5px] border-b-black/10 pb-3 text-sm font-semibold hover:underline"
          >
            Se connecter à la Messagerie Office 365
          </a>

          <a
            href="#"
            className="text-custom-green border-b-[1.5px] border-b-black/10 pb-3 text-sm font-semibold hover:underline"
          >
            Se connecter à Email Web GoDaddy
          </a>
        </div>
      )}
    </div>
  );
};

export default ButtonSeConnecter;
