import clsx from "clsx";
import React, { type FunctionComponent } from "react";
import { LabelAtom } from "../label/label-atom";

interface IButton {
  className?: string;
  title: string;
  children?: React.ReactNode;
  loading?: boolean;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  type?: "submit" | "reset" | "button";
  startIcon?: React.ReactNode;
}

const ButtonAtom: FunctionComponent<IButton> = ({
  title,
  children,
  className,
  loading,
  disabled,
  onClick,
  type,
  startIcon,
}: IButton) => {
  const classNameValue = clsx(
    className,
    disabled ? " opacity-70" : "cursor-pointer opacity-100",
    "bg-dark-custom-1  text-white px-10 sm:mb-0 rounded-[100px] mb-4 text-sm justify-center flex items-center py-2.5",
  );

  return (
    <button
      type={type}
      disabled={disabled}
      className={classNameValue}
      onClick={onClick}
    >
      <div className="flex items-center">
        {startIcon}
        {title && (
          <LabelAtom
            className={clsx(
              disabled ? "opacity-70" : "opacity-100 cursor-pointer",
              "font-bold text-lg",
            )}
          >
            {loading ? "Loading.." : title}
          </LabelAtom>
        )}
        {children && children}
      </div>
    </button>
  );
};

export default ButtonAtom;
