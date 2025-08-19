import { useParams } from "react-router-dom";
import { ParagraphAtom } from "../../components/paragraph/paragraph-atom"
import { getCurationById } from "../../storage/curation-storage"

export const CurationDetails = () => {
    const { id } = useParams<{ id: string }>();
    const currationDetails = getCurationById(id ?? "");
    console.log("currationDetails", currationDetails, id)
    return (
        <div className="mx-auto max-w-[1150px] w-full">
            <div className="bg-grey-custom-6 px-5 rounded-3xl mt-20">
                <div className="flex justify-between items-center py-4">
                    <div>
                        <ParagraphAtom className="text-grey-custom-7 text-sm font-medium font-degular-medium">
                            Age range
                        </ParagraphAtom>
                    </div>
                    <div>
                        <ParagraphAtom>
                            {currationDetails?.ageRange}
                        </ParagraphAtom>
                    </div>
                </div>
                <div className="flex justify-between items-center py-4 ">
                    <div>
                        <ParagraphAtom className="text-grey-custom-7 text-sm font-medium font-degular-medium">
                            Relationship
                        </ParagraphAtom>
                    </div>
                    <div>
                        <ParagraphAtom>
                            {currationDetails?.relationship}
                        </ParagraphAtom>
                    </div>
                </div>
                <div className="flex justify-between items-center py-4">
                    <div>
                        <ParagraphAtom className="text-grey-custom-7 text-sm font-medium font-degular-medium">
                            Occassion
                        </ParagraphAtom>
                    </div>
                    <div>
                        <ParagraphAtom>
                            {currationDetails?.occassion}
                        </ParagraphAtom>
                    </div>
                </div>
                <div className="flex justify-between items-center py-4">
                    <div>
                        <ParagraphAtom className="text-grey-custom-7 text-sm font-medium font-degular-medium">
                            Interests
                        </ParagraphAtom>
                    </div>
                    <div>
                        <ParagraphAtom>
                            {currationDetails?.interests}
                        </ParagraphAtom>
                    </div>
                </div>
            </div>
        </div>
    )
}