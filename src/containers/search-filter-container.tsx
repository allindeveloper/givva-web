import { useEffect, useState, type ChangeEvent, type FC } from "react";
import InputAtom from "../components/input/input-atom";
import { ParagraphAtom } from "../components/paragraph/paragraph-atom";
import { SelectAtom } from "../components/select/select-atom";
import { useDebounce } from "use-debounce";
import { SearchIcon } from "../assets/icons/search-icon";

type SearchFilterContainerProps = {
  handleResetSearch: () => void;
  handlePerformSearch: (debouncedSearch: string) => void;
};
export const SearchFilterContainer: FC<SearchFilterContainerProps> = ({
  handleResetSearch,
  handlePerformSearch,
}) => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");
  const [debouncedSearch] = useDebounce(search, 500);
  const filterData = [
    {
      label: "From 18 to 25",
      value: "18-25",
    },
    {
      label: "From 25 to 25",
      value: "25-40",
    },
    {
      label: "From 20 to 30",
      value: "20-30",
    },
  ];

  useEffect(() => {
    if (debouncedSearch.trim()) {
      handlePerformSearch(debouncedSearch.trim());
    } else {
      // Reset if no search term
      handleResetSearch();
    }
  }, [debouncedSearch]);

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const onChangeFilter = (e: ChangeEvent<HTMLInputElement>) => {
    const filter = e.target.value
    setFilter(e.target.value)
    handlePerformSearch(filter);
  };
  return (
    <div className="block sm:flex justify-between">
      <div>
        <ParagraphAtom className="font-semibold font-degular-semi-bold text-primary text-[32px]">
          Top picks
        </ParagraphAtom>
      </div>

      <div className="flex gap-5">
        <div>
          <InputAtom
            placeholder="What type of gift ideas are you interested in?"
            className="!bg-grey-custom-4 !border-transparent pl-14"
            onChange={handleSearchChange}
            startIcon={<SearchIcon />}
          />
        </div>
        <div>
          <div>
            <SelectAtom
              onChange={onChangeFilter}
              items={filterData}
              value={filter}
              placeholder="Select age range"
              className="pl-4 border !border-grey-custom-2 !bg-white !rounded-[6px] !text-grey-custom-2 placeholder:!text-base placeholder:!font-medium placeholder:!text-grey-custom-2"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
