import * as React from "react";
import { Typography } from "components";

interface StatusLabelProps {
  label: string;
  textColor: string;
  bgColor: string;
}

export const StatusLabel: React.FC<StatusLabelProps> = ({
  bgColor,
  label,
  textColor,
}) => {
  return (
    <span
      className="rounded-[3px] py-1.5 px-3"
      style={{ backgroundColor: bgColor }}
    >
      <Typography type="caption" className={`text-${textColor} font-bold`}>
        {label}
      </Typography>
    </span>
  );
};
