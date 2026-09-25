"use client";

import { useContext, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { FitLogContext } from "@/context/FitLogContext";

const MyPlanPage = () => {
  const context = useContext(FitLogContext);

  const [activeTab, setActiveTab] = useState("plan");

  if (!context) {
    return null;
  }

  const { plan, saved } = context;

  const currentData = activeTab === "plan" ? plan : saved;

  return (
    <section className="container mx-auto mb-14 px-4 py-10">
      {/* Heading */}

      <h1 className="text-4xl font-bold text-white">MY PLAN</h1>

      <p className="mt-2 text-sm text-[#9CA3AF]">
        Cap of five lifts for today. Finish them, then load more.
      </p>

      {/* Stats */}

      <div className="mt-6 grid grid-cols-1 rounded-2xl border border-[#252A33] bg-[#15181E] md:grid-cols-3">
        {/* Exercises */}

        <div className="border-b border-[#252A33] p-6 md:border-b-0 md:border-r">
          <p className="text-sm text-[#8C929D]">Exercises</p>

          <p className="mt-1 text-4xl font-bold text-[#B7F000]">
            {plan.length}
          </p>
        </div>

        {/* Minutes */}

        <div className="border-b border-[#252A33] p-6 md:border-b-0 md:border-r">
          <p className="text-sm text-[#8C929D]">Minutes</p>

          <p className="mt-1 text-4xl font-bold text-white">
            {plan.reduce((total, item) => total + Number(item.duration), 0)}
          </p>
        </div>

        {/* Calories */}

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

      {/* Tabs */}

      <div className="mt-7 flex items-center justify-between">
        <div className="flex rounded-lg border border-[#252A33] bg-[#15181E] p-1">
          {/* Today's Plan */}

          <button
            onClick={() => setActiveTab("plan")}
            className={`rounded-md px-5 py-2 text-sm ${
              activeTab === "plan"
                ? "bg-[#252A33] text-white"
                : "text-[#8C929D]"
            }`}
          >
            Today&apos;s Plan
          </button>

          {/* Saved */}

          <button
            onClick={() => setActiveTab("saved")}
            className={`rounded-md px-5 py-2 text-sm ${
              activeTab === "saved"
                ? "bg-[#252A33] text-white"
                : "text-[#8C929D]"
            }`}
          >
            Saved
          </button>
        </div>
      </div>

      {/* Cards */}

      <div className="mt-5 space-y-4">
        {currentData.length === 0 ? (
          <div className="flex min-h-62.5 flex-col items-center justify-center rounded-xl border border-dashed border-[#252A33]">
            <h2 className="text-xl font-bold text-white">NOTHING HERE YET</h2>

            <p className="mt-2 text-sm text-[#8C929D]">
              Browse the library and add a lift to get today moving.
            </p>

            <Link
              href="/fitLog"
              className="mt-5 rounded-lg bg-[#B7F000] px-6 py-3 text-sm font-semibold text-black"
            >
              Go to workouts
            </Link>
          </div>
        ) : (
          currentData.map((fitLog) => (
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
                className="h-20 w-30 rounded-lg object-cover"
              />

              {/* Information */}

              <div className="flex-1">
                <h2 className="text-lg font-bold text-white">{fitLog.name}</h2>

                <p className="mt-1 text-sm text-[#8C929D]">
                  {fitLog.equipment}
                </p>

                <div className="mt-2 flex gap-4 text-xs text-[#B4B8C0]">
                  <span>◷ {fitLog.duration} min</span>

                  <span>🔥 {fitLog.caloriesBurned} kcal</span>

                  <span>⭐ {fitLog.rating}</span>
                </div>
              </div>

              {/* View Details */}

              <Link
                href={`/fitLog/${fitLog.id}`}
                className="rounded-lg border border-[#343A45] px-5 py-2 text-center text-sm text-white hover:bg-[#20242B]"
              >
                View Details
              </Link>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default MyPlanPage;
