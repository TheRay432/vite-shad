import React from "react";
import { DefaultValues } from "react-hook-form";
import SearchCondition from "@/pages/Search/components/SearchCondition";
import CustomForm from "@/components/custom/Form/CustomForm/CustomForm";
import CustomFormField from "@/components/custom/Form/CustomFormField/CustomFormField";

interface FormValues {
  username: string;
  email: string;
}

const Search: React.FC = () => {
  const validateNotEmpty = (errorMessage: string) => (value: string) => {
    if (value === undefined || value === null || value === "") {
      return errorMessage;
    }
    return true;
  };

  const validateLength = (min: number, max: number) => (value: string) => {
    if (typeof value !== "string") {
      return `Value must be a string`;
    }
    if (value.length < min || value.length > max) {
      return `Length must be between ${min} and ${max} characters`;
    }
    return true;
  };
  const list = [
    validateNotEmpty("Username is required"),
    validateLength(3, 20),
  ];
  const defaultValues: DefaultValues<FormValues> = {
    username: "123",
    email: "",
  };
  const onSubmit = (data: FormValues) => {
    console.log(data);
    // alert("Form submitted: " + JSON.stringify(data));
  };
  return (
    <div className="flex items-baseline">
      {/* 條件篩選 */}
      <div className="w-1/3">
        <SearchCondition />
      </div>
      {/* 產品列表 */}
      <div className="w-2/3">
        <CustomForm onSubmit={onSubmit} defaultValues={defaultValues} >
          <CustomFormField
            name="username"
            label="Username"
            description="This is your public display name."
            validators={list}
          />
          <CustomFormField
            name="email"
            label="Email"
            type="text"
            validators={list}
          />
        </CustomForm>
      </div>
    </div>
  );
};

export default Search;
