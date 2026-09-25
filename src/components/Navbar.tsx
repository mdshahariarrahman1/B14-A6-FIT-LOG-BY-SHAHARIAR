import Image from "next/image";
import Logo from "../asste/logo.png";
import Link from "next/link";

const NavbarPage = () => {
  const Links = (
    <>
      <li className="py-1.5 px-4.5 text-[#C2F800] bg-[#1A2312] rounded-full">
        <Link href={"/workouts"}>Workouts</Link>
      </li>
      <li className="py-1.5 px-4">
        <Link href={"/my_plan"}>My Plan</Link>
      </li>
    </>
  );

  return (
    <>
      <nav className=" container mx-auto flex justify-between items-center py-6.5 px-6 mb-12">
        <div className="flex items-center gap-2.5">
          <Image src={Logo} alt="NavBar_Logo"></Image>
          <p className="text-[#FFFFFF] font-bold text-[18px]">FITLOG</p>
        </div>

        <ul className="text-[#9CA3AF] flex gap-3.5 text-[16px] font-semibold">{Links}</ul>

        <div className=" flex gap-6">
          <Link href={''}>
          <div className="text-[#D1D5DB] flex">
            <p className="text-[16px] pr-3 py-0.5 px-1 font-medium">Plan</p>
            <span className="py-0.5 px-2 rounded-full bg-[#C2F800] text-[16px] text-[#000000]">0</span>
          </div>
          </Link>

          <Link href={''}>
          <div className="text-[#9CA3AF] flex">
            <p className="text-[16px] pr-3 py-0.5 px-1 font-medium">Saved</p>
            <div className="py-0.5 px-2 rounded-full bg-[#2D313B] border text-[16px] text-[#D1D5DB]">
              0
            </div>
          </div>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default NavbarPage;
