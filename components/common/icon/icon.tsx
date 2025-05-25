import clsx from "clsx";
import * as React from "react";
import SVG from "react-inlinesvg";
import styles from "./icon.module.scss";

export interface IconProps {
  src: string;
  className?: string;
  pointer?: boolean;

  // Normal fill
  fillPath?: boolean;
  fillLine?: boolean;
  fillCircle?: boolean;
  fillRect?: boolean;

  // Fill Gray
  fillGray?: boolean;
  fillGrayCircle?: boolean;
  fillGrayPath?: boolean;
  fillGrayLine?: boolean;

  // Fill white
  fillWhitePath?: boolean;
  fillWhiteRect?: boolean;
  fillWhiteCircle?: boolean;
  fillWhiteLine?: boolean;
  fillWhitePathStroke?: boolean;

  onClick?: React.MouseEventHandler<SVGElement> | undefined;
}

export const Icon: React.FC<IconProps> = ({
  src,
  className,
  pointer = false,

  // Normal fill
  fillPath = false,
  fillLine = false,
  fillRect = false,
  fillCircle = false,

  // Fill Gray
  fillGray = false,
  fillGrayCircle = false,
  fillGrayPath = false,
  fillGrayLine = false,

  // Fill white
  fillWhitePath = false,
  fillWhiteRect = false,
  fillWhiteCircle = false,
  fillWhiteLine = false,
  fillWhitePathStroke = false,

  onClick,
}) => {
  return (
    <SVG
      onClick={onClick}
      src={src}
      className={clsx(
        className,
        { "cursor-pointer": pointer },
        // Normal fill
        [fillPath && styles.svgFillPath],
        [fillCircle && styles.svgFillCircle],
        [fillLine && styles.svgFillLine],
        [fillRect && styles.svgFillRectfillRect],

        // Fill Gray
        [fillGray && styles.svgFillGray],
        [fillGrayCircle && styles.svgFillGrayCircle],
        [fillGrayPath && styles.svgFillGrayPath],
        [fillGrayLine && styles.svgFillGrayLine],

        // Fill white
        [fillWhitePath && styles.svgFillWhitePath],
        [fillWhiteRect && styles.svgFillWhiteRect],
        [fillWhiteCircle && styles.svgFillWhiteCircle],
        [fillWhiteLine && styles.svgFillWhiteLine],
        [fillWhitePathStroke && styles.svgFillWhitePathStroke]
      )}
    />
  );
};
