"use client";

import { CalendarPlus } from "lucide-react";
import { useContext } from "react";

import { FitLogContext } from "@/context/FitLogContext";
import { IfitLogType } from "@/type/type";

interface AddToPlanProps {
  fitLog: IfitLogType;
}

const AddToPlan = ({ fitLog }: AddToPlanProps) => {
  const context = useContext(FitLogContext);

  if (!context) {
    return null;
  }

  const { plan, setPlan } = context;

  const handleAddPlan = () => {
    setPlan([...plan, fitLog]);
  };

  return (
    <button
      onClick={handleAddPlan}
      className="flex cursor-pointer items-center justify-center gap-2 rounded-lg bg-[#B7F000] px-5 py-3 text-sm font-semibold text-black transition duration-300 hover:bg-[#A8DF00]"
    >
      <CalendarPlus size={16} />

      Add to today&apos;s plan
    </button>
  );
};

export default AddToPlan;