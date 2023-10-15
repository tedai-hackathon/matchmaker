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
  SwitchField,
  TextField,
} from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Reminder } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function ReminderUpdateForm(props) {
  const {
    id: idProp,
    reminder: reminderModelProp,
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
    Thema: "",
    Termin: "",
    Details: "",
    Done: false,
  };
  const [ErfassungsZeitpunkt, setErfassungsZeitpunkt] = React.useState(
    initialValues.ErfassungsZeitpunkt
  );
  const [Thema, setThema] = React.useState(initialValues.Thema);
  const [Termin, setTermin] = React.useState(initialValues.Termin);
  const [Details, setDetails] = React.useState(initialValues.Details);
  const [Done, setDone] = React.useState(initialValues.Done);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = reminderRecord
      ? { ...initialValues, ...reminderRecord }
      : initialValues;
    setErfassungsZeitpunkt(cleanValues.ErfassungsZeitpunkt);
    setThema(cleanValues.Thema);
    setTermin(cleanValues.Termin);
    setDetails(cleanValues.Details);
    setDone(cleanValues.Done);
    setErrors({});
  };
  const [reminderRecord, setReminderRecord] = React.useState(reminderModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Reminder, idProp)
        : reminderModelProp;
      setReminderRecord(record);
    };
    queryData();
  }, [idProp, reminderModelProp]);
  React.useEffect(resetStateValues, [reminderRecord]);
  const validations = {
    ErfassungsZeitpunkt: [{ type: "Required" }],
    Thema: [{ type: "Required" }],
    Termin: [{ type: "Required" }],
    Details: [{ type: "Required" }],
    Done: [{ type: "Required" }],
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
          Thema,
          Termin,
          Details,
          Done,
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
            Reminder.copyOf(reminderRecord, (updated) => {
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
      {...getOverrideProps(overrides, "ReminderUpdateForm")}
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
              Thema,
              Termin,
              Details,
              Done,
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
        label="Thema"
        isRequired={true}
        isReadOnly={false}
        value={Thema}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ErfassungsZeitpunkt,
              Thema: value,
              Termin,
              Details,
              Done,
            };
            const result = onChange(modelFields);
            value = result?.Thema ?? value;
          }
          if (errors.Thema?.hasError) {
            runValidationTasks("Thema", value);
          }
          setThema(value);
        }}
        onBlur={() => runValidationTasks("Thema", Thema)}
        errorMessage={errors.Thema?.errorMessage}
        hasError={errors.Thema?.hasError}
        {...getOverrideProps(overrides, "Thema")}
      ></TextField>
      <TextField
        label="Termin"
        isRequired={true}
        isReadOnly={false}
        type="datetime-local"
        value={Termin && convertToLocal(new Date(Termin))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              ErfassungsZeitpunkt,
              Thema,
              Termin: value,
              Details,
              Done,
            };
            const result = onChange(modelFields);
            value = result?.Termin ?? value;
          }
          if (errors.Termin?.hasError) {
            runValidationTasks("Termin", value);
          }
          setTermin(value);
        }}
        onBlur={() => runValidationTasks("Termin", Termin)}
        errorMessage={errors.Termin?.errorMessage}
        hasError={errors.Termin?.hasError}
        {...getOverrideProps(overrides, "Termin")}
      ></TextField>
      <TextField
        label="Details"
        isRequired={true}
        isReadOnly={false}
        value={Details}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ErfassungsZeitpunkt,
              Thema,
              Termin,
              Details: value,
              Done,
            };
            const result = onChange(modelFields);
            value = result?.Details ?? value;
          }
          if (errors.Details?.hasError) {
            runValidationTasks("Details", value);
          }
          setDetails(value);
        }}
        onBlur={() => runValidationTasks("Details", Details)}
        errorMessage={errors.Details?.errorMessage}
        hasError={errors.Details?.hasError}
        {...getOverrideProps(overrides, "Details")}
      ></TextField>
      <SwitchField
        label="Done"
        defaultChecked={false}
        isDisabled={false}
        isChecked={Done}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              ErfassungsZeitpunkt,
              Thema,
              Termin,
              Details,
              Done: value,
            };
            const result = onChange(modelFields);
            value = result?.Done ?? value;
          }
          if (errors.Done?.hasError) {
            runValidationTasks("Done", value);
          }
          setDone(value);
        }}
        onBlur={() => runValidationTasks("Done", Done)}
        errorMessage={errors.Done?.errorMessage}
        hasError={errors.Done?.hasError}
        {...getOverrideProps(overrides, "Done")}
      ></SwitchField>
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
          isDisabled={!(idProp || reminderModelProp)}
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
              !(idProp || reminderModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
