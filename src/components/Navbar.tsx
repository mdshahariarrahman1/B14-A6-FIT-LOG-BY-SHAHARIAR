"use client";

import Image from "next/image";
import Logo from "../asste/logo.png";
import Link from "next/link";
import { useContext, useState } from "react";
import { FitLogContext } from "@/context/FitLogContext";
import { HiMenu, HiX } from "react-icons/hi";

const NavbarPage = () => {
  const context = useContext(FitLogContext);

  const [active, setActive] = useState("workouts");
  const [menuOpen, setMenuOpen] = useState(false);

  if (!context) {
    return null;
  }

  const { plan, saved } = context;

  const handleLink = (name: string) => {
    setActive(name);
    setMenuOpen(false);
  };

  return (
    <>
      <nav className="container mx-auto flex items-center justify-between py-5 md:py-6.5 px-4 md:px-6 mb-8 md:mb-12">
        <Link href="/workouts" className="flex items-center gap-2.5">
          <Image
            src={Logo}
            alt="NavBar Logo"
            width={30}
            height={30}
            className="w-7 md:w-8"
          />

          <p className="text-white font-bold text-[17px] md:text-[18px]">
            FITLOG
          </p>
        </Link>

        <ul className="hidden md:flex text-[#9CA3AF] gap-3.5 text-[16px] font-semibold">
          <li
            onClick={() => handleLink("workouts")}
            className={`rounded-full px-4.5 py-1.5 cursor-pointer transition duration-300 ${
              active === "workouts"
                ? "bg-[#1A2312] text-[#C2F800]"
                : "text-[#9CA3AF]"
            }`}
          >
            <Link href="/workouts">Workouts</Link>
          </li>

          <li
            onClick={() => handleLink("myplan")}
            className={`rounded-full px-4 py-1.5 cursor-pointer transition duration-300 ${
              active === "myplan"
                ? "bg-[#1A2312] text-[#C2F800]"
                : "text-[#9CA3AF]"
            }`}
          >
            <Link href="/my_plan">My Plan</Link>
          </li>
        </ul>

        <div className="flex items-center gap-3 md:gap-6">
          <Link href="/my_plan">
            <div className="text-[#D1D5DB] flex items-center">
              <p className="text-[13px] md:text-[16px] pr-2 md:pr-3 font-medium">
                Plan
              </p>

              <span className="min-w-5 h-5 md:h-6 md:min-w-6 flex items-center justify-center px-1.5 rounded-full bg-[#C2F800] text-[12px] md:text-[16px] text-black">
                {plan.length}
              </span>
            </div>
          </Link>

          <Link href="/saved">
            <div className="text-[#9CA3AF] flex items-center">
              <p className="text-[13px] md:text-[16px] pr-2 md:pr-3 font-medium">
                Saved
              </p>

              <span className="min-w-5 h-5 md:h-6 md:min-w-6 flex items-center justify-center px-1.5 rounded-full bg-[#2D313B] border border-[#454952] text-[12px] md:text-[16px] text-[#D1D5DB]">
                {saved.length}
              </span>
            </div>
          </Link>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden ml-1 w-9 h-9 rounded-full border border-[#343840] flex items-center justify-center text-[#9CA3AF] text-2xl"
          >
            {menuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </nav>
      {menuOpen && (
        <div className="md:hidden px-4 -mt-4 mb-8">
          <div className="bg-[#15171D] border border-[#292C33] rounded-xl p-3">
            <Link
              href="/workouts"
              onClick={() => handleLink("workouts")}
              className={`block px-4 py-3 rounded-lg font-semibold ${
                active === "workouts"
                  ? "bg-[#1A2312] text-[#C2F800]"
                  : "text-[#9CA3AF]"
              }`}
            >
              Workouts
            </Link>

            <Link
              href="/my_plan"
              onClick={() => handleLink("myplan")}
              className={`block px-4 py-3 rounded-lg font-semibold ${
                active === "myplan"
                  ? "bg-[#1A2312] text-[#C2F800]"
                  : "text-[#9CA3AF]"
              }`}
            >
              My Plan
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default NavbarPage;