import * as React from "react";
import { Navbar } from "../navbar";
import { Sidebar } from "../sidebar";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <main className="bg-background min-h-screen flex flex-col">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div className="mt-24 ml-[138px] w-full h-full min-h-screen px-20">
          {children}
        </div>
      </div>
    </main>
  );
};
