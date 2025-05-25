import * as React from "react";
import { CardColors } from "./CardsColors";
import Icons from "../../../const/icons";
import { Card } from "../../card";

export const MetricsSection = () => {
  return (
    <div className="flex gap-6 w-full mt-[76px]">
      <div className="flex flex-col gap-6">
        <CardColors
          backgroundColor="secondary"
          icon={Icons.seedling}
          iconSize="w-[119px] h-[104px]"
          label="Skills Completed"
          missing={20}
          total={40}
        />
        <Card className="h-[289px]">
          <p>Chart</p>
        </Card>
      </div>

      <div className="flex flex-col gap-6">
        <CardColors
          backgroundColor="yellow"
          icon={Icons.brain}
          iconSize="w-[106px] h-[97px]"
          label="Competencies Completed"
          missing={20}
          total={40}
        />
        <Card className="h-[289px]">
          <p>Chart</p>
        </Card>
      </div>

      <Card className="w-full max-w-[696px]">
        <p>Chart</p>
      </Card>
    </div>
  );
};
