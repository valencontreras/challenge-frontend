/* eslint-disable @next/next/no-img-element */
import * as React from "react";
import clsx from "clsx";
import Icons from "../../../const/icons";

type AvatarProps = {
  photoUrl: string;
  size?: "small" | "medium" | "large";
  className?: string;
};

export const Avatar: React.FC<AvatarProps> = ({
  photoUrl,
  size,
  className,
}) => {
  return (
    <div
      className={clsx(
        "rounded-full ring-2 ring-secondary",
        { "w-8 h-8": size === "small" },
        { "w-12 h-12": size === "medium" },
        { "w-16 h-16": size === "large" },
        className
      )}
    >
      <img
        src={photoUrl || Icons.avatar}
        alt="avatar"
        className="object-cover w-full h-full rounded-full"
      />
    </div>
  );
};
