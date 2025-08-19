import clsx from "clsx";
import { useState, useRef, useEffect, type ChangeEvent } from "react";
import InputAtom, { type InputAtomProps } from "../input/input-atom";
import { DownArrowIcon } from "../../assets/icons/down-arrow-icon";

export type SelectItem<T> = {
  label: string;
  value: T | string;
};

export type SearchableSelectProps<T> = {
  items: SelectItem<T>[];
  onSelect?: (selected: SelectItem<T>) => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: T | string;
  placeholder?: string;
  className?: string;
  label?: string;
  labelIcon?: InputAtomProps["labelIcon"];
  rootClassName?: string;
  errorMessage?: string;
  loading?: boolean;
  endIcon?: InputAtomProps["endIcon"];
  disabled?: boolean;
  transparent?: InputAtomProps["transparent"];
};

export const SelectAtom = <T,>({
  items,
  rootClassName,
  labelIcon,
  className,
  label,
  onSelect,
  onChange,
  value,
  transparent,
  placeholder = "",
  errorMessage,
  endIcon,
  loading,
  disabled,
}: SearchableSelectProps<T>) => {
  const [search, setSearch] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const [touched, setTouched] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [itemsList, setItemsList] = useState(items);
  const [selectedValue, setSelectedValue] = useState<string | T>("");

  useEffect(() => {
    if (value && items) {
      const filteredItems = items.find((item) =>
        String(item.value).toLowerCase().includes(String(value)?.toLowerCase()),
      );
      setSelectedValue(value);
      setSearch(filteredItems?.label as string);
    }
  }, [value, items]);

  const handleSelect = (item: SelectItem<T>) => {
    setSearch(item.label);
    setItemsList(items);
    setSelectedValue(item.value);
    setIsOpen(false);
    setTouched(true);
    onSelect?.(item);
    onChange?.({
      target: { value: item.value },
    } as ChangeEvent<HTMLInputElement>);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    setTouched(true);
    const filteredItems = items.filter((item) =>
      item.label.toLowerCase().includes(e.target.value.toLowerCase()),
    );
    onChange?.({
      target: { value: e.target.value },
    } as ChangeEvent<HTMLInputElement>);
    setSelectedValue(e.target.value);
    setItemsList(filteredItems);
  };

  const handleClick = () => {
    setIsOpen((prev) => !prev);
    setTouched(true);
    setItemsList(items);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
        onChange?.({
          target: { value: selectedValue },
        } as ChangeEvent<HTMLInputElement>);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [search]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen) return;
    if (e.key === "ArrowDown") {
      setHighlightedIndex((prev) => Math.min(prev + 1, itemsList.length - 1));
    } else if (e.key === "ArrowUp") {
      setHighlightedIndex((prev) => Math.max(prev - 1, 0));
    } else if (e.key === "Enter") {
      handleSelect(itemsList[highlightedIndex]);
    } else if (e.key === "Escape") {
      setIsOpen(false);
    }
  };

  return (
    <div className={clsx("relative w-full", rootClassName)} ref={dropdownRef}>
      <InputAtom
        value={search}
        label={label}
        labelIcon={labelIcon}
        placeholder={loading ? "loading.." : placeholder}
        onChange={handleSearchChange}
        onKeyDown={handleKeyDown}
        onClick={handleClick}
        className={clsx(
          "w-full outline-none cursor-pointer !text-dark-custom-5",
          className,
        )}
        disabled={disabled}
        transparent={transparent}
        readOnly
        endIcon={endIcon || <DownArrowIcon />}
      />
      {isOpen && (
        <ul className="absolute left-0 w-full bg-white border border-grey-custom-2 rounded-md shadow-lg max-h-60 overflow-y-auto z-10">
          {itemsList.length > 0 ? (
            itemsList.map((item, index) => (
              <li
                key={item.value as string}
                className={`px-4 py-2 cursor-pointer ${
                  highlightedIndex === index || String(search) === item.label
                    ? "bg-primary text-white"
                    : "hover:bg-gray-100"
                }`}
                onClick={() => handleSelect(item)}
              >
                {item.label}
              </li>
            ))
          ) : (
            <li className="px-4 py-2 text-gray-500">No results found</li>
          )}
        </ul>
      )}
      {(touched || errorMessage) && (
        <p className="text-red-400 mt-1">{errorMessage}</p>
      )}
    </div>
  );
};
