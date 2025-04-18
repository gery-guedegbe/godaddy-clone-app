import { useState } from "react";
import { faqData } from "../../../constant";
import { IoIosArrowUp } from "react-icons/io";

const Faq = () => {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleFaq = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="mx-auto my-4 flex w-full flex-col items-center justify-center gap-4 px-8 lg:my-8">
      <p className="text-custom-black max-w-full text-center text-sm font-[550] md:max-w-lg md:text-base">
        Des millions de clients font confiance à nos domaines et hébergements
        web pour publier leurs idées en ligne
      </p>

      <h3 className="text-custom-black max-w-full text-center text-xl font-bold md:max-w-lg md:text-2xl">
        Questions fréquemment posées
      </h3>

      <div className="mx-auto mt-10 flex w-full max-w-2xl flex-col items-start justify-center gap-4 text-start lg:gap-6">
        {faqData.map((faq) => (
          <div
            key={faq.id}
            className="w-full cursor-pointer space-y-3 transition-all duration-300"
          >
            {/* Question */}
            <div
              onClick={() => toggleFaq(faq.id)}
              className="border-t-custom-gray mb-3 flex w-full items-start justify-between border-t-[1.5px] pt-6"
            >
              <h2 className="text-custom-black text-lg leading-[130%] font-semibold md:text-2xl">
                {faq.question}
              </h2>

              {/* Rotation de l'icône */}
              <IoIosArrowUp
                size={24}
                className={`transition-transform duration-300 ${
                  openId === faq.id ? "rotate-0" : "rotate-180"
                }`}
              />
            </div>

            {/* Réponse */}
            {openId === faq.id && (
              <p className="text-custom-black text-[15px] font-[400] transition-all duration-300 md:font-medium">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
