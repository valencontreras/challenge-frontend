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

export default function Dashboard() {
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

      <div className="relative z-10 pt-[100px]">
        <div className="px-10 2xl:px-20">
          <div className="flex justify-between gap-2">
            <div>
              <Typography type="title" className="text-white">
                Welcome, Kayla
              </Typography>
              <Typography type="subtitle-1" className="text-white">
                Track your progress and reach your goal!
              </Typography>
            </div>
            <div className="flex items-center gap-10 2xl:gap-20">
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
              <ApprenticeshipInfoCard />
            </div>
          </div>

          {/* Metrics */}
          <MetricsSection />
          <ProgressSection />
        </div>
        <div className="pl-10 2xl:pl-20">
          {/* Course Status */}
          <CourseStatusSection />
        </div>
      </div>
    </div>
  );
}
