"use client";

import * as React from "react";
import Link from "next/link";
import { Avatar, Icon, NotificationOption, Typography } from "components";
import clsx from "clsx";
import Image from "next/image";
import Icons from "const/icons";
import { usePathname } from "next/navigation";
import { sections } from "const";

interface NavbarProps {
  showSidebar?: boolean;
  setShowSidebar?: (show: boolean) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  setShowSidebar,
  showSidebar,
}) => {
  const pathname = usePathname();

  const getIsCurrentPath = (path: string) => {
    return pathname === path;
  };

  return (
    <header className="bg-white w-full">
      <div className="flex items-center w-full justify-between py-[27px] px-10">
        {/* Menu Icon (Show sidebar only mobile screen) */}
        <button
          type="button"
          className="md:hidden"
          onClick={() => setShowSidebar && setShowSidebar(!showSidebar)}
        >
          {showSidebar ? (
            <Icon src={Icons.x} className="size-8" />
          ) : (
            <Icon src={Icons.bars3} className="size-8" />
          )}
        </button>
        <nav className="items-center w-full gap-20 hidden md:flex">
          {sections.map((section) => (
            <Link href={section.href} key={section.name}>
              <Typography
                type="body-1"
                className={clsx(
                  "font-extrabold hover:opacity-60",
                  getIsCurrentPath(section.href)
                    ? "text-secondary"
                    : "text-typography-primary"
                )}
              >
                {section.name}
              </Typography>
            </Link>
          ))}
        </nav>
        {/* Hide in mobile */}
        <div className="hidden md:block">
          <Image alt="at&t logo" src={Icons.attLogo} width={114} height={47} />
        </div>
        <div className="flex gap-2 items-center md:hidden">
          {/* Show in mobile */}
          <NotificationOption />
          <Avatar
            withRing
            photoUrl={Icons.avatar}
            size="small"
            className="!size-[42px]"
          />
        </div>
      </div>
    </header>
  );
};
