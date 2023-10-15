/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { TherapieService } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function TherapieServiceUpdateForm(props) {
  const {
    id: idProp,
    therapieService: therapieServiceModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    Service: "",
  };
  const [Service, setService] = React.useState(initialValues.Service);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = therapieServiceRecord
      ? { ...initialValues, ...therapieServiceRecord }
      : initialValues;
    setService(cleanValues.Service);
    setErrors({});
  };
  const [therapieServiceRecord, setTherapieServiceRecord] = React.useState(
    therapieServiceModelProp
  );
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(TherapieService, idProp)
        : therapieServiceModelProp;
      setTherapieServiceRecord(record);
    };
    queryData();
  }, [idProp, therapieServiceModelProp]);
  React.useEffect(resetStateValues, [therapieServiceRecord]);
  const validations = {
    Service: [],
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
          Service,
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
            TherapieService.copyOf(therapieServiceRecord, (updated) => {
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
      {...getOverrideProps(overrides, "TherapieServiceUpdateForm")}
      {...rest}
    >
      <TextField
        label="Service"
        isRequired={false}
        isReadOnly={false}
        value={Service}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Service: value,
            };
            const result = onChange(modelFields);
            value = result?.Service ?? value;
          }
          if (errors.Service?.hasError) {
            runValidationTasks("Service", value);
          }
          setService(value);
        }}
        onBlur={() => runValidationTasks("Service", Service)}
        errorMessage={errors.Service?.errorMessage}
        hasError={errors.Service?.hasError}
        {...getOverrideProps(overrides, "Service")}
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
          isDisabled={!(idProp || therapieServiceModelProp)}
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
              !(idProp || therapieServiceModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
