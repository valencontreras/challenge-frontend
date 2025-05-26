"use client";
import * as React from "react";
import { Navbar, Sidebar, SidebarMobile } from "../";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [showSidebar, setShowSidebar] = React.useState(false);
  return (
    <div className="bg-background flex h-screen">
      <Sidebar />
      <SidebarMobile showSidebar={showSidebar} />
      <div className="flex flex-col w-full relative overflow-x-hidden">
        <Navbar setShowSidebar={setShowSidebar} showSidebar={showSidebar} />
        <div className="w-full overflow-y-auto pb-14">
          <main>{children}</main>
        </div>
      </div>
    </div>
  );
};
