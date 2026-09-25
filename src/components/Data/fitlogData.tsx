import { IfitLogType } from "@/type/type";
import FitLogCard from "../FitLogCard";


const getFitLogData = async (): Promise<IfitLogType[]> => {
  const res = await fetch("https://api.abcz.workers.dev/api/fitlog");

  if (!res.ok) {
    throw new Error('Failed to fetch books data');
  }

  return res.json();
};

const FitLogData = async() => {

    const fil: IfitLogType[] = await getFitLogData();

    return (
        <>
        
        <section className="container mx-auto">

        <div className="mb-8">
            <h1 className="text-[#FFFFFF] text-3xl font-bold leading-9.5">THE LIBRARY</h1>
            <p className="text-[#9CA3AF] text-[14px] leading-5">Twelve lifts covering every major muscle group.</p>
        </div>

        <div>
            {
                fil.map(filLog => <FitLogCard key={filLog.id} filLog={filLog} />)
            }
        </div>

        </section>
        
        </>
    );
};

export default FitLogData;