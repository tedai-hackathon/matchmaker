/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Behandlung } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function BehandlungCreateForm(props) {
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
    ErfassungsZeitpunkt: "",
    InPegassusErfasst: "",
  };
  const [ErfassungsZeitpunkt, setErfassungsZeitpunkt] = React.useState(
    initialValues.ErfassungsZeitpunkt
  );
  const [InPegassusErfasst, setInPegassusErfasst] = React.useState(
    initialValues.InPegassusErfasst
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setErfassungsZeitpunkt(initialValues.ErfassungsZeitpunkt);
    setInPegassusErfasst(initialValues.InPegassusErfasst);
    setErrors({});
  };
  const validations = {
    ErfassungsZeitpunkt: [{ type: "Required" }],
    InPegassusErfasst: [],
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
  const convertToLocal = (date) => {
    const df = new Intl.DateTimeFormat("default", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      calendar: "iso8601",
      numberingSystem: "latn",
      hourCycle: "h23",
    });
    const parts = df.formatToParts(date).reduce((acc, part) => {
      acc[part.type] = part.value;
      return acc;
    }, {});
    return `${parts.year}-${parts.month}-${parts.day}T${parts.hour}:${parts.minute}`;
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
          ErfassungsZeitpunkt,
          InPegassusErfasst,
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
          await DataStore.save(new Behandlung(modelFields));
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
      {...getOverrideProps(overrides, "BehandlungCreateForm")}
      {...rest}
    >
      <TextField
        label="Erfassungs zeitpunkt"
        isRequired={true}
        isReadOnly={false}
        type="datetime-local"
        value={
          ErfassungsZeitpunkt && convertToLocal(new Date(ErfassungsZeitpunkt))
        }
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              ErfassungsZeitpunkt: value,
              InPegassusErfasst,
            };
            const result = onChange(modelFields);
            value = result?.ErfassungsZeitpunkt ?? value;
          }
          if (errors.ErfassungsZeitpunkt?.hasError) {
            runValidationTasks("ErfassungsZeitpunkt", value);
          }
          setErfassungsZeitpunkt(value);
        }}
        onBlur={() =>
          runValidationTasks("ErfassungsZeitpunkt", ErfassungsZeitpunkt)
        }
        errorMessage={errors.ErfassungsZeitpunkt?.errorMessage}
        hasError={errors.ErfassungsZeitpunkt?.hasError}
        {...getOverrideProps(overrides, "ErfassungsZeitpunkt")}
      ></TextField>
      <TextField
        label="In pegassus erfasst"
        isRequired={false}
        isReadOnly={false}
        type="datetime-local"
        value={InPegassusErfasst && convertToLocal(new Date(InPegassusErfasst))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              ErfassungsZeitpunkt,
              InPegassusErfasst: value,
            };
            const result = onChange(modelFields);
            value = result?.InPegassusErfasst ?? value;
          }
          if (errors.InPegassusErfasst?.hasError) {
            runValidationTasks("InPegassusErfasst", value);
          }
          setInPegassusErfasst(value);
        }}
        onBlur={() =>
          runValidationTasks("InPegassusErfasst", InPegassusErfasst)
        }
        errorMessage={errors.InPegassusErfasst?.errorMessage}
        hasError={errors.InPegassusErfasst?.hasError}
        {...getOverrideProps(overrides, "InPegassusErfasst")}
      ></TextField>
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
