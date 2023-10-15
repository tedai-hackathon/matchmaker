/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { TherapieEinsatzMittel } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function TherapieEinsatzMittelUpdateForm(props) {
  const {
    id: idProp,
    therapieEinsatzMittel: therapieEinsatzMittelModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    Bezeichnung: "",
    Menge: "",
    Einheit: "",
  };
  const [Bezeichnung, setBezeichnung] = React.useState(
    initialValues.Bezeichnung
  );
  const [Menge, setMenge] = React.useState(initialValues.Menge);
  const [Einheit, setEinheit] = React.useState(initialValues.Einheit);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = therapieEinsatzMittelRecord
      ? { ...initialValues, ...therapieEinsatzMittelRecord }
      : initialValues;
    setBezeichnung(cleanValues.Bezeichnung);
    setMenge(cleanValues.Menge);
    setEinheit(cleanValues.Einheit);
    setErrors({});
  };
  const [therapieEinsatzMittelRecord, setTherapieEinsatzMittelRecord] =
    React.useState(therapieEinsatzMittelModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(TherapieEinsatzMittel, idProp)
        : therapieEinsatzMittelModelProp;
      setTherapieEinsatzMittelRecord(record);
    };
    queryData();
  }, [idProp, therapieEinsatzMittelModelProp]);
  React.useEffect(resetStateValues, [therapieEinsatzMittelRecord]);
  const validations = {
    Bezeichnung: [],
    Menge: [],
    Einheit: [],
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
          Bezeichnung,
          Menge,
          Einheit,
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
            TherapieEinsatzMittel.copyOf(
              therapieEinsatzMittelRecord,
              (updated) => {
                Object.assign(updated, modelFields);
              }
            )
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
      {...getOverrideProps(overrides, "TherapieEinsatzMittelUpdateForm")}
      {...rest}
    >
      <TextField
        label="Bezeichnung"
        isRequired={false}
        isReadOnly={false}
        value={Bezeichnung}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Bezeichnung: value,
              Menge,
              Einheit,
            };
            const result = onChange(modelFields);
            value = result?.Bezeichnung ?? value;
          }
          if (errors.Bezeichnung?.hasError) {
            runValidationTasks("Bezeichnung", value);
          }
          setBezeichnung(value);
        }}
        onBlur={() => runValidationTasks("Bezeichnung", Bezeichnung)}
        errorMessage={errors.Bezeichnung?.errorMessage}
        hasError={errors.Bezeichnung?.hasError}
        {...getOverrideProps(overrides, "Bezeichnung")}
      ></TextField>
      <TextField
        label="Menge"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={Menge}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              Bezeichnung,
              Menge: value,
              Einheit,
            };
            const result = onChange(modelFields);
            value = result?.Menge ?? value;
          }
          if (errors.Menge?.hasError) {
            runValidationTasks("Menge", value);
          }
          setMenge(value);
        }}
        onBlur={() => runValidationTasks("Menge", Menge)}
        errorMessage={errors.Menge?.errorMessage}
        hasError={errors.Menge?.hasError}
        {...getOverrideProps(overrides, "Menge")}
      ></TextField>
      <TextField
        label="Einheit"
        isRequired={false}
        isReadOnly={false}
        value={Einheit}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Bezeichnung,
              Menge,
              Einheit: value,
            };
            const result = onChange(modelFields);
            value = result?.Einheit ?? value;
          }
          if (errors.Einheit?.hasError) {
            runValidationTasks("Einheit", value);
          }
          setEinheit(value);
        }}
        onBlur={() => runValidationTasks("Einheit", Einheit)}
        errorMessage={errors.Einheit?.errorMessage}
        hasError={errors.Einheit?.hasError}
        {...getOverrideProps(overrides, "Einheit")}
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
          isDisabled={!(idProp || therapieEinsatzMittelModelProp)}
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
              !(idProp || therapieEinsatzMittelModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
