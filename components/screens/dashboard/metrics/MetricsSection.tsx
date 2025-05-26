import * as React from "react";
import { CardColors, OJTSection, RTISection, WaveProgressionSection } from "./";
import Icons from "const/icons";
import { DashboardData } from "interfaces";

export const MetricsSection = ({ data }: { data: DashboardData }) => {
  return (
    <div className="flex flex-col md:flex-row gap-6 mt-10 lg:mt-[76px] w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-full">
        <CardColors
          backgroundColor="#F28627"
          icon={Icons.seedling}
          iconSize="w-[119px] h-[104px]"
          label="Skills Completed"
          missing={data.skillsCompletedData.missing}
          total={data.skillsCompletedData.value}
        />
        <CardColors
          backgroundColor="#FFC529"
          icon={Icons.brain}
          iconSize="w-[106px] h-[97px]"
          label="Competencies Completed"
          missing={data.competenciesCompletedData.missing}
          total={data.competenciesCompletedData.value}
        />
        <OJTSection data={data.ojtData} />
        <RTISection data={data.rtiData} />
      </div>
      <div className="w-full lg:w-[50%]">
        <WaveProgressionSection data={data.waveProgressionData} />
      </div>
    </div>
  );
};
