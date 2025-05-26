import * as React from "react";
import clsx from "clsx";

export interface TypographyProps {
  id?: string;
  // Custom tags
  type:
    | "custom-p"
    | "custom-h1"
    | "custom-h2"
    | "custom-h3"
    | "custom-h4"

    // Design styles (Adapt to your own styles)
    | "title"
    | "subtitle-1"
    | "subtitle-2"
    | "subtitle-3"
    | "body-1"
    | "body-2"
    | "caption"
    | "overline";

  text?: string;
  className?: string;
  children?: React.ReactNode;
}

export const Typography: React.FC<TypographyProps> = ({
  id,
  type,
  text = "",
  className = "",
  children,
}) => {
  //              //
  //              //
  // Custom Tags  //
  if (type === "custom-p")
    return (
      <p id={id} className={clsx(className)}>
        {children || text}
      </p>
    );
  if (type === "custom-h1")
    return (
      <h1 id={id} className={clsx(className)}>
        {children || text}
      </h1>
    );
  if (type === "custom-h2")
    return (
      <h2 id={id} className={clsx(className)}>
        {children || text}
      </h2>
    );
  if (type === "custom-h3")
    return (
      <h3 id={id} className={clsx(className)}>
        {children || text}
      </h3>
    );
  if (type === "custom-h4")
    return (
      <h4 id={id} className={clsx(className)}>
        {children || text}
      </h4>
    );

  /////////////////////////
  //                    //
  // Design Text Styles  //

  if (type === "title")
    return (
      <h1 id={id} className={clsx("text-3xl xl:text-[45px]", className)}>
        {children || text}
      </h1>
    );

  if (type === "subtitle-1")
    return (
      <h2 id={id} className={clsx("text-lg xl:text-[22px]", className)}>
        {children || text}
      </h2>
    );

  if (type === "subtitle-2")
    return (
      <h2 id={id} className={clsx("text-base xl:text-xl", className)}>
        {children || text}
      </h2>
    );

  if (type === "subtitle-3")
    return (
      <h3 id={id} className={clsx("text-sm xl:text-lg", className)}>
        {children || text}
      </h3>
    );

  if (type === "body-1")
    return (
      <h2 id={id} className={clsx("text-base", className)}>
        {children || text}
      </h2>
    );

  if (type === "body-2")
    return (
      <h2 id={id} className={clsx("text-sm", className)}>
        {children || text}
      </h2>
    );

  if (type === "caption")
    return (
      <h2 id={id} className={clsx("text-[10px]", className)}>
        {children || text}
      </h2>
    );

  if (type === "overline")
    return (
      <h2
        id={id}
        className={clsx("font-medium text-[8px] leading-[10px]", className)}
      >
        {children || text}
      </h2>
    );

  return null;
};
