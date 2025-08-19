import type { FC } from "react";
import { CloseIcon } from "../../assets/icons/close-icon";
import { ParagraphAtom } from "../paragraph/paragraph-atom";

export type DialogProps = {
    open: boolean;
    title: string;
    description: string
    children: React.ReactNode;
    handleClose: () => void;
}
export const Dialog: FC<DialogProps> = ({
    open,
    title,
    children,
    description,
    handleClose
}) => {
    return (
        <>
            {open && <div className="fixed inset-0 bg-dark-custom-4 flex items-center justify-center z-50">
                <div className="bg-white rounded-2xl shadow-xl w-[597px] p-6 relative">
                    <h2 className="text-xl font-semibold mb-4">{title}</h2>
                    <ParagraphAtom className="text-primary font-degular font-normal text-base">
                        {description}
                    </ParagraphAtom>
                    <div onClick={handleClose} className="absolute top-10 right-10">
                        <CloseIcon />
                    </div>
                    <div className="h-[576px]  overflow-y-auto">
                        {children}
                    </div>

                </div>
            </div>}
        </>
    )
}