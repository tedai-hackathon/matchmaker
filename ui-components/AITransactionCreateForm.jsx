/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { AITransaction } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function AITransactionCreateForm(props) {
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
    AIServiceID: "",
    AIModelID: "",
    RequestJSON: "",
    RequestDateTime: "",
    ResponseJSON: "",
    ResponseDateTime: "",
  };
  const [AIServiceID, setAIServiceID] = React.useState(
    initialValues.AIServiceID
  );
  const [AIModelID, setAIModelID] = React.useState(initialValues.AIModelID);
  const [RequestJSON, setRequestJSON] = React.useState(
    initialValues.RequestJSON
  );
  const [RequestDateTime, setRequestDateTime] = React.useState(
    initialValues.RequestDateTime
  );
  const [ResponseJSON, setResponseJSON] = React.useState(
    initialValues.ResponseJSON
  );
  const [ResponseDateTime, setResponseDateTime] = React.useState(
    initialValues.ResponseDateTime
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setAIServiceID(initialValues.AIServiceID);
    setAIModelID(initialValues.AIModelID);
    setRequestJSON(initialValues.RequestJSON);
    setRequestDateTime(initialValues.RequestDateTime);
    setResponseJSON(initialValues.ResponseJSON);
    setResponseDateTime(initialValues.ResponseDateTime);
    setErrors({});
  };
  const validations = {
    AIServiceID: [{ type: "Required" }],
    AIModelID: [{ type: "Required" }],
    RequestJSON: [{ type: "Required" }],
    RequestDateTime: [{ type: "Required" }],
    ResponseJSON: [{ type: "Required" }],
    ResponseDateTime: [{ type: "Required" }],
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
          AIServiceID,
          AIModelID,
          RequestJSON,
          RequestDateTime,
          ResponseJSON,
          ResponseDateTime,
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
          await DataStore.save(new AITransaction(modelFields));
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
      {...getOverrideProps(overrides, "AITransactionCreateForm")}
      {...rest}
    >
      <TextField
        label="Ai service id"
        isRequired={true}
        isReadOnly={false}
        value={AIServiceID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              AIServiceID: value,
              AIModelID,
              RequestJSON,
              RequestDateTime,
              ResponseJSON,
              ResponseDateTime,
            };
            const result = onChange(modelFields);
            value = result?.AIServiceID ?? value;
          }
          if (errors.AIServiceID?.hasError) {
            runValidationTasks("AIServiceID", value);
          }
          setAIServiceID(value);
        }}
        onBlur={() => runValidationTasks("AIServiceID", AIServiceID)}
        errorMessage={errors.AIServiceID?.errorMessage}
        hasError={errors.AIServiceID?.hasError}
        {...getOverrideProps(overrides, "AIServiceID")}
      ></TextField>
      <TextField
        label="Ai model id"
        isRequired={true}
        isReadOnly={false}
        value={AIModelID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              AIServiceID,
              AIModelID: value,
              RequestJSON,
              RequestDateTime,
              ResponseJSON,
              ResponseDateTime,
            };
            const result = onChange(modelFields);
            value = result?.AIModelID ?? value;
          }
          if (errors.AIModelID?.hasError) {
            runValidationTasks("AIModelID", value);
          }
          setAIModelID(value);
        }}
        onBlur={() => runValidationTasks("AIModelID", AIModelID)}
        errorMessage={errors.AIModelID?.errorMessage}
        hasError={errors.AIModelID?.hasError}
        {...getOverrideProps(overrides, "AIModelID")}
      ></TextField>
      <TextField
        label="Request json"
        isRequired={true}
        isReadOnly={false}
        value={RequestJSON}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              AIServiceID,
              AIModelID,
              RequestJSON: value,
              RequestDateTime,
              ResponseJSON,
              ResponseDateTime,
            };
            const result = onChange(modelFields);
            value = result?.RequestJSON ?? value;
          }
          if (errors.RequestJSON?.hasError) {
            runValidationTasks("RequestJSON", value);
          }
          setRequestJSON(value);
        }}
        onBlur={() => runValidationTasks("RequestJSON", RequestJSON)}
        errorMessage={errors.RequestJSON?.errorMessage}
        hasError={errors.RequestJSON?.hasError}
        {...getOverrideProps(overrides, "RequestJSON")}
      ></TextField>
      <TextField
        label="Request date time"
        isRequired={true}
        isReadOnly={false}
        type="datetime-local"
        value={RequestDateTime && convertToLocal(new Date(RequestDateTime))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              AIServiceID,
              AIModelID,
              RequestJSON,
              RequestDateTime: value,
              ResponseJSON,
              ResponseDateTime,
            };
            const result = onChange(modelFields);
            value = result?.RequestDateTime ?? value;
          }
          if (errors.RequestDateTime?.hasError) {
            runValidationTasks("RequestDateTime", value);
          }
          setRequestDateTime(value);
        }}
        onBlur={() => runValidationTasks("RequestDateTime", RequestDateTime)}
        errorMessage={errors.RequestDateTime?.errorMessage}
        hasError={errors.RequestDateTime?.hasError}
        {...getOverrideProps(overrides, "RequestDateTime")}
      ></TextField>
      <TextField
        label="Response json"
        isRequired={true}
        isReadOnly={false}
        value={ResponseJSON}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              AIServiceID,
              AIModelID,
              RequestJSON,
              RequestDateTime,
              ResponseJSON: value,
              ResponseDateTime,
            };
            const result = onChange(modelFields);
            value = result?.ResponseJSON ?? value;
          }
          if (errors.ResponseJSON?.hasError) {
            runValidationTasks("ResponseJSON", value);
          }
          setResponseJSON(value);
        }}
        onBlur={() => runValidationTasks("ResponseJSON", ResponseJSON)}
        errorMessage={errors.ResponseJSON?.errorMessage}
        hasError={errors.ResponseJSON?.hasError}
        {...getOverrideProps(overrides, "ResponseJSON")}
      ></TextField>
      <TextField
        label="Response date time"
        isRequired={true}
        isReadOnly={false}
        type="datetime-local"
        value={ResponseDateTime && convertToLocal(new Date(ResponseDateTime))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              AIServiceID,
              AIModelID,
              RequestJSON,
              RequestDateTime,
              ResponseJSON,
              ResponseDateTime: value,
            };
            const result = onChange(modelFields);
            value = result?.ResponseDateTime ?? value;
          }
          if (errors.ResponseDateTime?.hasError) {
            runValidationTasks("ResponseDateTime", value);
          }
          setResponseDateTime(value);
        }}
        onBlur={() => runValidationTasks("ResponseDateTime", ResponseDateTime)}
        errorMessage={errors.ResponseDateTime?.errorMessage}
        hasError={errors.ResponseDateTime?.hasError}
        {...getOverrideProps(overrides, "ResponseDateTime")}
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
