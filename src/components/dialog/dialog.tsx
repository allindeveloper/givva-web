import type { FC } from "react";
import { CloseIcon } from "../../assets/icons/close-icon";
import { ParagraphAtom } from "../paragraph/paragraph-atom";

export type DialogProps = {
  open: boolean;
  title?: string;
  description?: string;
  children: React.ReactNode;
  handleClose: () => void;
  showClose?: boolean;
};
export const Dialog: FC<DialogProps> = ({
  open,
  title,
  children,
  description,
  handleClose,
  showClose = true,
}) => {
  return (
    <>
      {open && (
        <div className="fixed inset-0 bg-dark-custom-4 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-xl w-[597px] p-6 relative">
            {title && (
              <ParagraphAtom className="text-xl font-semibold mb-4">
                {title}
              </ParagraphAtom>
            )}
            {description && (
              <ParagraphAtom className="text-primary font-degular font-normal text-base">
                {description}
              </ParagraphAtom>
            )}
            {showClose && (
              <div
                onClick={handleClose}
                className=" cursor-pointer absolute top-10 right-10"
              >
                <CloseIcon />
              </div>
            )}
            <div className="overflow-y-auto">{children}</div>
          </div>
        </div>
      )}
    </>
  );
};
