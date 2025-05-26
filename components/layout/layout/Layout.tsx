import * as React from "react";
import { Navbar, Sidebar } from "../";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="bg-background flex h-screen">
      <Sidebar />
      <div className="flex flex-col w-full relative overflow-x-hidden">
        <Navbar />
        <div className="w-full overflow-y-auto pb-14">
          <main>{children}</main>
        </div>
      </div>
    </div>
  );
};
