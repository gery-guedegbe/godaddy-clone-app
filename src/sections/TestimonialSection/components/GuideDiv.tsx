import avatar from "@/assets/images/avatar_4.jpg";
import gd_guides_logo from "@/assets/logos/gd-guides-logo.svg";
import DynamicButton from "../../../components/ui/DynamicButton";

const GuideDiv = () => {
  return (
    <div className="relative mt-4 flex h-full w-full flex-col items-start gap-3 px-3 lg:h-screen lg:px-0">
      <img
        src={avatar}
        alt="Avatar 1"
        className="h-48 w-full object-cover sm:h-64 lg:h-full"
      />

      <div className="relative flex h-auto w-full flex-col items-start justify-center gap-5 rounded-lg p-3 text-start lg:absolute lg:top-4 lg:right-4 lg:h-[94vh] lg:w-[50%] lg:p-8">
        <img
          src={gd_guides_logo}
          alt="GD Guides Logo"
          className="h-auto w-36 object-cover sm:w-40 lg:w-52"
        />

        <h3 className="text-custom-black font-time mt-0 max-w-full text-2xl leading-[130%] font-bold md:text-3xl lg:mt-2 lg:max-w-lg lg:text-4xl">
          Pourquoi choisir GoDaddy ?
        </h3>

        <p className="text-custom-black max-w-full text-sm font-[580] md:max-w-md lg:text-base">
          Parce que nous savons que même la technologie la plus performante a
          besoin des meilleurs spécialistes. C’est pourquoi nous assurons un
          support technique téléphonique spécialisé en permanence, entre autres.
        </p>

        <div className="space-y-4">
          <p className="text-custom-black text-sm font-[580] lg:text-base">
            Appelez notre équipe de support technique au 09 70 01 93 53.
          </p>

          <DynamicButton
            text="Obtenez de l'aide"
            color="white"
            bg="custom-black"
          />
        </div>
      </div>
    </div>
  );
};

export default GuideDiv;
