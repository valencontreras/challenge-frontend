import * as React from "react";
import { CompetenciesProgress, MyJourneyworkers, SkillsProgress } from "./";
import { DashboardData } from "interfaces";

export const ProgressSection = ({ data }: { data: DashboardData }) => {
  return (
    <div className="flex flex-col lg:flex-row gap-6 lg:max-h-[460px] mt-[30px]">
      <CompetenciesProgress data={data.competenciesProgressData} />
      <SkillsProgress data={data.skillsProgress} />
      <MyJourneyworkers data={data.journeyworkesData} />
    </div>
  );
};
