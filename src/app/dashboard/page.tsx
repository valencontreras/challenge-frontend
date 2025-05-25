import { MetricsSection, ProgressSection } from "../../../components";
import { Typography } from "../../../components/common/typography";

export default function Dashboard() {
  return (
    <div className="relative w-full h-full">
      {/* <div className="absolute bg-background text-white overflow-hidden w-full">
        <div className="clip-diagonal h-[60vh]"></div>
      </div> */}
      <div>
        <Typography type="title" className="text-white">
          Welcome, Kayla
        </Typography>
        <Typography type="subtitle-1" className="text-white">
          Track your progress and reach your goal!
        </Typography>
      </div>

      {/* Metrics */}
      <MetricsSection />
      <ProgressSection />
    </div>
  );
}
