"use client";

import * as React from "react";
import { ROUTES } from "lib";
import Link from "next/link";
import { Typography } from "components";
import clsx from "clsx";
import Image from "next/image";
import Icons from "const/icons";
import { usePathname } from "next/navigation";
import { Navigation } from "interfaces";

export const Navbar = () => {
  const pathname = usePathname();

  const sections: Navigation[] = [
    { name: "Dashboard", href: ROUTES.DASHBOARD },
    { name: "OJT", href: ROUTES.OJT },
    { name: "RTI", href: ROUTES.RTI },
    { name: "Settings", href: ROUTES.SETTINGS },
  ];

  const getIsCurrentPath = (path: string) => {
    return pathname === path;
  };

  return (
    <header className="bg-white w-full">
      <div className="flex items-center w-full justify-between py-[27px] px-10">
        <nav className="flex items-center w-full gap-20">
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
        <div>
          <Image alt="at&t logo" src={Icons.attLogo} width={114} height={47} />
        </div>
      </div>
    </header>
  );
};
