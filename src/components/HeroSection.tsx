import Image from "next/image";
import HeroImage from "../asste/banner.png";

const HeroSection = () => {
  return (
    <>
      <section className="  container mx-auto bg-[#15171D] rounded-2xl mb-16">
        <div className="flex justify-between items-center p-14">
          <div className="text-[#FFFFFF]">
            <p className="text-[11px] font-bold text-[#C2F800] leading-4.5">
              WORKOUT LIBRARY
            </p>
            <h1 className="text-6xl font-extrabold">
              TRAIN WITH INTENT. LOG
              <br /> EVERY SET.
            </h1>
            <p className="pt-5 text-[18px] leading-6 font-light text-[#9CA3AF]">
              FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
              <br />
              into today&apos;s plan, and watch the week&apos;s work add up.
            </p>
            <button className="mt-7 text-[12px] font-bold leading-4 py-3 px-6 bg-[#C2F800] text-[#000000] rounded-md cursor-pointer transition-all duration-500 hover:shadow-[0px_10px_20px_rgba(194,248,0,0.4)]">
              BROWSE WORKOUTS
            </button>
          </div>

          <div>
            <Image src={HeroImage} alt="Baner Image"></Image>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
