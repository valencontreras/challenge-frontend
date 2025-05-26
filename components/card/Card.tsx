import clsx from "clsx";
import { Typography } from "components/common";
import * as React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  onClick?: () => void;
}

/**
 * The Card component is a React functional component that renders a styled card with optional title
 *  children and onClick.
 * @param  - `children`: This is a special prop in React that represents the content between the
 * opening and closing tags of a component. It can include any valid React nodes such as text,
 * elements, or other components. title is a string that represents the title of the card, and
 * `className`: This is an optional prop that allows you to pass additional CSS classes to the Card
 * @returns The `Card` component is being returned, which is a functional component in React. It
 * renders a `<div>` element with the specified className and onClick event handler. Inside the
 * `<div>`, it conditionally renders a `Typography` component if the `title` prop is provided, and then
 * renders the `children` prop.
 */
export const Card: React.FC<CardProps> = ({
  children,
  className,
  title,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className={clsx(
        "border border-gray-10 bg-white rounded-[9px] px-6 py-9",
        className
      )}
    >
      {title && (
        <Typography
          type="custom-p"
          className="text-[17px] text-primary mb-[22px] font-extrabold"
        >
          {title}
        </Typography>
      )}
      {children}
    </div>
  );
};
