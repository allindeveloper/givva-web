import clsx from "clsx";
import React from "react";

export type ParagraphAtomProps = {
  className?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  onClick?: () => void;
};

export const ParagraphAtom = ({
  className,
  style,
  children,
  onClick,
}: ParagraphAtomProps) => {
  return (
    <p style={style} onClick={onClick} className={clsx(className)}>
      {children}
    </p>
  );
};
