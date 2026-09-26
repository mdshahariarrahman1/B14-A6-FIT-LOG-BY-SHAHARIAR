import FitLogCard from "@/components/FitLogCard";
import { IfitLogType } from "@/type/type";



const getFitLogData = async (): Promise<IfitLogType[]> => {
  const res = await fetch("https://api.abcz.workers.dev/api/fitlog");

  if (!res.ok) {
    throw new Error("Failed to fetch FitLog data");
  }

  return res.json();
};

const FitLogPage = async () => {
  const fitLogs: IfitLogType[] = await getFitLogData();

  return (
    <section className="container mx-auto px-4 py-10">
      <h1 className="mb-9 text-center text-4xl font-bold text-white">
        Workouts
      </h1>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {fitLogs.map((fitLog) => (
          <FitLogCard
            key={fitLog.id}
            filLog={fitLog}
          />
        ))}
      </div>
    </section>
  );
};

export default FitLogPage;