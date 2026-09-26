import { IfitLogType } from "@/type/type";
import FitLogCard from "../FitLogCard";

const getFitLogData = async (): Promise<IfitLogType[]> => {
  const res = await fetch("https://api.abcz.workers.dev/api/fitlog");

  if (!res.ok) {
    throw new Error("Failed to fetch books data");
  }

  return res.json();
};

const FitLogData = async () => {
  const fil: IfitLogType[] = await getFitLogData();

  return (
    <section className="container mx-auto px-4 md:px-0">
      <div className="mb-8">
        <h1 className="text-center text-3xl font-bold leading-9.5 text-[#FFFFFF] md:text-left">
          THE LIBRARY
        </h1>

        <p className="text-center text-[14px] leading-5 text-[#9CA3AF] md:text-left">
          Twelve lifts covering every major muscle group.
        </p>
      </div>

      <div className="mb-16 grid grid-cols-1 gap-6 md:grid-cols-3">
        {fil.map((filLog) => (
          <FitLogCard key={filLog.id} filLog={filLog} />
        ))}
      </div>
    </section>
  );
};

export default FitLogData;