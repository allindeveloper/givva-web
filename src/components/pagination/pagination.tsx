import type { FC } from "react";
import { ParagraphAtom } from "../paragraph/paragraph-atom";
import { ArrowLeftIcon } from "../../assets/icons/arrowleft-icon";
import { ArrowRightIcon } from "../../assets/icons/arrowright-icon";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  handlePrevious: () => void;
  handleNext: () => void;
};
export const Pagination: FC<PaginationProps> = ({
  currentPage,
  totalPages,
  handleNext,
  handlePrevious,
}) => {
  return (
    <div className="flex justify-between">
      <div onClick={handlePrevious} className="cursor-pointer">
        <ArrowLeftIcon />
      </div>
      <div>
        <ParagraphAtom className="font-degular font-normal text-base text-gray-custom-1">
          Page{" "}
          <span className="font-degular-medium font-medium">{currentPage}</span>{" "}
          of {totalPages}
        </ParagraphAtom>
      </div>
      <div onClick={handleNext} className="cursor-pointer">
        <ArrowRightIcon />
      </div>
    </div>
  );
};
