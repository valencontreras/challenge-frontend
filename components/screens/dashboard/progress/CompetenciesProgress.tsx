import * as React from "react";
import { Card } from "components/card";
import { ProgressCard } from "./ProgressCard";
import { MetricItem } from "interfaces";

export const CompetenciesProgress = ({ data }: { data: MetricItem[] }) => {
  return (
    <Card className="w-full lg:w-[40%]" title="COMPETENCIES PROGRESS">
      <ProgressCard header={["COMPETENCIES", "PROGRESS"]} data={data} />
    </Card>
  );
};
