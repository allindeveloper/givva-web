import { useState } from "react";
import ButtonAtom from "../components/button/button-atom";
import TextAreaAtom from "../components/textarea/textarea-atom";
import InputAtom from "../components/input/input-atom";
import { SelectAtom } from "../components/select/select-atom";
import { Controller, useForm, type SubmitHandler } from "react-hook-form";
import {
  CreateCurationFormSchema,
  type CreateCurationFormType,
} from "../types/curation";
import { zodResolver } from "@hookform/resolvers/zod";
import { CurateCardSelect } from "../components/card/curate-card-select";

const ageRanges = [
  {
    label: "9-15",
    value: "9-15",
  },
  {
    label: "15-30",
    value: "15-30",
  },
  {
    label: "30-35",
    value: "30-35",
  },
];

const relationshipData = [
  {
    label: "Single",
    value: "single",
  },
  {
    label: "Married",
    value: "married",
  },
  {
    label: "Divorced",
    value: "divorced",
  },
];

const dummyGifts = ["Cake", "Bag", "Heels", "Glasses", "Bracelet", "Shoes"];

type CurateFormContainerProps = {
  handleCreate: (data: CreateCurationFormType) => void;
};
export const CurateFormContainer = ({
  handleCreate,
}: CurateFormContainerProps) => {
  const [step, setStep] = useState(1);
  const [giftTypes, setgiftTypes] = useState<string[]>([""]);
  const {
    handleSubmit,
    control,
    getValues,
    formState: { errors },
  } = useForm<CreateCurationFormType>({
    defaultValues: {},
    mode: "onTouched",
    resolver: zodResolver(CreateCurationFormSchema),
  });

  const onSubmit: SubmitHandler<CreateCurationFormType> = () => {
    setStep(2);
  };

  const handleSelectGift = (gift: string) => {
    setgiftTypes((prev) => {
      if (prev.includes(gift)) {
        // remove it
        return prev.filter((g) => g !== gift);
      } else {
        // add it
        return [...prev, gift];
      }
    });
  };

  const handleSave = () => {
    const formValue = getValues();
    handleCreate({
      ...formValue,
      giftTypes,
    });
  };
  return (
    <>
      {step === 1 && (
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <InputAtom
                  placeholder="e.g Turning 25th"
                  label="Curation name"
                  onChange={onChange}
                  value={value}
                  onBlur={onBlur}
                  className="mb-4 !bg-grey-custom-4 !border-transparent px-4"
                />
              )}
              name={"name"}
            />

            <Controller
              control={control}
              render={({ field: { onChange, value } }) => (
                <SelectAtom
                  onChange={onChange}
                  items={ageRanges}
                  value={value}
                  label="Age Range"
                  placeholder="Select"
                  className="pl-4 border !border-grey-custom-2 !bg-white !rounded-[6px]"
                />
              )}
              name={"ageRange"}
            />

            <Controller
              control={control}
              render={({ field: { onChange, value } }) => (
                <SelectAtom
                  onChange={onChange}
                  items={relationshipData}
                  value={value}
                  label="Relationship"
                  placeholder="Select"
                  className="pl-4 border !border-grey-custom-2 !bg-white !rounded-[6px]"
                />
              )}
              name={"relationship"}
            />

            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <InputAtom
                  placeholder="e.g Turning 25th"
                  label="Interests"
                  onChange={onChange}
                  onBlur={onBlur}
                  value={value}
                  className="mb-4 !bg-grey-custom-4 !border-transparent px-4"
                />
              )}
              name={"interests"}
            />
            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <InputAtom
                  placeholder="e.g Turning 25th"
                  label="Occassion"
                  onChange={onChange}
                  onBlur={onBlur}
                  value={value}
                  className="mb-4 !bg-grey-custom-4 !border-transparent px-4"
                />
              )}
              name={"occassion"}
            />
            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextAreaAtom
                  placeholder="e.g Turning 25th"
                  label="Note"
                  onChange={onChange}
                  onBlur={onBlur}
                  value={value}
                  className="mb-4 !bg-grey-custom-4 !border-transparent px-4"
                />
              )}
              name={"note"}
            />
            <ButtonAtom
              title="Curate"
              type="submit"
              className="!bg-blue-custom-1 w-full"
            />
          </form>
        </div>
      )}
      <div>
        {step === 2 && (
          <div className="mt-6">
            <div className="grid sm:grid-cols-2 grid-cols-1 gap-6">
              {dummyGifts.map((gift, index) => (
                <CurateCardSelect
                  selected={giftTypes.includes(gift)}
                  handleSelect={() => handleSelectGift(gift)}
                  key={index}
                  name={gift}
                />
              ))}
            </div>
            <div className="flex justify-between items-center gap-5 mt-8">
              <ButtonAtom
                title="Cancel"
                type="reset"
                className="w-full !text-dark-custom-6 !font-medium"
              />
              <ButtonAtom
                title="Save"
                onClick={handleSave}
                className="!bg-blue-custom-1 w-full"
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
};
