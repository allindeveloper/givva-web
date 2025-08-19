import { useState } from "react"
import type { CreateCurationFormType } from "../types/curation"
import { CurateCard } from "../components/card/curate-card"
import { dummyCurations } from "../data/dummy-curations"
import { WelcomeContainer } from "../containers/welcome-container"
import { SearchFilterContainer } from "../containers/search-filter-container"
import { Pagination } from "../components/pagination/pagination"
import { Dialog } from "../components/dialog/dialog"
import { CurateFormContainer } from "../containers/curate-form-container"
import { CurrateSuccess } from "../containers/curate-success"
import { getCurations } from "../storage/curation-storage"
import { usePagination } from "../hooks/pagination/use-pagination"

const HomePage = () => {

    const [curations, setCurations] = useState<CreateCurationFormType[]>(getCurations());
    const [showCreate, setshowCreate] = useState(false)
    const [showSuccess, setshowSuccess] = useState(false);
    const { paginatedData, recalculate, setCurrentPage, totalPages, currentPage } = usePagination(curations)
    const handleNext = () => {
        if (currentPage === totalPages) {
            return
        }
        setCurrentPage(currentPage + 1)
    }
    const handlePrevious = () => {
        if (currentPage === 1) {
            return
        }
        setCurrentPage(currentPage - 1)
    }

    const handleCreate = () => {
        setshowCreate(true)
    }

    const handleCreateGift = (data: CreateCurationFormType) => {
        setCurations(prev => [...prev, data]);
        setshowCreate(false)
    }

    const handleGoHome = () => {
        // 
    }

    const handleViewDetails = () => {

    }

    const handleResetSearch = () => {
        const initialCurations = getCurations();
        setCurations(initialCurations);
        recalculate();
    }

    const handlePerformSearch = (debouncedSearch: string) => {
        const initialCurations = getCurations();

        const filteredData = initialCurations.filter((c) =>
            c.name.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
            c.interests.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
            c.note.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
            c.occassion.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
            c.relationship.toLowerCase().includes(debouncedSearch.toLowerCase())
        );

        setCurations(filteredData);

        setCurrentPage(1);
        recalculate();
    };
    return (
        <div className="mx-auto max-w-[1150px] w-full px-4 mt-40">
            <div className="my-6">
                <WelcomeContainer
                    handleCreate={handleCreate}
                />
            </div>
            <div>
                <SearchFilterContainer
                    handlePerformSearch={handlePerformSearch}
                    handleResetSearch={handleResetSearch}
                />

            </div>
            <hr className="border-grey-custom-3 mb-10 mt-5" />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                {paginatedData?.map((curation, index) => (
                    <CurateCard
                        key={index}
                        name={curation.name}
                        description={`Curated by Precious`}
                        id={curation.id}
                    />
                ))}
            </div>
            <hr className="border-grey-custom-3 mb-5 mt-10" />
            <div className="mt-5 mb-10">
                <Pagination handlePrevious={handlePrevious} handleNext={handleNext}
                    currentPage={currentPage}
                    totalPages={totalPages} />
            </div>

            <Dialog open={showCreate} handleClose={() => setshowCreate(false)} title="Curate a Gift" description="Please fill the input field below">
                <CurateFormContainer
                    handleCreate={handleCreateGift}
                />
            </Dialog>
            <Dialog open={showSuccess} handleClose={() => setshowSuccess(false)} title="Curate a Gift" description="Please fill the input field below">
                <CurrateSuccess
                    handleGoHome={handleGoHome}
                    handleViewDetails={handleViewDetails}
                />
            </Dialog>
        </div>
    )
}
export default HomePage