import type { FC } from "react";
import curateimage from "../../assets/images/curate-image.png"
import { ParagraphAtom } from "../paragraph/paragraph-atom"
import { Link } from "react-router-dom";

type CurateCardProps = {
    name: string;
    description: string,
    id?: string
}
export const CurateCard: FC<CurateCardProps> = ({
    name,
    description,
    id
}) => {
    return (
        <Link to={`/curation/${id}`} className="hover:opacity-70">
            <div>
                <img src={curateimage} />
                <ParagraphAtom className="text-primary mt-7 font-medium font-degular-medium text-[22.5px]">
                    {name}
                </ParagraphAtom>
                <ParagraphAtom className="text-grey-custom-1 font-normal font-degular-normal text-[16.9px]">
                    {description}
                </ParagraphAtom>
            </div>
        </Link>
    )
}