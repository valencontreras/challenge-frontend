import { Icon, Typography } from "components/common";
import Icons from "const/icons";
import * as React from "react";

interface StarLabelProps {
  title: string;
  subtitle: string;
  starFilled: boolean;
}

export const StarLabel: React.FC<StarLabelProps> = ({
  starFilled,
  subtitle,
  title,
}) => {
  return (
    <div className="flex items-center gap-x-2.5">
      <Icon
        src={starFilled ? Icons.starFilled : Icons.star}
        className="size-4"
      />
      <div>
        <Typography type="body-2" className="text-primary font-bold">
          {title}
        </Typography>
        <Typography
          type="body-2"
          className="text-primary 2xl:whitespace-nowrap"
        >
          {subtitle}
        </Typography>
      </div>
    </div>
  );
};
