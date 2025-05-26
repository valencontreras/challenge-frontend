import * as React from "react";
import { Icon, Typography, StatusLabel, Card } from "components";
import Icons from "const/icons";

export const CourseStatusCard = () => {
  return (
    <Card className="min-w-[500px]">
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
            Computer and Information Sciences
          </Typography>
        </div>

        <div className="flex items-center justify-between mt-[30px]">
          <div>
            <Typography type="body-1" className="text-gray-50">
              Course Session
            </Typography>
            <Typography type="body-2" className="text-primary font-bold">
              Session B
            </Typography>
          </div>

          <div>
            <Typography type="body-1" className="text-gray-50">
              Start Date & End Date
            </Typography>
            <div className="flex items-center gap-2">
              <Icon src={Icons.calendar} className="!size-4" />
              <Typography type="body-2" className="text-primary font-bold">
                12/31/2022
              </Typography>
              <div className="w-5 h-[1px] bg-gray-60" />
              <Typography type="body-2" className="text-primary font-bold">
                02/17/2023
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};
