import * as React from "react";
import { HorizontalSlider, CourseStatusCard, Typography } from "components";
import { CourseStatus } from "interfaces";

export const CourseStatusSection = ({ data }: { data: CourseStatus[] }) => {
  return (
    <div className="mt-10">
      <Typography type="subtitle-1" className="text-black font-bold mb-3">
        Courses Status
      </Typography>
      <HorizontalSlider>
        {data.map((course, index) => (
          <CourseStatusCard key={index} data={course} />
        ))}
      </HorizontalSlider>
    </div>
  );
};
