import ButtonAtom from "../components/button/button-atom";
import { SuccessIcon } from "../assets/icons/success-icon";
import { ParagraphAtom } from "../components/paragraph/paragraph-atom";

type CurrateSuccessProps = {
  handleGoHome: () => void;
  handleViewDetails: () => void;
};
export const CurrateSuccess = ({
  handleGoHome,
  handleViewDetails,
}: CurrateSuccessProps) => {
  return (
    <>
      <div className="flex justify-center">
        <SuccessIcon />
      </div>

      <ParagraphAtom className="text-center mt-4 mb-6 text-primary font-semibold font-degular-semi-bold text-2xl">
        Your Gift Package Is Ready!
      </ParagraphAtom>

      <ParagraphAtom className="text-center text-sm font-normal font-degular mt-4 mb-6 text-primary">
        Your selections have been saved. You can view the curated details or
        start curating another.
      </ParagraphAtom>

      <div className="mt-20">
        <ButtonAtom
          onClick={handleGoHome}
          title="Go home"
          className="!bg-blue-custom-1 text-center w-full"
        />

        <ButtonAtom
          onClick={handleViewDetails}
          title="View details"
          className="!bg-grey-custom-5 !text-dark-custom-5 mt-5 text-center w-full"
        />
      </div>
    </>
  );
};
