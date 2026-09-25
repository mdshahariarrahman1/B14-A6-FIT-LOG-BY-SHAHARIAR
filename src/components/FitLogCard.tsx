import { IfitLogType } from "@/type/type";
import { Clock3, Flame, Star } from "lucide-react";
import Image from "next/image";
import React from "react";

interface fitLogCatdType {
  filLog: IfitLogType;
}

const FitLogCard = ({ filLog }: fitLogCatdType) => {
  return (
    <div className=" rounded-2xl border border-[#30343D] bg-[#15171D] text-white">
      {/* Image */}
      <div className="relative w-full">
        <Image
          src={filLog.image}
          alt={filLog.name}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-6">
        <div className="mb-4 flex flex-wrap gap-2">
          {filLog.muscleGroups.map((muscle) => (
            <span
              key={muscle}
              className="rounded-full bg-[#B7F000] px-3 py-1 text-[12px] font-bold uppercase tracking-wide text-black"
            >
              {muscle}
            </span>
          ))}
        </div>

        <h2 className="mb-1 text-[19px] font-extrabold uppercase tracking-wide">
          {filLog.name}
        </h2>
        <p className="text-[13px] text-[#8C9099]">{filLog.equipment}</p> 
        <div className="my-4 h-px w-full bg-[#292D35]" />   
        <div className="flex items-center gap-5 text-[13px] text-[#A4A8B1]">
         
          <div className="flex items-center gap-1.5">
            <Clock3 size={16} strokeWidth={1.8} />
            <span>{filLog.duration} min</span>
          </div>
        
          <div className="flex items-center gap-1.5">
            <Flame size={16} strokeWidth={1.8} />
            <span>{filLog.caloriesBurned} kcal</span>
          </div>    
          <div className="flex items-center gap-1.5">
            <Star size={16} strokeWidth={1.8} />
            <span>{filLog.rating}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FitLogCard;
