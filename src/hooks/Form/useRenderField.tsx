import { Input } from "@/components/ui/input";
import { ControllerRenderProps, FieldPath, FieldValues } from "react-hook-form";

type InputType = "text" | "email" | "select" | "radio";
type Option = { label: string; value: string };


interface UseRenderInputProps<T extends FieldValues> {
  type: InputType;
  options?: Option[];
}

const useRenderField = <T extends FieldValues>({
  type,
  options = [],
}: UseRenderInputProps<T>) => {
  const renderInput = (field: ControllerRenderProps<T, FieldPath<T>>) => {
    switch (type) {
      case "select":
        return (
          // <Select onValueChange={field.onChange} defaultValue={field.value}>
          //   <SelectTrigger>
          //     <SelectValue placeholder="Select an option" />
          //   </SelectTrigger>
          //   <SelectContent>
          //     {options.map((option) => (
          //       <SelectItem key={option.value} value={option.value}>
          //         {option.label}
          //       </SelectItem>
          //     ))}
          //   </SelectContent>
          // </Select>
          <></>
        );
      case "radio":
        return (
          // <RadioGroup onValueChange={field.onChange} defaultValue={field.value}>
          //   {options.map((option) => (
          //     <div key={option.value} className="flex items-center space-x-2">
          //       <RadioGroupItem value={option.value} id={option.value} />
          //       <label htmlFor={option.value}>{option.label}</label>
          //     </div>
          //   ))}
          // </RadioGroup>
          <></>
        );
      default:
        return <Input {...field} type={type} />;
    }
  };
  return {renderInput}
};

export default useRenderField;
