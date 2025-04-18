import { useState } from "react";
import DomainContent from "./components/DomainContent";
import RecommendedContent from "./components/RecommendedContent";
import WordpressContent from "./components/WordpressContent";

const DomainSection = () => {
  // État pour suivre l'onglet actif
  const [activeTab, setActiveTab] = useState("domain");

  // Contenu pour chaque onglet
  const tabContents = {
    domain: <DomainContent />,
    recommended: <RecommendedContent />,
    wordpress: <WordpressContent />,
  } as const;

  return (
    <section className="mx-auto my-8 flex w-full flex-col items-start gap-4 px-2 lg:max-w-[90vw] lg:gap-8 lg:px-8">
      {/* Mini Nav Bar */}
      <div className="flex w-full items-center justify-center gap-3 overflow-x-auto p-1 lg:gap-4">
        <button
          className={`px-4 py-1.5 md:px-5 md:py-2.5 ${activeTab === "domain" ? "bg-custom-black text-white" : "text-custom-black bg-white"} hover:border-custom-black cursor-pointer rounded-full border-[1.5px] border-black/30 text-sm font-[500] shadow duration-100 ease-out outline-none hover:scale-105`}
          onClick={() => setActiveTab("domain")}
        >
          Domain
        </button>

        <button
          className={`px-4 py-1.5 md:px-5 md:py-2.5 ${activeTab === "recommended" ? "bg-custom-black text-white" : "text-custom-black bg-white"} hover:border-custom-black cursor-pointer rounded-full border-[1.5px] border-black/30 text-sm font-[500] shadow duration-100 ease-out outline-none hover:scale-105`}
          onClick={() => setActiveTab("recommended")}
        >
          Recommandé
        </button>

        <button
          className={`px-4 py-1.5 md:px-5 md:py-2.5 ${activeTab === "wordpress" ? "bg-custom-black text-white" : "text-custom-black bg-white"} hover:border-custom-black cursor-pointer rounded-full border-[1.5px] border-black/30 text-sm font-[500] shadow duration-100 ease-out outline-none hover:scale-105`}
          onClick={() => setActiveTab("wordpress")}
        >
          WordPress
        </button>
      </div>

      {/* Contenu dynamique */}
      <div className="h-screen w-full p-4">
        {tabContents[activeTab as keyof typeof tabContents]}
      </div>
    </section>
  );
};

export default DomainSection;
