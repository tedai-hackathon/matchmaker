/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SelectField,
  TextField,
} from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { PersonTitle } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function PersonTitleCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    Language: "",
    Title: "",
    Gender: "",
  };
  const [Language, setLanguage] = React.useState(initialValues.Language);
  const [Title, setTitle] = React.useState(initialValues.Title);
  const [Gender, setGender] = React.useState(initialValues.Gender);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setLanguage(initialValues.Language);
    setTitle(initialValues.Title);
    setGender(initialValues.Gender);
    setErrors({});
  };
  const validations = {
    Language: [],
    Title: [],
    Gender: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          Language,
          Title,
          Gender,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await DataStore.save(new PersonTitle(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "PersonTitleCreateForm")}
      {...rest}
    >
      <TextField
        label="Language"
        isRequired={false}
        isReadOnly={false}
        value={Language}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Language: value,
              Title,
              Gender,
            };
            const result = onChange(modelFields);
            value = result?.Language ?? value;
          }
          if (errors.Language?.hasError) {
            runValidationTasks("Language", value);
          }
          setLanguage(value);
        }}
        onBlur={() => runValidationTasks("Language", Language)}
        errorMessage={errors.Language?.errorMessage}
        hasError={errors.Language?.hasError}
        {...getOverrideProps(overrides, "Language")}
      ></TextField>
      <TextField
        label="Title"
        isRequired={false}
        isReadOnly={false}
        value={Title}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Language,
              Title: value,
              Gender,
            };
            const result = onChange(modelFields);
            value = result?.Title ?? value;
          }
          if (errors.Title?.hasError) {
            runValidationTasks("Title", value);
          }
          setTitle(value);
        }}
        onBlur={() => runValidationTasks("Title", Title)}
        errorMessage={errors.Title?.errorMessage}
        hasError={errors.Title?.hasError}
        {...getOverrideProps(overrides, "Title")}
      ></TextField>
      <SelectField
        label="Gender"
        placeholder="Please select an option"
        isDisabled={false}
        value={Gender}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Language,
              Title,
              Gender: value,
            };
            const result = onChange(modelFields);
            value = result?.Gender ?? value;
          }
          if (errors.Gender?.hasError) {
            runValidationTasks("Gender", value);
          }
          setGender(value);
        }}
        onBlur={() => runValidationTasks("Gender", Gender)}
        errorMessage={errors.Gender?.errorMessage}
        hasError={errors.Gender?.hasError}
        {...getOverrideProps(overrides, "Gender")}
      >
        <option
          children="Male"
          value="MALE"
          {...getOverrideProps(overrides, "Genderoption0")}
        ></option>
        <option
          children="Female"
          value="FEMALE"
          {...getOverrideProps(overrides, "Genderoption1")}
        ></option>
        <option
          children="Nonbinary"
          value="NONBINARY"
          {...getOverrideProps(overrides, "Genderoption2")}
        ></option>
        <option
          children="Genderqueer"
          value="GENDERQUEER"
          {...getOverrideProps(overrides, "Genderoption3")}
        ></option>
        <option
          children="Genderfluid"
          value="GENDERFLUID"
          {...getOverrideProps(overrides, "Genderoption4")}
        ></option>
        <option
          children="Agender"
          value="AGENDER"
          {...getOverrideProps(overrides, "Genderoption5")}
        ></option>
        <option
          children="Bigender"
          value="BIGENDER"
          {...getOverrideProps(overrides, "Genderoption6")}
        ></option>
      </SelectField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
