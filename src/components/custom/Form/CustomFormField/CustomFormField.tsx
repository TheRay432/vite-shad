import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { FieldPath, FieldValues, UseFormReturn } from "react-hook-form";

interface CustomFormFieldProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> {
  name: TName;
  label: string;
  description?: string;
  validators?: Array<(v: string) => true | string>;
  form?: UseFormReturn<TFieldValues>;
  type?: "text" | "email" | "select" | "radio";
  options?: { label: string; value: string }[];
}

const combineValidators =
  (validators: Array<(v: string) => true | string>) => (value: string) => {
    for (let validator of validators) {
      const result = validator(value);
      if (typeof result === "string") return result;
    }
    return true;
  };

const CustomFormField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
  name,
  label,
  description,
  validators = [],
  form,
  type = "text",
  options = [],
}: CustomFormFieldProps<TFieldValues, TName>) => {
  if (!form) {
    throw new Error("CustomFormField must be used within a CustomForm");
  }

  const renderInput = (field: any) => {
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
        return <Input {...field} type={type}  />;
    }
  };

  return (
    <FormField
      control={form.control}
      name={name}
      rules={{
        validate: combineValidators(validators),
      }}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>{renderInput(field)}</FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default CustomFormField;
