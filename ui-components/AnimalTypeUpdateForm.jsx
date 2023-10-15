/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { AnimalType } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function AnimalTypeUpdateForm(props) {
  const {
    id: idProp,
    animalType: animalTypeModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    TypeName: "",
  };
  const [TypeName, setTypeName] = React.useState(initialValues.TypeName);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = animalTypeRecord
      ? { ...initialValues, ...animalTypeRecord }
      : initialValues;
    setTypeName(cleanValues.TypeName);
    setErrors({});
  };
  const [animalTypeRecord, setAnimalTypeRecord] =
    React.useState(animalTypeModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(AnimalType, idProp)
        : animalTypeModelProp;
      setAnimalTypeRecord(record);
    };
    queryData();
  }, [idProp, animalTypeModelProp]);
  React.useEffect(resetStateValues, [animalTypeRecord]);
  const validations = {
    TypeName: [{ type: "Required" }],
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
          TypeName,
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
          await DataStore.save(
            AnimalType.copyOf(animalTypeRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "AnimalTypeUpdateForm")}
      {...rest}
    >
      <TextField
        label="Type name"
        isRequired={true}
        isReadOnly={false}
        value={TypeName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              TypeName: value,
            };
            const result = onChange(modelFields);
            value = result?.TypeName ?? value;
          }
          if (errors.TypeName?.hasError) {
            runValidationTasks("TypeName", value);
          }
          setTypeName(value);
        }}
        onBlur={() => runValidationTasks("TypeName", TypeName)}
        errorMessage={errors.TypeName?.errorMessage}
        hasError={errors.TypeName?.hasError}
        {...getOverrideProps(overrides, "TypeName")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || animalTypeModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || animalTypeModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
