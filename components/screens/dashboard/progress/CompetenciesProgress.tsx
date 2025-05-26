import * as React from "react";
import { Card } from "components/card";
import { ProgressCard } from "./ProgressCard";
import { MetricItem } from "interfaces";

export const CompetenciesProgress = ({ data }: { data: MetricItem[] }) => {
  return (
    <Card className="w-full xl:w-[40%]" title="COMPETENCIES PROGRESS">
      <div className="sm:max-h-80 xl:max-h-fit overflow-y-scroll xl:overflow-y-hidden pr-1">
        <ProgressCard header={["COMPETENCIES", "PROGRESS"]} data={data} />
      </div>
    </Card>
  );
};
