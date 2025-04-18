import { useState } from "react";
import backgroundImage from "../../assets/images/back_image.webp";
import DynamicButton from "../../components/ui/DynamicButton";

const HeroSection = () => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <section className="mx-auto flex w-full flex-col items-start gap-4 p-2 lg:max-w-[90vw] lg:gap-8 lg:p-6">
      <div className="bg-custom-black/5 flex w-full items-center justify-between gap-3 rounded-lg p-1.5">
        <form action="" className="w-full">
          <div className="relative">
            <div
              className={`${searchValue ? "hidden" : "lg:flex"} pointer-events-none absolute inset-y-0 start-0 hidden items-center ps-3 transition-all duration-300 ease-out`}
            >
              <svg
                className="h-4 w-4 font-bold text-gray-500 md:h-5 md:w-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>

            <input
              type="search"
              id="default-search"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              className={`placeholder:text-custom-black/40 text-custom-black block w-full rounded-lg border border-white bg-white lg:p-5 ${searchValue ? "ps-3" : "transition-all duration-300 ease-out lg:ps-10"} p-2 text-base leading-none font-bold shadow-[0px_2px_4px_rgba(0,_0,_0,_0.35)] outline-none placeholder:text-base placeholder:font-bold md:text-lg md:shadow-[0px_2px_10px_rgba(0,_0,_0,_0.35)] md:placeholder:text-2xl lg:text-2xl`}
              placeholder="Type the domain you want"
              required
            />

            <button
              type="submit"
              className="bg-custom-dark-green absolute end-2.5 bottom-2 hidden cursor-pointer rounded-lg px-4 py-3 text-sm font-medium text-white lg:flex lg:py-5"
            >
              Search Domains
            </button>

            <button className="bg-custom-dark-green absolute top-0 right-0 flex h-full w-12 items-center justify-center rounded-r-lg text-2xl text-white lg:hidden">
              <svg
                className="h-4 w-4 font-bold text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </button>
          </div>
        </form>

        <div className="group border-custom-light-green hidden w-1/3 cursor-pointer items-center gap-3 rounded-lg bg-transparent p-2 leading-none transition-all duration-100 ease-in-out hover:border-2 hover:bg-white/80 lg:flex">
          <span className="text-custom-black/60 text-sm font-bold">.shop</span>

          <div className="flex cursor-pointer flex-col items-start gap-1 text-start">
            <span className="group-hover:text-custom-dark-green text-custom-black text-sm font-semibold">
              $1.67/1st yr.
            </span>

            <p className="text-custom-black/70 text-sm font-medium">
              Satisfy the world's buyers with .shop
            </p>
          </div>
        </div>
      </div>

      <div className="flex h-auto w-full flex-col gap-6 lg:h-[80vh] lg:flex-row">
        {/* Left side with background image */}
        <div
          className="flex w-full flex-col justify-center gap-5 rounded-2xl p-6 lg:w-[60vw] lg:p-8"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            width: "100%",
            height: "auto",
          }}
        >
          <div className="text-custom-black flex h-auto w-12 items-center justify-center bg-[#A6FFF8] p-0.5 text-xs font-semibold">
            NEW
          </div>

          <p className="text-custom-black text-sm font-semibold">
            AI Suggested Domains
          </p>

          <h3 className="text-custom-black font-time mb-3 max-w-full text-4xl leading-[1.2] font-bold lg:max-w-md lg:text-5xl">
            Find the perfect domain and business name with AI.
          </h3>

          <div className="w-fit">
            <DynamicButton
              text="Try AI Domain Search"
              bg="custom-black"
              color="white"
            />
          </div>
        </div>

        {/* Right side (can add content later) */}
        <div className="bg-custom-orange flex w-full flex-col items-start gap-3 rounded-2xl p-6 text-start lg:w-[40vw] lg:items-center lg:justify-center lg:gap-5 lg:p-8 lg:text-center">
          <span className="text-custom-black text-sm font-semibold">
            Websites + Marketing
          </span>

          <h4 className="text-custom-black text-2xl leading-[1.5] font-bold lg:text-3xl">
            Create your free website.
          </h4>

          <DynamicButton
            text="Start for Free"
            bg="custom-black"
            color="white"
          />

          <a className="text-custom-black text-sm font-semibold">Learn More</a>

          <span className="text-custom-black text-xs font-light">
            No charge, no obligation, nothing to cancel.**
          </span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
