import CreatorDiv from "./components/CreatorDiv";
import Faq from "./components/Faq";
import GuideDiv from "./components/GuideDiv";

const TestimonialSection = () => {
  return (
    <section className="my-8 flex w-full flex-col gap-10">
      <h1 className="text-custom-black font-semiboldl mx-0 flex w-full max-w-full items-center justify-center px-2 text-start text-2xl leading-[130%] font-bold md:text-3xl lg:mx-10 lg:max-w-xl lg:items-start lg:justify-start lg:px-8 lg:text-4xl">
        Nous sommes toujours aux côtés de nos clients.
      </h1>

      <CreatorDiv />

      <GuideDiv />

      <Faq />

      <div className="text-custom-black w-full px-8 text-sm leading-[24px] font-[565] md:text-base">
        Les logos et marques tiers sont des marques déposées de leurs
        propriétaires respectifs. Tous droits réservés.
      </div>
    </section>
  );
};

export default TestimonialSection;
