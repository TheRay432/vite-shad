import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import React, { ReactElement } from "react";
import { DefaultValues, FieldValues, useForm } from "react-hook-form";

// Custom Form component
interface CustomFormProps<T extends FieldValues = FieldValues> {
  onSubmit: (data: T) => void;
  children: ReactElement | ReactElement[];
  defaultValues?: DefaultValues<T>;
}
const CustomForm = <T extends FieldValues = FieldValues>({
  onSubmit,
  children,
  defaultValues
}: CustomFormProps<T>) => {
  const form = useForm<T>({defaultValues});

  const handleSubmit = (data: T) => {
    onSubmit(data);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
        {React.Children.map(children, (child) => {
          return React.cloneElement(child, { form });
        })}
        <Button type="submit" className="w-full">
          Submit
        </Button>
      </form>
    </Form>
  );
};

export default CustomForm;
