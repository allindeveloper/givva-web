import { useEffect, useState, type ChangeEvent, type FC } from "react";
import InputAtom from "../components/input/input-atom";
import { ParagraphAtom } from "../components/paragraph/paragraph-atom";
import { SelectAtom } from "../components/select/select-atom";
import { useDebounce } from "use-debounce";

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
      label: "Popular",
      value: 1,
    },
    {
      label: "Latest",
      value: 2,
    },
    {
      label: "Trending",
      value: 3,
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
    //
  };
  return (
    <div className="flex justify-between">
      <div>
        <ParagraphAtom className="font-semibold font-degular-semi-bold text-primary text[32px]">
          Top picks
        </ParagraphAtom>
      </div>

      <div className="flex gap-5">
        <div>
          <InputAtom
            placeholder="What type of gift ideas are you interested in?"
            className="!bg-grey-custom-4 !border-transparent px-4"
            onChange={handleSearchChange}
          />
        </div>
        <div>
          <div>
            <SelectAtom
              onChange={onChangeFilter}
              items={filterData}
              value={search}
              placeholder="Select"
              className="pl-4 border !border-grey-custom-2 !bg-white !rounded-[6px] !text-grey-custom-2 placeholder:!text-base placeholder:!font-medium placeholder:!text-grey-custom-2"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
