"use client";

import * as React from "react";
import { ROUTES } from "../../../lib";
import Link from "next/link";
import { Typography } from "../../common/typography";
import clsx from "clsx";
import Image from "next/image";
import Icons from "../../../const/icons";
import { usePathname } from "next/navigation";

export const Navbar = () => {
  const pathname = usePathname();

  const sections = [
    { name: "Dashboard", href: ROUTES.DASHBOARD },
    { name: "OJT", href: ROUTES.OJT },
    { name: "RTI", href: ROUTES.RTI },
    { name: "Settings", href: ROUTES.SETTINGS },
  ];

  const getIsCurrentPath = (path: string) => {
    return pathname === path;
  };

  return (
    <header className="bg-white py-[27px] px-10 flex items-center justify-between gap-10 fixed top-0 z-10 w-full pl-[120px]">
      <nav className="flex items-center w-full">
        {sections.map((section) => (
          <Link href={section.href} key={section.name} className="px-20">
            <Typography
              type="body-1"
              className={clsx(
                "font-bold",
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
      <Image alt="at&t logo" src={Icons.attLogo} width={114} height={47} />
    </header>
  );
};
