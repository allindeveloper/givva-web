import type { FC } from "react";
import curateimage from "../../assets/images/curate-image.png";
import { ParagraphAtom } from "../paragraph/paragraph-atom";
import { Link } from "react-router-dom";

type CurateCardProps = {
  name?: string;
  description?: string;
  id?: string;
  detailsPage?: boolean;
  giftType?: string;
};
export const CurateCard: FC<CurateCardProps> = ({
  name,
  description,
  id,
  detailsPage,
  giftType,
}) => {
  const CardContent = (
    <div className="hover:opacity-70">
      <img src={curateimage} />
      {name && (
        <ParagraphAtom className="text-primary mt-7 font-medium font-degular-medium text-[22.5px]">
          {name}
        </ParagraphAtom>
      )}
      {description && (
        <ParagraphAtom className="text-grey-custom-1 font-normal font-degular-normal text-[16.9px]">
          {description}
        </ParagraphAtom>
      )}
      {detailsPage && giftType && (
        <ParagraphAtom className="text-grey-custom-1 font-normal font-degular-normal text-[16.9px]">
          {giftType}
        </ParagraphAtom>
      )}
    </div>
  );
  return detailsPage ? (
    CardContent
  ) : (
    <Link to={`/curation/${id}`} className="hover:opacity-70">
      {CardContent}
    </Link>
  );
};
