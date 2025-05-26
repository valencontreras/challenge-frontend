import * as React from "react";
import clsx from "clsx";
import { Icon, Typography } from "components";

interface CardColorsProps {
  total: number;
  missing: number;
  label: string;
  icon: string;
  iconSize: string;
  backgroundColor: string;
}
export const CardColors: React.FC<CardColorsProps> = ({
  missing,
  total,
  label,
  icon,
  iconSize,
  backgroundColor,
}) => {
  return (
    <div
      className={clsx(
        "flex justify-between px-7 py-8 border border-gray-10 rounded-[9px]"
      )}
      style={{ backgroundColor: backgroundColor }}
    >
      <div>
        <Typography type="title" className="text-white">
          {total}
        </Typography>
        <Typography type="subtitle-2" className="text-white">
          {label}
        </Typography>
        <Typography type="subtitle-2" className="text-white">
          {missing} missing
        </Typography>
      </div>
      <Icon src={icon} className={iconSize} />
    </div>
  );
};
