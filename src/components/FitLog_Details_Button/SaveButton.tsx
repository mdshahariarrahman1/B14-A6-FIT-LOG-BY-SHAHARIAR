"use client";

import { Bookmark } from "lucide-react";
import { useContext } from "react";

import { FitLogContext } from "@/context/FitLogContext";
import { IfitLogType } from "@/type/type";
import { Bounce, toast } from "react-toastify";

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
    const alreadySaved = saved.find((item) => item.id === fitLog.id);

    if (alreadySaved) {
      toast.error(`${fitLog.name} already saved 🦄`, {
        position: "top-right",
        autoClose: 5000,
        theme: "dark",
        transition: Bounce,
      });

      return;
    }

    setSaved([...saved, fitLog]);
    toast.success(`${fitLog.name}successfully saved 🦄`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
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
