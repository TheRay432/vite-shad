import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import useRenderField from "@/hooks/Form/useRenderField";
import { useEffect } from "react";
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
    for (const validator of validators) {
      const result = validator(value);
      if (typeof result === "string") return result;
    }
    return true;
  };

const RFormField = <
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
  useEffect(() => {
    if (!form) {
      throw new Error("CustomFormField must be used within a CustomForm");
    }
  }, [form]);
  const { renderInput } = useRenderField<TFieldValues>({ type, options });


  return (
    <>
    {form && (
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
    )}
    </>
  );
};

export default RFormField;
