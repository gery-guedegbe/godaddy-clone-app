import { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import image_1 from "@/assets/images/img5.jpg";
import image_2 from "@/assets/images/img14.jpg";
import image_3 from "@/assets/images/img13.jpg";
import DynamicButton from "../../components/ui/DynamicButton";

const tabContents = {
  image_1: image_1,
  image_2: image_2,
  image_3: image_3,
} as const;

const ServiceSection = () => {
  const [hoveredCard, setHoveredCard] = useState("image_1");
  const [selectedCard, setSelectedCard] = useState(0);

  const cards = [
    {
      id: "image_1",
      title:
        "Passez rapidement en ligne. Aucune compétence en design n'est requise.",
      content:
        "Créez votre site rapidement. Faites votre choix parmi des centaines de superbes modèles conviviaux dédiés aux mobiles grâce à notre outil Créateur de sites web. Nombre de ces modèles possèdent également des fonctionnalités d'e-commerce.",
    },
    {
      id: "image_2",
      title:
        "Établissez votre crédibilité avec un email correspondant à votre domaine.",
      content:
        "Renforcez votre crédibilité auprès de vos clients au moyen d'un email professionnel gratuit reprenant votre nom de domaine.",
    },
    {
      id: "image_3",
      title: "Utilisez des outils de marketing.",
      content:
        "Aidez votre public à vous trouver grâce à l'optimisation SEO intégrée et faites la promotion de votre entreprise via les réseaux sociaux et des outils de marketing par email.",
    },
  ];

  const handleCardChange = (index: number) => {
    setSelectedCard(index);
    setHoveredCard(cards[index].id);
  };

  return (
    <div className="mx-auto my-8 flex max-w-full flex-col items-center gap-4 px-2 lg:max-w-[90vw] lg:gap-8 lg:px-8">
      <h1 className="text-custom-black flex w-full max-w-full items-center text-center text-2xl leading-[130%] font-semibold md:text-3xl lg:max-w-lg lg:text-4xl">
        Développez votre marque avec Sites web + marketing.
      </h1>

      <div className="mt-6 flex w-full flex-col items-center gap-4 lg:gap-6">
        <div className="h-[40vh] w-full lg:h-[60vh]">
          <img
            src={tabContents[hoveredCard as keyof typeof tabContents]}
            alt="Service illustration"
            className="h-full w-full rounded-xl object-cover"
          />
        </div>

        {/* Version desktop (grid) */}
        <div className="hidden h-[40vh] w-full grid-cols-3 gap-6 md:grid">
          {cards.map((card) => (
            <div
              key={card.id}
              onMouseEnter={() => setHoveredCard(card.id)}
              className="flex cursor-pointer flex-col items-start gap-3 rounded-xl p-4 text-start transition-colors duration-300 ease-in-out hover:bg-gray-100"
            >
              <h3 className="text-custom-black text-lg font-semibold md:text-2xl">
                {card.title}
              </h3>

              <p className="text-sm font-medium">{card.content}</p>
            </div>
          ))}
        </div>

        {/* Version mobile (carousel) */}
        <div className="w-full md:hidden">
          <Carousel
            showArrows={true}
            showStatus={false}
            showIndicators={true}
            showThumbs={false}
            selectedItem={selectedCard}
            onChange={handleCardChange}
            className="w-full"
          >
            {cards.map((card) => (
              <div
                key={card.id}
                className="bg-custom-light-green/30 flex h-full cursor-pointer flex-col items-start gap-3 rounded-xl p-4 text-start transition-colors duration-300 ease-in-out hover:bg-gray-100"
                onClick={() => {
                  setHoveredCard(card.id);
                  setSelectedCard(cards.findIndex((c) => c.id === card.id));
                }}
              >
                <h3 className="text-custom-black text-lg font-semibold">
                  {card.title}
                </h3>
                <p className="text-sm font-medium">{card.content}</p>
              </div>
            ))}
          </Carousel>
        </div>
      </div>

      <div className="mt-6 lg:mt-10">
        <DynamicButton
          text="Démarrez gratuitement"
          bg="custom-black"
          color="white"
        />
      </div>
    </div>
  );
};

export default ServiceSection;
