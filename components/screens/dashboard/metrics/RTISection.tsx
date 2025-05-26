import { Lengend, Card, StarLabel, PieChartComponent } from "components";

export const RTISection = () => {
  const lengend = [
    {
      description: "Pending",
      value: 5,
      color: "#DEDEDE",
    },
    {
      description: "Approved",
      value: 5,
      color: "#4E933D",
    },
  ];
  return (
    <Card title="RTI" className="relative">
      <div className="flex flex-col gap-y-4 h-5/6 justify-between">
        <div className="grid grid-cols-2 gap-1.5">
          <Lengend metricsArray={lengend} />
          <div className="absolute top-7 right-0">
            <PieChartComponent id="RTI" metricsArray={lengend} total="65.00" />
          </div>
        </div>
        <div className="flex items-center justify-between gap-x-5 2xl:gap-x-10">
          <StarLabel
            title="40"
            subtitle="Completed Courses"
            starFilled={true}
          />
          <span className="w-[0.5px] h-[33px] bg-gray-80 shrink-0" />
          <StarLabel title="40" subtitle="Missing Courses" starFilled={false} />
        </div>
      </div>
    </Card>
  );
};
