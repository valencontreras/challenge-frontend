import Image from "next/image";
import * as React from "react";
import { Avatar, Icon, Typography } from "components/common";
import Icons from "const/icons";
import Logos from "const/logos";

export const Sidebar = () => {
  return (
    <aside className="h-screen w-[138px] bg-white border border-gray-20 flex-col justify-start z-20 pt-12 hidden md:flex">
      <button
        type="button"
        className="cursor-pointer  hover:opacity-60 hover:transition-opacity hover:duration-300"
      >
        <SidebarItem label="Logout">
          <Image alt="logo" src={Logos.logo} width={56} height={58} />
        </SidebarItem>
      </button>

      <div className="space-y-20 mt-[150px]">
        <SidebarItem label="Apprentice">
          <Avatar withRing photoUrl={Icons.avatar} size="medium" />
        </SidebarItem>
        <SidebarItem label="Notifications">
          <NotificationOption />
        </SidebarItem>
      </div>
    </aside>
  );
};

interface SidebarItemProps {
  children: React.ReactNode;
  label?: string;
}

export const SidebarItem: React.FC<SidebarItemProps> = ({
  children,
  label,
}) => {
  return (
    <div className="flex flex-col items-center justify-center hover:opacity-60 cursor-pointer hover:transition-opacity hover:duration-300">
      {children}
      {label && (
        <Typography type="custom-p" className="text-[15px] text-gray-30 mt-2">
          {label}
        </Typography>
      )}
    </div>
  );
};

export const NotificationOption = () => {
  return (
    <div className="bg-secondary rounded-full size-[42px] py-2 px-1.5 relative">
      <Icon src={Icons.bell} />
      <span className="bg-red absolute rounded-full size-3 right-0 top-0 z-10" />
    </div>
  );
};
