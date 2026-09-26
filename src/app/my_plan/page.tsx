"use client";

import { useContext, useState } from "react";

import Image from "next/image";

import Link from "next/link";

import { FitLogContext } from "@/context/FitLogContext";

import { Check, ChevronDown, X } from "lucide-react";

import { Bounce, toast } from "react-toastify";

type SortType = "duration" | "calories" | "rating";

const MyPlanPage = () => {
  const context = useContext(FitLogContext);

  const [sortBy, setSortBy] = useState<SortType>("duration");

  const [activeTab, setActiveTab] = useState("plan");

  if (!context) {
    return null;
  }

  const { plan, setPlan, saved, setSaved } = context;

  const handleRemove = (id: number) => {
    if (activeTab === "plan") {
      setPlan((prev) => prev.filter((item) => item.id !== id));
    } else {
      setSaved((prev) => prev.filter((item) => item.id !== id));
    }

    toast.warn(`${plan.map((iten) => iten.name)} Remove 🦄`, {
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

  const currentData = activeTab === "plan" ? plan : saved;

  const sortedData = [...currentData].sort((a, b) => {
    if (sortBy === "duration") {
      return Number(a.duration) - Number(b.duration);
    }

    if (sortBy === "calories") {
      return Number(b.caloriesBurned) - Number(a.caloriesBurned);
    }

    if (sortBy === "rating") {
      return Number(b.rating) - Number(a.rating);
    }

    return 0;
  });

  return (
    <section className="container mx-auto mb-14 px-4 py-10 md:px-0">
      <h1 className="text-4xl font-bold text-white">MY PLAN</h1>

      <p className="mt-2 text-sm text-[#9CA3AF]">
        Cap of five lifts for today. Finish them, then load more.
      </p>

      {/* Stats */}
      <div className="mt-6 grid grid-cols-1 rounded-2xl border border-[#252A33] bg-[#15181E] md:grid-cols-3">
        <div className="border-b border-[#252A33] p-6 md:border-r md:border-b-0">
          <p className="text-sm text-[#8C929D]">Exercises</p>

          <p className="mt-1 text-4xl font-bold text-[#B7F000]">
            {plan.length}
          </p>
        </div>

        <div className="border-b border-[#252A33] p-6 md:border-r md:border-b-0">
          <p className="text-sm text-[#8C929D]">Minutes</p>

          <p className="mt-1 text-4xl font-bold text-white">
            {plan.reduce((total, item) => total + Number(item.duration), 0)}
          </p>
        </div>

        <div className="p-6">
          <p className="text-sm text-[#8C929D]">Calories</p>

          <p className="mt-1 text-4xl font-bold text-white">
            {plan.reduce(
              (total, item) => total + Number(item.caloriesBurned),
              0,
            )}
          </p>
        </div>
      </div>

      {/* Tabs + Sort */}
      <div className="mt-7 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex w-fit rounded-lg border border-[#252A33] bg-[#15181E] p-1">
          <button
            onClick={() => setActiveTab("plan")}
            className={`cursor-pointer rounded-md px-5 py-2 text-sm ${
              activeTab === "plan"
                ? "bg-[#252A33] text-white"
                : "text-[#8C929D]"
            }`}
          >
            Today&apos;s Plan
          </button>

          <button
            onClick={() => setActiveTab("saved")}
            className={`cursor-pointer rounded-md px-5 py-2 text-sm ${
              activeTab === "saved"
                ? "bg-[#252A33] text-white"
                : "text-[#8C929D]"
            }`}
          >
            Saved
          </button>
        </div>

        {/* Sort */}
        <div className="flex items-center justify-between gap-2 md:justify-end">
          <p className="text-sm text-[#8C929D]">Sort By</p>

          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortType)}
              className="cursor-pointer appearance-none rounded-lg border border-[#252A33] bg-[#15181E] py-2 pl-4 pr-10 text-sm text-white outline-none"
            >
              <option value="duration">Duration</option>
              <option value="calories">Calories</option>
              <option value="rating">Rating</option>
            </select>

            <ChevronDown
              size={16}
              className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#8C929D]"
            />
          </div>
        </div>
      </div>

      {/* Data */}
      <div className="mt-5 space-y-4">
        {currentData.length === 0 ? (
          <div className="flex min-h-62.5 flex-col items-center justify-center rounded-xl border border-dashed border-[#252A33] px-4 text-center">
            <h2 className="text-xl font-bold text-white">NOTHING HERE YET</h2>

            <p className="mt-2 text-sm text-[#8C929D]">
              Browse the library and add a lift to get today moving.
            </p>

            <Link
              href="/fitlog"
              className="mt-5 rounded-lg bg-[#B7F000] px-6 py-3 text-sm font-semibold text-black"
            >
              Go to workouts
            </Link>
          </div>
        ) : (
          sortedData.map((fitLog) => (
            <div
              key={fitLog.id}
              className="flex flex-col gap-5 rounded-xl border border-[#252A33] bg-[#15181E] p-4 md:flex-row md:items-center"
            >
              {/* Image */}
              <Image
                src={fitLog.image}
                alt={fitLog.name}
                width={120}
                height={80}
                className="h-20 w-full rounded-lg object-cover md:w-30"
              />

              {/* Info */}
              <div className="flex-1">
                <h2 className="text-lg font-bold text-white">{fitLog.name}</h2>

                <p className="mt-1 text-sm text-[#8C929D]">
                  {fitLog.equipment}
                </p>

                <div className="mt-2 flex flex-wrap gap-4 text-xs text-[#B4B8C0]">
                  <span>◷ {fitLog.duration} min</span>

                  <span>🔥 {fitLog.caloriesBurned} kcal</span>

                  <span>⭐ {fitLog.rating}</span>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap items-center gap-2 md:flex-nowrap">
                <Link
                  href={`/fitlog/${fitLog.id}`}
                  className="flex items-center justify-center rounded-lg border border-[#343A45] px-5 py-2 text-center text-sm text-white hover:bg-[#20242B]"
                >
                  View Details
                </Link>

                <Link
                  href={`/fitlog/${fitLog.id}`}
                  className="flex items-center justify-center rounded-lg border border-[#B7F000] bg-[#B7F000] px-5 py-2 text-center text-sm text-[#000000]"
                >
                  <span className="pr-1">
                    <Check size={16} />
                  </span>
                  Mark as Done
                </Link>

                <button
                  onClick={() => handleRemove(fitLog.id)}
                  className="w-10 h-10 flex items-center justify-center rounded-xl border border-red-500/30 bg-[#111315] text-red-500 transition-all duration-200 hover:border-red-500/60 hover:bg-red-500/10 cursor-pointer"
                >
                  <X size={20} strokeWidth={2.5} />
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default MyPlanPage;
