import * as React from "react";
import { Icon, Typography, StatusLabel, Card } from "components";
import Icons from "const/icons";
import { CourseStatus } from "interfaces";

export const CourseStatusCard = ({ data }: { data: CourseStatus }) => {
  return (
    <Card className="lg:min-w-[500px]">
      <div>
        <div className="flex justify-end">
          <StatusLabel
            bgColor="#DCDCF7"
            label="IN-PROGRESS"
            textColor="primary"
          />
        </div>
        <div>
          <Typography type="body-1" className="text-gray-50">
            Course
          </Typography>
          <Typography type="subtitle-3" className="text-primary font-bold">
            {data.name}
          </Typography>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-2 mt-[30px]">
          <div>
            <Typography type="body-1" className="text-gray-50">
              Course Session
            </Typography>
            <Typography type="body-2" className="text-primary font-bold">
              {data.section}
            </Typography>
          </div>

          <div>
            <Typography type="body-1" className="text-gray-50">
              Start Date & End Date
            </Typography>
            <div className="flex items-center gap-2">
              <Icon src={Icons.calendar} className="!size-4" />
              <Typography type="body-2" className="text-primary font-bold">
                {data.start_date}
              </Typography>
              <div className="w-5 h-[1px] bg-gray-60" />
              <Typography type="body-2" className="text-primary font-bold">
                {data.end_date}
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};
