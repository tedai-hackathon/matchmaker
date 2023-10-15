/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Diagnose as Diagnose0 } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function DiagnoseUpdateForm(props) {
  const {
    id: idProp,
    diagnose: diagnoseModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    Diagnose: "",
  };
  const [diagnose, setDiagnose] = React.useState(initialValues.Diagnose);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = diagnoseRecord
      ? { ...initialValues, ...diagnoseRecord }
      : initialValues;
    setDiagnose(cleanValues.Diagnose);
    setErrors({});
  };
  const [diagnoseRecord, setDiagnoseRecord] = React.useState(diagnoseModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Diagnose0, idProp)
        : diagnoseModelProp;
      setDiagnoseRecord(record);
    };
    queryData();
  }, [idProp, diagnoseModelProp]);
  React.useEffect(resetStateValues, [diagnoseRecord]);
  const validations = {
    Diagnose: [],
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
          Diagnose: diagnose,
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
            Diagnose0.copyOf(diagnoseRecord, (updated) => {
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
      {...getOverrideProps(overrides, "DiagnoseUpdateForm")}
      {...rest}
    >
      <TextField
        label="Diagnose"
        isRequired={false}
        isReadOnly={false}
        value={diagnose}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Diagnose: value,
            };
            const result = onChange(modelFields);
            value = result?.Diagnose ?? value;
          }
          if (errors.Diagnose?.hasError) {
            runValidationTasks("Diagnose", value);
          }
          setDiagnose(value);
        }}
        onBlur={() => runValidationTasks("Diagnose", diagnose)}
        errorMessage={errors.Diagnose?.errorMessage}
        hasError={errors.Diagnose?.hasError}
        {...getOverrideProps(overrides, "Diagnose")}
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
          isDisabled={!(idProp || diagnoseModelProp)}
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
              !(idProp || diagnoseModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
