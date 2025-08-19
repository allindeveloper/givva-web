import React, { forwardRef } from "react";
import { LabelAtom } from "../label/label-atom";
import clsx from "clsx";

export interface TextAreaAtomProps {
  id?: string;
  placeholder?: string;
  disabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
  onClick?: (e: React.MouseEvent<HTMLTextAreaElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void;
  className?: string;
  errorMessage?: string;
  label?: string;
  labelIcon?: React.ReactNode;
  startIcon?: React.ReactNode;
  value?: string;
  type?: string;
  showPassword?: boolean;
  onTogglePassword?: () => void;
  endIcon?: React.ReactNode;
  transparent?: boolean;
  handleEndIconClick?: () => void;
}

const TextAreaAtom = forwardRef<HTMLTextAreaElement, TextAreaAtomProps>(
  (
    {
      id,
      placeholder,
      label,
      onChange,
      value,
      className,
      disabled,
      startIcon,
      errorMessage,
      labelIcon,
      onClick,
      onKeyDown,
      onBlur,
      type,
      showPassword,
      onTogglePassword,
      endIcon,
      handleEndIconClick,
      transparent,
    },
    ref,
  ) => {
    return (
      <div>
        {label && (
          <div className="flex justify-start items-center mb-2">
            {labelIcon}
            <LabelAtom className="font-semibold text-primary text-lg mt-1 block">
              {label}
            </LabelAtom>
          </div>
        )}
        <div className="flex relative" data-testid={id}>
          {startIcon && (
            <span className="absolute top-3.5 left-5">{startIcon}</span>
          )}
          <textarea
            id={id}
            className={clsx(
              className,
              transparent && !disabled
                ? "!bg-transparent border border-grey-custom-2 text-white-custom-2 placeholder:text-white-custom-2"
                : "text-white-custom-2 bg-white-custom-1",
              disabled ? "!bg-gray-700" : "",
              "w-full outline-none h-[145px] rounded-lg border border-solid border-white-custom-1",
            )}
            value={value}
            placeholder={placeholder}
            disabled={disabled}
            onChange={onChange}
            onBlur={onBlur}
            onClick={onClick}
            onKeyDown={onKeyDown}
            ref={ref}
          />
          {endIcon && (
            <div
              onClick={handleEndIconClick}
              className={clsx(
                "absolute cursor-pointer top-4.5 bottom-0 right-3.5",
              )}
            >
              {endIcon}
            </div>
          )}
        </div>
        {errorMessage ? (
          <LabelAtom className="text-red-400 mt-2 mb-2 block">
            {errorMessage}
          </LabelAtom>
        ) : (
          <div className="mt-3" />
        )}
      </div>
    );
  },
);

TextAreaAtom.displayName = "TextAreaAtom";

export default TextAreaAtom;
