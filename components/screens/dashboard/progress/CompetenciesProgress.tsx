import * as React from "react";
import { Card } from "components/card";
import { ProgressCard } from "./ProgressCard";
import { useGetData } from "hooks/useGetData";

export const CompetenciesProgress = () => {
  const { data } = useGetData();

  return (
    <Card className="w-[40%]" title="COMPETENCIES PROGRESS">
      <ProgressCard
        header={["COMPETENCIES", "PROGRESS"]}
        data={data.competenciesProgressData}
      />
    </Card>
  );
};
