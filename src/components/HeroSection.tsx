import Image from "next/image";
import HeroImage from '../asste/banner.png'


const HeroSection = () => {
  return (
    <>
      <section>
        <div>
          <p>WORKOUT LIBRARY</p>
          <h1>TRAIN WITH INTENT. LOG EVERY SET.</h1>
          <p>
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into todays plan, and watch the weeks work add up.
          </p>
          <button>
            BROWSE WORKOUTS
          </button>
        </div>

        <div>
            <Image src={HeroImage} alt="Baner Image">

            </Image>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
