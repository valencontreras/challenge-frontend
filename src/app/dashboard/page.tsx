"use client";
import {
  ApprenticeshipInfoCard,
  Button,
  CourseStatusSection,
  MetricsSection,
  ProgressSection,
  Typography,
} from "components";
import Icons from "const/icons";
import { useGetData } from "hooks/useGetData";

export default function Dashboard() {
  const { data } = useGetData(); // Assuming useGetData fetches the necessary data for the dashboard
  return (
    <div className="relative w-full">
      {/* diagonal background  */}
      <svg
        className="absolute top-0 left-0 w-full h-[500px] pointer-events-none"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <polygon points="0,0 100,0 100,100 0,60" fill="#1d1a5e" />
      </svg>

      <div className="relative z-10 pt-[50px] lg:pt-[100px]">
        <div className="px-8 lg:px-10 2xl:px-20">
          <div className="flex flex-col lg:flex-row justify-between gap-2">
            <div>
              <Typography type="title" className="text-white">
                Welcome, {data.username}
              </Typography>
              <Typography type="subtitle-1" className="text-white">
                Track your progress and reach your goal!
              </Typography>
            </div>
            <div className="flex flex-col lg:flex-row lg:items-center gap-10 2xl:gap-20">
              <div className="flex items-center gap-x-5">
                <Button
                  decoration="fill"
                  label="LOG"
                  icon={Icons.plus}
                  iconLeft
                />
                <Button
                  decoration="not-fill"
                  label="SUPPORT"
                  icon={Icons.help}
                  iconLeft
                />
              </div>
              <ApprenticeshipInfoCard data={data} />
            </div>
          </div>

          {/* Metrics */}
          <MetricsSection data={data} />
          <ProgressSection data={data} />
        </div>
        <div className="pl-10 2xl:pl-20">
          {/* Course Status */}
          <CourseStatusSection data={data.courseStatusData} />
        </div>
      </div>
    </div>
  );
}
