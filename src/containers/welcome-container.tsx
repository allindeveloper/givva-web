import { Link } from "react-router-dom";
import { PlusIcon } from "../assets/icons/plusicon-icon"
import ButtonAtom from "../components/button/button-atom"
import { ParagraphAtom } from "../components/paragraph/paragraph-atom"

type WelcomeContainerProps = {
    handleCreate?: () => void;
    title?: string;
    description?: string
    showNavigation?: boolean;
}
export const WelcomeContainer = ({
    handleCreate,
    title,
    description,
    showNavigation
}: WelcomeContainerProps) => {
    return (
        <div className="flex justify-between">
            <div>
                {title && <ParagraphAtom className="text-dark-custom-2 font-degular text-2xl">
                    {title}
                </ParagraphAtom>}
                {description && <ParagraphAtom className="text-dark-custom-3 font-medium font-degular-medium text-[32px]">
                    {description}
                </ParagraphAtom>}
                {showNavigation && (
                    <div className="flex justify-start items-center gap-3 text-gray-600">
                        <Link to={"/"}>Home</Link>
                        <span>-</span>
                        <div>Details</div>
                    </div>
                )}
            </div>
            {
                handleCreate && <div className="mt-4">
                    <ButtonAtom onClick={handleCreate} startIcon={<PlusIcon className="mr-2" />} className="!bg-blue-custom-1" title="Curate gift" />
                </div>
            }
        </div >
    )
}