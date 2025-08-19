import React, { forwardRef } from "react";
import { LabelAtom } from "../label/label-atom";
import clsx from "clsx";

export interface InputAtomProps {
  id?: string;
  placeholder?: string;
  disabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onClick?: (e: React.MouseEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  className?: string;
  errorMessage?: string;
  label?: string;
  labelIcon?: React.ReactNode;
  startIcon?: React.ReactNode;
  value?: string;
  defaultValue?: string;
  type?: string;
  endIcon?: React.ReactNode;
  transparent?: boolean;
  readOnly?: boolean;
}

const InputAtom = forwardRef<HTMLInputElement, InputAtomProps>(
  (
    {
      id,
      placeholder,
      label,
      onChange,
      value,
      defaultValue,
      className,
      disabled,
      startIcon,
      errorMessage,
      labelIcon,
      onClick,
      onKeyDown,
      onBlur,
      type,
      endIcon,
      readOnly,
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
          <input
            id={id}
            className={clsx(
              className,
              "w-full outline-none h-[50px] rounded-lg border border-solid border-white-custom-1",
            )}
            value={value}
            defaultValue={defaultValue}
            placeholder={placeholder}
            disabled={disabled}
            onChange={onChange}
            onBlur={onBlur}
            readOnly={readOnly}
            onClick={onClick}
            onKeyDown={onKeyDown}
            ref={ref}
            type={type}
          />
          {endIcon && (
            <div
              className={clsx(
                "absolute cursor-pointer top-4.5 bottom-0 right-3.5",
              )}
            >
              {endIcon}
            </div>
          )}
        </div>
        {errorMessage ? (
          <LabelAtom className="text-red-400 mt-0 mb-2 block">
            {errorMessage}
          </LabelAtom>
        ) : (
          <div className="mt-3" />
        )}
      </div>
    );
  },
);

InputAtom.displayName = "InputAtom";

export default InputAtom;
