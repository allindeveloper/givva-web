import clsx from "clsx";
import React from "react";

export type LabelAtomProps = {
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
  htmlFor?: string;
};

export const LabelAtom = ({
  htmlFor,
  onClick,
  className,
  children,
}: LabelAtomProps) => {
  return (
    <label htmlFor={htmlFor} onClick={onClick} className={clsx(className)}>
      {children}
    </label>
  );
};
