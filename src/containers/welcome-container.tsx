import { PlusIcon } from "../assets/icons/plusicon-icon"
import ButtonAtom from "../components/button/button-atom"
import { ParagraphAtom } from "../components/paragraph/paragraph-atom"

type WelcomeContainerProps = {
    handleCreate: () => void;
}
export const WelcomeContainer = ({
    handleCreate
} : WelcomeContainerProps) => {
    return (
        <div className="flex justify-between">
            <div>
                <ParagraphAtom className="text-dark-custom-2 font-degular text-2xl">
                    Hey Precious 👋
                </ParagraphAtom>
                <ParagraphAtom className="text-dark-custom-3 font-medium font-degular-medium text-[32px]">
                    Welcome Back
                </ParagraphAtom>
            </div>
            <div className="mt-4">
                <ButtonAtom onClick={handleCreate} startIcon={<PlusIcon />} className="!bg-blue-custom-1" title="Curate gift" />
            </div>
        </div>
    )
}