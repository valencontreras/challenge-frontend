import clsx from "clsx";
import { Typography } from "components/common";
import * as React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  onClick?: () => void;
}

export const Card: React.FC<CardProps> = ({
  children,
  className,
  title,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className={clsx(
        "border border-gray-10 bg-white rounded-[9px] px-6 py-9",
        className
      )}
    >
      {title && (
        <Typography
          type="custom-p"
          className="text-[17px] text-primary mb-[22px] font-extrabold"
        >
          {title}
        </Typography>
      )}
      {children}
    </div>
  );
};
