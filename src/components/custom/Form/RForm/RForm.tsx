import { Form } from "@/components/ui/form";
import { ReactElement } from "react";
import { DefaultValues, FieldValues, useForm, UseFormReturn } from "react-hook-form";

// Custom Form component
interface CustomFormProps<T extends FieldValues = FieldValues> {
  onSubmit: (data: T) => void;
  children: (form: UseFormReturn<T>) => ReactElement | ReactElement[];
  defaultValues?: DefaultValues<T>;
}
const RForm = <T extends FieldValues = FieldValues>({
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
       {children(form)}
      </form>
    </Form>
  );
};

export default RForm;
