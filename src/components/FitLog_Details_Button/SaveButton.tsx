"use client";

import { Bookmark } from "lucide-react";
import { useContext } from "react";

import { FitLogContext } from "@/context/FitLogContext";
import { IfitLogType } from "@/type/type";

interface SaveForLaterProps {
  fitLog: IfitLogType;
}

const SaveForLater = ({ fitLog }: SaveForLaterProps) => {
  const context = useContext(FitLogContext);

  if (!context) {
    return null;
  }

  const { saved, setSaved } = context;

  const handleSave = () => {
    setSaved([...saved, fitLog]);
  };

  return (
    <button
      onClick={handleSave}
      className="flex cursor-pointer items-center justify-center gap-2 rounded-lg border border-[#343A45] px-5 py-3 text-sm font-medium text-white transition duration-300 hover:bg-[#171A20]"
    >
      <Bookmark size={16} />

      Save for later
    </button>
  );
};

export default SaveForLater;