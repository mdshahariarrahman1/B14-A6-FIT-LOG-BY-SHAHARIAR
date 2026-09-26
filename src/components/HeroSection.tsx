import Image from "next/image";
import HeroImage from "../asste/banner.png";

const HeroSection = () => {
  return (
    <>
      <section className="container mx-auto bg-[#15171D] rounded-2xl mb-12 md:mb-16 overflow-hidden">
        <div className="flex flex-col md:flex-row justify-between items-center p-6 md:p-14">
          {/* Hero Content */}
          <div className="text-white w-full md:w-auto">
            <p className="text-[10px] md:text-[11px] font-bold text-[#C2F800] leading-4.5">
              WORKOUT LIBRARY
            </p>

            <h1 className="mt-5 md:mt-0 text-[30px] leading-[0.95] md:text-6xl md:leading-none font-extrabold">
              TRAIN WITH INTENT.
              <br className=" hidden md:block" />
              LOG
              <br className="md:hidden" />
              <span className="md:hidden"> EVERY SET.</span>
              <span className="hidden md:inline"> EVERY SET.</span>
            </h1>

            <p className="pt-5 text-[14px] md:text-[18px] leading-5 md:leading-6 font-light text-[#9CA3AF] max-w-xl">
              FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
              into today&apos;s plan, and watch the week&apos;s work add up.
            </p>

            <button className="mt-7 text-[11px] md:text-[12px] font-bold leading-4 py-3 px-6 bg-[#C2F800] text-black rounded-md cursor-pointer transition-all duration-500 hover:shadow-[0px_10px_20px_rgba(194,248,0,0.4)]">
              BROWSE WORKOUTS
            </button>
          </div>

          {/* Hero Image */}
          <div className="w-full md:w-auto flex justify-center md:justify-end mt-8 md:mt-0">
            <Image
              src={HeroImage}
              alt="Banner Image"
              className="w-62.5 md:w-auto h-auto"
              priority
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
