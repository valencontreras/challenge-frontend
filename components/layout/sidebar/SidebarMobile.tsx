import * as React from "react";
import { Typography } from "components/common";
import Link from "next/link";
import { sections } from "const";
import clsx from "clsx";

export const SidebarMobile = ({ showSidebar }: { showSidebar: boolean }) => {
  const sectionsMobile = [...sections, { name: "Logout", href: "/" }];
  return (
    <div
      // className={clsx(
      //   "lg:hidden",
      //   "absolute h-screen w-full bg-white border border-gray-20 flex-col z-20 top-20 px-10",
      //   "-translate-x-full transition-transform", // desktop
      //   { "-translate-x-full": !showSidebar },
      //   { "translate-x-0": showSidebar }
      // )}
      className={clsx(
        "absolute h-screen w-full bg-white border border-gray-20 z-20 top-20 px-10",
        "flex flex-col transition-all duration-500 ease-in-out",
        showSidebar
          ? "translate-x-0 opacity-100"
          : "-translate-x-full opacity-0 pointer-events-none"
      )}
    >
      <nav className="flex flex-col space-y-10 pt-10">
        {sectionsMobile.map((section) => (
          <Link href={section.href} key={section.name}>
            <Typography
              type="body-1"
              className={clsx("font-extrabold text-typography-primary")}
            >
              {section.name}
            </Typography>
          </Link>
        ))}
      </nav>
    </div>
  );
};
