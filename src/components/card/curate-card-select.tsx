import type { FC } from "react";
import { ParagraphAtom } from "../paragraph/paragraph-atom";
import { CircleEmptyIcon } from "../../assets/icons/circle-empty-icon";
import { CircleFilledIcon } from "../../assets/icons/circle-filled-icon";
import curateimage from "../../assets/images/curate-image.png";

type CurateCardSelectProps = {
  selected: boolean;
  name: string;
  handleSelect: () => void;
};
export const CurateCardSelect: FC<CurateCardSelectProps> = ({
  selected,
  name,
  handleSelect,
}) => {
  return (
    <div onClick={handleSelect} className="cursor-pointer">
      <div className="flex justify-start gap-4 items-center cur">
        <div>{selected ? <CircleFilledIcon /> : <CircleEmptyIcon />}</div>
        <div>
          <ParagraphAtom>{name}</ParagraphAtom>
        </div>
      </div>
      <img src={curateimage} />
    </div>
  );
};
