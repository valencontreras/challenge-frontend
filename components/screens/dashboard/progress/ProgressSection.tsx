import * as React from "react";
import { CompetenciesProgress, MyJourneyworkers, SkillsProgress } from "./";

export const ProgressSection = () => {
  return (
    <div className="flex flex-col md:flex-row gap-6 max-h-[460px] mt-[30px]">
      <CompetenciesProgress />
      <SkillsProgress />
      <MyJourneyworkers />
    </div>
  );
};
