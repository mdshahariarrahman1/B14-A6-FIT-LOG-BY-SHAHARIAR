import React from "react";
import footerLogo from "../asste/Brand_Logo_Left.png";
import Image from "next/image";

const FooterPage = () => {
  return (
    <>
      <footer className="border-t border-[#20242C] bg-[#080A0E] py-8">
        <div className=" container mx-auto flex items-center justify-between gap-4 md:flex-row">
          <div>
            <Image src={footerLogo} alt="FitLog" />
          </div>
          <p className="text-center text-[12px] text-[#697080] md:text-right">
            © 2026 FitLog — Workout Library. Train hard, log honest.
          </p>
        </div>
      </footer>
    </>
  );
};

export default FooterPage;
