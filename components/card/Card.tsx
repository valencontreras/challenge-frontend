import clsx from "clsx";
import * as React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ children, className }) => {
  return (
    <div
      className={clsx(
        "border border-gray-10 bg-white rounded-[9px]",
        className
      )}
    >
      {children}
    </div>
  );
};
