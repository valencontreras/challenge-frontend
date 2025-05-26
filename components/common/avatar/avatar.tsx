import * as React from "react";
import clsx from "clsx";
import Icons from "const/icons";
import Image from "next/image";

type AvatarProps = {
  photoUrl: string;
  size?: "small" | "medium" | "large";
  className?: string;
  withRing?: boolean;
};

export const Avatar: React.FC<AvatarProps> = ({
  photoUrl,
  size,
  className,
  withRing,
}) => {
  return (
    <div
      className={clsx(
        "rounded-full block relative",
        { "ring-2 ring-secondary": withRing },
        { "w-8 h-8": size === "small" },
        { "w-12 h-12": size === "medium" },
        { "w-16 h-16": size === "large" },
        className
      )}
    >
      <Image
        src={photoUrl || Icons.avatar}
        alt="avatar"
        fill
        className="object-cover w-full h-full rounded-full"
      />
    </div>
  );
};
