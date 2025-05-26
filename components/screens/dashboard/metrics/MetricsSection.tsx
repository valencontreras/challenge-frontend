import * as React from "react";
import { CardColors, OJTSection, RTISection, WaveProgressionSection } from "./";
import Icons from "const/icons";

export const MetricsSection = () => {
  return (
    <div className="flex flex-col md:flex-row gap-6 mt-[76px] w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-full">
        <CardColors
          backgroundColor="#F28627"
          icon={Icons.seedling}
          iconSize="w-[119px] h-[104px]"
          label="Skills Completed"
          missing={20}
          total={40}
        />
        <CardColors
          backgroundColor="#FFC529"
          icon={Icons.brain}
          iconSize="w-[106px] h-[97px]"
          label="Competencies Completed"
          missing={20}
          total={40}
        />
        <OJTSection />
        <RTISection />
      </div>
      <div className="w-[50%]">
        <WaveProgressionSection />
      </div>
    </div>
  );
};
