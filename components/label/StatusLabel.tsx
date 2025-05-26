import * as React from "react";
import { Typography } from "components";

interface StatusLabelProps {
  label: string;
  textColor: string;
  bgColor: string;
}

/**
 * The StatusLabel component in TypeScript React renders a styled label with specified background
 * color, text color, and text content.
 * @param  - - `bgColor`: Background color for the status label
 * @returns The `StatusLabel` component is being returned, which is a functional component in React. It
 * renders a `<span>` element with a background color specified by the `bgColor` prop and a text color
 * specified by the `textColor` prop. Inside the `<span>`, it renders a `<Typography>` component with
 * the `label` prop as its content.
 */
export const StatusLabel: React.FC<StatusLabelProps> = ({
  bgColor,
  label,
  textColor,
}) => {
  return (
    <span
      className="rounded-[3px] py-1.5 px-3"
      style={{ backgroundColor: bgColor }}
    >
      <Typography type="caption" className={`text-${textColor} font-bold`}>
        {label}
      </Typography>
    </span>
  );
};
