import * as React from "react";
import { Card } from "../../card";

export const ProgressSection = () => {
  return (
    <div className="flex gap-6 w-full min-h-[460px] mt-[30px]">
      <Card className="w-[662px]">
        <p>COMPETENCIES PROGRESS</p>
      </Card>
      <Card className="w-[473px]">
        <p>SKILLS PROGRESS</p>
      </Card>
      <Card className="w-[436px]">
        <p>MY JOURNEYWORKERS</p>
      </Card>
    </div>
  );
};
