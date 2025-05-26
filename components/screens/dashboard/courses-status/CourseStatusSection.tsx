import * as React from "react";
import { HorizontalSlider, CourseStatusCard, Typography } from "components";

export const CourseStatusSection = () => {
  return (
    <div className="mt-10">
      <Typography type="subtitle-1" className="text-black font-bold mb-3">
        Courses Status
      </Typography>
      <HorizontalSlider>
        <CourseStatusCard />
        <CourseStatusCard />
        <CourseStatusCard />
      </HorizontalSlider>
    </div>
  );
};
