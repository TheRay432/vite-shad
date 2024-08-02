import { Checkbox } from "@/components/ui/checkbox";
import React from "react";

interface RCheckboxProps {
  id: string;
  labelName: string
}
const RCheckbox: React.FC<RCheckboxProps> = ({id, labelName}) => {
  return (
    <>
      <div className="flex items-center cursor-pointer">
        <Checkbox id={id} />
        <label
          htmlFor={id}
          className="text-sm font-medium leading-none ml-2 cursor-pointer"
        >
          {labelName}
        </label>
      </div>
    </>
  );
};

export default RCheckbox;
