import AddToPlan from "@/components/FitLog_Details_Button/AddToButton";
import SaveForLater from "@/components/FitLog_Details_Button/SaveButton";
import { IfitLogType } from "@/type/type";
import {  Bookmark } from "lucide-react";
import Image from "next/image";
import { notFound } from "next/navigation";

interface IFitLogReviewPage {
  params: Promise<{
    fitId: number;
  }>;
}

const getFitLogData = async (): Promise<IfitLogType[]> => {
  const res = await fetch("https://api.abcz.workers.dev/api/fitlog");

  if (!res.ok) {
    throw new Error("Failed to fetch FitLog data");
  }

  return res.json();
};

const FitLogReviewPage = async ({ params }: IFitLogReviewPage) => {
  const { fitId } = await params;

  const fitLogs = await getFitLogData();

  const fitLog = fitLogs.find((item: IfitLogType) => Number(item.id) === Number(fitId));

  if (!fitLog) {
    notFound();
  }

  return (
    <section className="container mx-auto mb-14 rounded-2xl bg-[#080A0E]">
      <div className="flex flex-col overflow-hidden rounded-2xl bg-[#0D0F13] lg:flex-row">
        <div className="w-full lg:w-1/2">
          <Image
            src={fitLog.image}
            alt={fitLog.name}
            width={740}
            height={700}
            className="h-full w-full rounded-2xl object-cover"
            priority
          />
        </div>
        <div className="w-full px-6 py-8 md:px-8 lg:w-1/2 lg:px-10 lg:py-6">
          <h1 className="text-3xl font-extrabold uppercase leading-tight tracking-wide text-white md:text-4xl">
            {fitLog.name}
          </h1>

          <p className="mt-3 text-sm leading-6 text-[#9CA3AF]">
            {fitLog.description}
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {fitLog.muscleGroups.map((muscle) => (
              <span
                key={muscle}
                className="rounded-full bg-[#B7F000] px-3 py-1 text-xs font-bold text-black"
              >
                {muscle}
              </span>
            ))}
          </div>

          <div className="mt-6 overflow-hidden rounded-xl border border-[#252A33] bg-[#15181E]">
            <div className="flex items-center justify-between border-b border-[#252A33] px-5 py-4">
              <span className="text-xs font-bold uppercase text-[#8C929D]">
                Equipment
              </span>
              <span className="text-sm text-white">{fitLog.equipment}</span>
            </div>

            <div className="flex items-center justify-between border-b border-[#252A33] px-5 py-4">
              <span className="text-xs font-bold uppercase text-[#8C929D]">
                Difficulty
              </span>
              <span className="text-sm text-white">{fitLog.difficulty}</span>
            </div>

            <div className="flex items-center justify-between border-b border-[#252A33] px-5 py-4">
              <span className="text-xs font-bold uppercase text-[#8C929D]">
                Sets
              </span>
              <span className="text-sm text-white">{fitLog.sets}</span>
            </div>

            <div className="flex items-center justify-between border-b border-[#252A33] px-5 py-4">
              <span className="text-xs font-bold uppercase text-[#8C929D]">
                Reps
              </span>
              <span className="text-sm text-white">{fitLog.reps}</span>
            </div>

            <div className="flex items-center justify-between border-b border-[#252A33] px-5 py-4">
              <span className="text-xs font-bold uppercase text-[#8C929D]">
                Duration
              </span>
              <span className="text-sm text-white">{fitLog.duration} min</span>
            </div>

            <div className="flex items-center justify-between border-b border-[#252A33] px-5 py-4">
              <span className="text-xs font-bold uppercase text-[#8C929D]">
                Calories
              </span>
              <span className="text-sm text-white">
                {fitLog.caloriesBurned} kcal
              </span>
            </div>

            <div className="flex items-center justify-between px-5 py-4">
              <span className="text-xs font-bold uppercase text-[#8C929D]">
                Rating
              </span>
              <span className="text-sm text-white">{fitLog.rating}</span>
            </div>
          </div>

          <div className="mt-7">
            <h2 className="text-sm font-extrabold uppercase tracking-wide text-white">
              Instructions
            </h2>

            <ol className="mt-4 space-y-3">
              {fitLog.instructions.map((instruction, index) => (
                <li
                  key={index}
                  className="flex gap-3 text-sm leading-6 text-[#B4B8C0]"
                >
                  <span className="shrink-0 text-[#8C929D]">{index + 1}.</span>

                  <span>{instruction}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            
            <AddToPlan fitLog={fitLog} />

            <SaveForLater fitLog={fitLog} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FitLogReviewPage;
