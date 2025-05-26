import { StarLabel, Lengend, Card, PieChartComponent } from "components";
import { OJTData } from "interfaces";

export const OJTSection = ({ data }: { data: OJTData }) => {
  const lengend = [
    {
      description: "Review",
      value: data.review,
      color: "#B93021",
    },
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
    <Card title="OJT" className="relative">
      <div className="flex flex-col gap-y-4 h-5/6 justify-between">
        <div className="grid grid-cols-2 gap-1.5">
          <Lengend metricsArray={lengend} />
          <div className="absolute top-7 right-0">
            <PieChartComponent
              id="OJT"
              metricsArray={lengend}
              total={data.total}
            />
          </div>
        </div>
        <div className="flex items-center justify-between gap-x-5 2xl:gap-x-10">
          <StarLabel
            title={`${data.hours_completed} hours`}
            subtitle="Completed"
            starFilled={true}
          />
          <span className="w-[0.5px] h-[33px] bg-gray-80  shrink-0" />
          <StarLabel
            title={`${data.hours_missing} hours`}
            subtitle="Missing"
            starFilled={false}
          />
        </div>
      </div>
    </Card>
  );
};
