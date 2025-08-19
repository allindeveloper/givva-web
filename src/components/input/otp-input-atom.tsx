import React from "react";
import { OtpInput } from "reactjs-otp-input";
import { LabelAtom } from "../label/label-atom";

export interface OtpInputAtomProps {
  id?: string;
  value: string;
  handleChange: (value: string) => void;
  errorMessage?: string;
}

const OtpInputAtom = ({
  value,
  errorMessage,
  handleChange,
}: OtpInputAtomProps) => {
  return (
    <>
      <OtpInput
        value={value}
        inputStyle={{
          border: "2px solid #261343",
          width: 70,
          height: 87,
          fontSize: 30,
          borderRadius: 8,
        }}
        onChange={handleChange}
        numInputs={4}
        shouldAutoFocus
        separator={<span className="mx-2"></span>}
      />
      {errorMessage ? (
        <LabelAtom className="text-red-400 mt-2 mb-2 block">
          {errorMessage}
        </LabelAtom>
      ) : (
        <div className="mt-3" />
      )}
    </>
  );
};

export default OtpInputAtom;
