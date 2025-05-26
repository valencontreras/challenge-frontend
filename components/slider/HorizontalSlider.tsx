import * as React from "react";

export const HorizontalSlider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);

  return (
    <div className="relative">
      {/* Slide container */}
      <div
        ref={containerRef}
        className="overflow-x-auto no-scrollbar flex gap-4 scroll-smooth pr-10 2xl:pr-20"
      >
        {children}
      </div>
    </div>
  );
};
