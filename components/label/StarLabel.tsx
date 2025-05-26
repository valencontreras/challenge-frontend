import { Icon, Typography } from "components/common";
import Icons from "const/icons";
import * as React from "react";

interface StarLabelProps {
  title: string;
  subtitle: string;
  starFilled: boolean;
}

/**
 * The StarLabel component is a React functional component that displays a star icon along with a title
 * and subtitle in a flex layout.
 * @param  - The `StarLabel` component takes the following props:
 * @returns The `StarLabel` component is being returned, which is a functional component in React. It
 * renders a div element containing an Icon component and two Typography components. The Icon component
 * displays either a filled star or an empty star based on the `starFilled` prop. The Typography
 * components display the `title` and `subtitle` props respectively.
 */
export const StarLabel: React.FC<StarLabelProps> = ({
  starFilled,
  subtitle,
  title,
}) => {
  return (
    <div className="flex items-center gap-x-2.5">
      <Icon
        src={starFilled ? Icons.starFilled : Icons.star}
        className="size-4"
      />
      <div>
        <Typography type="body-2" className="text-primary font-bold">
          {title}
        </Typography>
        <Typography
          type="body-2"
          className="text-primary 2xl:whitespace-nowrap"
        >
          {subtitle}
        </Typography>
      </div>
    </div>
  );
};
