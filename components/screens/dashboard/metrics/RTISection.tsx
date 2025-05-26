import { Legend, Card, StarLabel, PieChartComponent } from "components";
import { RTIData } from "interfaces";

export const RTISection = ({ data }: { data: RTIData }) => {
  const lengend = [
    {
      description: "Pending",
      value: data.pending,
      color: "#DEDEDE",
    },
    {
      description: "Approved",
      value: data.approved,
      color: "#4E933D",
    },
  ];
  return (
    <Card title="RTI" className="relative">
      <div className="flex flex-col gap-y-4 h-5/6 justify-between">
        <div className="grid grid-cols-2 gap-1.5">
          <Legend metricsArray={lengend} />
          <div className="absolute top-7 right-0">
            <PieChartComponent
              id="RTI"
              metricsArray={lengend}
              total={data.total}
            />
          </div>
        </div>
        <div className="flex items-center justify-between gap-x-5 2xl:gap-x-10">
          <StarLabel
            title={data.completed_courses.toString()}
            subtitle="Completed Courses"
            starFilled={true}
          />
          <span className="w-[0.5px] h-[33px] bg-gray-80 shrink-0" />
          <StarLabel
            title={data.missing_courses.toString()}
            subtitle="Missing Courses"
            starFilled={false}
          />
        </div>
      </div>
    </Card>
  );
};
