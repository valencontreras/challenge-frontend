import * as React from "react";
import clsx from "clsx";
import Link from "next/link";
import { Icon } from "../icon";
import { Spinner } from "../spinner";

export interface ButtonProps {
  type?: "submit" | "reset" | "button";
  className?: string;
  disabled?: boolean;
  decoration?: "fill" | "not-fill" | "line-primary" | "none";
  size?: "extra-small" | "small" | "medium" | "large" | "full" | "fit";
  onClick?: () => void;
  label?: string;
  icon?: string;
  href?: string;
  loading?: boolean;
  iconLeft?: boolean;
  iconRight?: boolean;
}

/**
 * Primary UI component for user interaction
 */
const ButtonContent: React.FC<
  ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({
  type = "button",
  className,
  disabled = false,
  decoration,
  size,
  onClick,
  children,
  label,
  icon,
  iconLeft,
  iconRight,
  loading,
}) => {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={clsx(
        //size
        { "w-fit": size === "fit" },
        { "w-full": size === "full" },
        { "w-80": size === "large" },
        { "w-60": size === "medium" },
        { "w-48": size === "small" },
        { "w-36": size === "extra-small" },

        // fill
        {
          "text-white bg-secondary border-secondary": decoration === "fill",
        },
        {
          "hover:opacity-60": decoration === "fill" && !disabled,
        },

        // not fill white
        {
          "text-white border-white": decoration === "not-fill",
        },
        {
          "hover:opacity-60": decoration === "not-fill" && !disabled,
        },

        // not fill primary
        {
          "text-primary border-primary": decoration === "line-primary",
        },
        {
          "hover:bg-primary hover:text-white hover:border-primary":
            decoration === "line-primary" && !disabled,
        },

        // none
        {
          "text-black font-medium hover:bg-gray-10": !decoration,
        },

        // global
        "group flex items-center justify-center border rounded px-4 py-2",
        "outline-none transition-colors duration-200",
        "focus:outline-none cursor-pointer disabled:cursor-not-allowed disabled:opacity-30",
        className
      )}
    >
      {label ? (
        <div className="flex items-center justify-end">
          {icon && iconLeft && (
            <span className="mr-2">
              <Icon src={icon} className="size-6" />
            </span>
          )}
          <p className="text-[17px]">{label}</p>{" "}
          {loading && <Spinner className="mx-2" />}
          {icon && iconRight && (
            <span className="ml-2">
              <Icon src={icon} className="size-6" />
            </span>
          )}
        </div>
      ) : (
        children
      )}
    </button>
  );
};

export const Button: React.FC<
  ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({
  size = "full",
  label,
  disabled,
  onClick,
  href,
  icon,
  children,
  iconLeft,
  iconRight,
  loading,
  ...props
}) => {
  return (
    <>
      {href ? (
        <Link href={href}>
          <ButtonContent
            size={size}
            label={label}
            disabled={disabled}
            icon={icon}
            iconLeft={iconLeft}
            iconRight={iconRight}
            loading={loading}
            {...props}
          >
            {children}
          </ButtonContent>
        </Link>
      ) : (
        <ButtonContent
          size={size}
          label={label}
          disabled={disabled}
          icon={icon}
          iconLeft={iconLeft}
          iconRight={iconRight}
          loading={loading}
          onClick={onClick}
          {...props}
        >
          {children}
        </ButtonContent>
      )}
    </>
  );
};
