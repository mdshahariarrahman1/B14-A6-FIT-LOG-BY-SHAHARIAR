"use client";

import { IfitLogType } from "@/type/type";
import { ReactNode, useState, createContext } from "react";

interface FitLogContextType {
  plan: IfitLogType[];
  setPlan: React.Dispatch<React.SetStateAction<IfitLogType[]>>;

  saved: IfitLogType[];
  setSaved: React.Dispatch<React.SetStateAction<IfitLogType[]>>;
}

export const FitLogContext = createContext<FitLogContextType | null>(null);

const FitLogProvider = ({ children }: { children: ReactNode })=> {
  const [plan, setPlan] = useState<IfitLogType[]>([]);
  const [saved, setSaved] = useState<IfitLogType[]>([]);

  const shareData = {
    plan,
    setPlan,
    saved,
    setSaved,
  };

  return (
    <FitLogContext.Provider value={shareData}>
      {children}
    </FitLogContext.Provider>
  );
}

export default FitLogProvider;