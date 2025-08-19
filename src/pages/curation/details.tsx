import { useNavigate, useParams } from "react-router-dom";
import { ParagraphAtom } from "../../components/paragraph/paragraph-atom";
import { getCurationById } from "../../storage/curation-storage";
import { AgeRangeIcon } from "../../assets/icons/age-range-icon";
import { RelationshipIcon } from "../../assets/icons/relationship-icon";
import { OccassionIcon } from "../../assets/icons/occassion-icon";
import { InterestIcon } from "../../assets/icons/interest-icon";
import { CurateCard } from "../../components/card/curate-card";
import { WelcomeContainer } from "../../containers/welcome-container";

export const CurationDetails = () => {
    const { id } = useParams<{ id: string }>();
    const currationDetails = getCurationById(id ?? "");
    const navigate = useNavigate()
    const handleGoBack = () => {
        navigate(-1)
    }
    return (
        <div className="mx-auto max-w-[1150px] w-full">
            <div className="mt-10">
            <ParagraphAtom onClick={handleGoBack} className="cursor-pointer my-4">
                Back
            </ParagraphAtom>
            
                <WelcomeContainer title={currationDetails?.name} showNavigation />
            </div>
            <div className="bg-grey-custom-6 px-10 py-4 rounded-3xl mt-8">
                <div className="flex justify-between items-center py-4">
                    <div className="flex items-center gap-2">
                        <AgeRangeIcon />
                        <ParagraphAtom className="text-grey-custom-7 text-sm font-medium font-degular-medium">
                            Age range
                        </ParagraphAtom>
                    </div>
                    <div>
                        <ParagraphAtom>{currationDetails?.ageRange}</ParagraphAtom>
                    </div>
                </div>
                <div className="flex justify-between items-center py-4 ">
                    <div className="flex items-center gap-2">
                        <RelationshipIcon />
                        <ParagraphAtom className="text-grey-custom-7 text-sm font-medium font-degular-medium">
                            Relationship
                        </ParagraphAtom>
                    </div>
                    <div>
                        <ParagraphAtom>{currationDetails?.relationship}</ParagraphAtom>
                    </div>
                </div>
                <div className="flex justify-between items-center py-4">
                    <div className="flex items-center gap-2">
                        <OccassionIcon />
                        <ParagraphAtom className="text-grey-custom-7 text-sm font-medium font-degular-medium">
                            Occassion
                        </ParagraphAtom>
                    </div>
                    <div>
                        <ParagraphAtom>{currationDetails?.occassion}</ParagraphAtom>
                    </div>
                </div>
                <div className="flex justify-between items-center py-4">
                    <div className="flex items-center gap-2">
                        <InterestIcon />
                        <ParagraphAtom className="text-grey-custom-7 text-sm font-medium font-degular-medium">
                            Interests
                        </ParagraphAtom>
                    </div>
                    <div>
                        <ParagraphAtom>{currationDetails?.interests}</ParagraphAtom>
                    </div>
                </div>
            </div>
            <hr className="border-grey-custom-3 mb-10 mt-5" />

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                {[...new Set(currationDetails?.giftTypes?.filter(Boolean))]?.map((gift, index) => (
                    <CurateCard detailsPage key={index} name={gift} />
                ))}
            </div>
        </div>
    );
};
