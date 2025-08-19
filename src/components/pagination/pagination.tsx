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
    <div className="flex justify-between items-center">
      <div
        onClick={currentPage > 1 ? handlePrevious : undefined}
        className={` ${currentPage === 1 ? "opacity-50 cursor-auto" : "cursor-pointer"}`}
      >
        <ArrowLeftIcon />
      </div>

      <div>
        <ParagraphAtom className="font-degular font-normal text-base text-gray-custom-1">
          Page{" "}
          <span className="font-degular-medium font-medium">{currentPage}</span>{" "}
          of {totalPages}
        </ParagraphAtom>
      </div>

      <div
        onClick={currentPage < totalPages ? handleNext : undefined}
        className={`${currentPage === totalPages ? "opacity-50 cursor-auto" : "cursor-pointer "}`}
      >
        <ArrowRightIcon />
      </div>
    </div>

  );
};
