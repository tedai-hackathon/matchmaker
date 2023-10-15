/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { KundenTermin } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function KundenTerminCreateForm(props) {
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
    KundenName: "",
    KundenAnfrage: "",
    TerminVreinbarung: "",
    OrtsVereinbarung: "",
    AertztlicherVorbericht: "",
    NotwendigeVorbereitungenIds: "",
  };
  const [KundenName, setKundenName] = React.useState(initialValues.KundenName);
  const [KundenAnfrage, setKundenAnfrage] = React.useState(
    initialValues.KundenAnfrage
  );
  const [TerminVreinbarung, setTerminVreinbarung] = React.useState(
    initialValues.TerminVreinbarung
  );
  const [OrtsVereinbarung, setOrtsVereinbarung] = React.useState(
    initialValues.OrtsVereinbarung
  );
  const [AertztlicherVorbericht, setAertztlicherVorbericht] = React.useState(
    initialValues.AertztlicherVorbericht
  );
  const [NotwendigeVorbereitungenIds, setNotwendigeVorbereitungenIds] =
    React.useState(initialValues.NotwendigeVorbereitungenIds);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setKundenName(initialValues.KundenName);
    setKundenAnfrage(initialValues.KundenAnfrage);
    setTerminVreinbarung(initialValues.TerminVreinbarung);
    setOrtsVereinbarung(initialValues.OrtsVereinbarung);
    setAertztlicherVorbericht(initialValues.AertztlicherVorbericht);
    setNotwendigeVorbereitungenIds(initialValues.NotwendigeVorbereitungenIds);
    setErrors({});
  };
  const validations = {
    KundenName: [],
    KundenAnfrage: [],
    TerminVreinbarung: [],
    OrtsVereinbarung: [],
    AertztlicherVorbericht: [],
    NotwendigeVorbereitungenIds: [],
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
          KundenName,
          KundenAnfrage,
          TerminVreinbarung,
          OrtsVereinbarung,
          AertztlicherVorbericht,
          NotwendigeVorbereitungenIds,
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
          await DataStore.save(new KundenTermin(modelFields));
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
      {...getOverrideProps(overrides, "KundenTerminCreateForm")}
      {...rest}
    >
      <TextField
        label="Kunden name"
        isRequired={false}
        isReadOnly={false}
        value={KundenName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              KundenName: value,
              KundenAnfrage,
              TerminVreinbarung,
              OrtsVereinbarung,
              AertztlicherVorbericht,
              NotwendigeVorbereitungenIds,
            };
            const result = onChange(modelFields);
            value = result?.KundenName ?? value;
          }
          if (errors.KundenName?.hasError) {
            runValidationTasks("KundenName", value);
          }
          setKundenName(value);
        }}
        onBlur={() => runValidationTasks("KundenName", KundenName)}
        errorMessage={errors.KundenName?.errorMessage}
        hasError={errors.KundenName?.hasError}
        {...getOverrideProps(overrides, "KundenName")}
      ></TextField>
      <TextField
        label="Kunden anfrage"
        isRequired={false}
        isReadOnly={false}
        value={KundenAnfrage}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              KundenName,
              KundenAnfrage: value,
              TerminVreinbarung,
              OrtsVereinbarung,
              AertztlicherVorbericht,
              NotwendigeVorbereitungenIds,
            };
            const result = onChange(modelFields);
            value = result?.KundenAnfrage ?? value;
          }
          if (errors.KundenAnfrage?.hasError) {
            runValidationTasks("KundenAnfrage", value);
          }
          setKundenAnfrage(value);
        }}
        onBlur={() => runValidationTasks("KundenAnfrage", KundenAnfrage)}
        errorMessage={errors.KundenAnfrage?.errorMessage}
        hasError={errors.KundenAnfrage?.hasError}
        {...getOverrideProps(overrides, "KundenAnfrage")}
      ></TextField>
      <TextField
        label="Termin vreinbarung"
        isRequired={false}
        isReadOnly={false}
        type="datetime-local"
        value={TerminVreinbarung && convertToLocal(new Date(TerminVreinbarung))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              KundenName,
              KundenAnfrage,
              TerminVreinbarung: value,
              OrtsVereinbarung,
              AertztlicherVorbericht,
              NotwendigeVorbereitungenIds,
            };
            const result = onChange(modelFields);
            value = result?.TerminVreinbarung ?? value;
          }
          if (errors.TerminVreinbarung?.hasError) {
            runValidationTasks("TerminVreinbarung", value);
          }
          setTerminVreinbarung(value);
        }}
        onBlur={() =>
          runValidationTasks("TerminVreinbarung", TerminVreinbarung)
        }
        errorMessage={errors.TerminVreinbarung?.errorMessage}
        hasError={errors.TerminVreinbarung?.hasError}
        {...getOverrideProps(overrides, "TerminVreinbarung")}
      ></TextField>
      <TextField
        label="Orts vereinbarung"
        isRequired={false}
        isReadOnly={false}
        value={OrtsVereinbarung}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              KundenName,
              KundenAnfrage,
              TerminVreinbarung,
              OrtsVereinbarung: value,
              AertztlicherVorbericht,
              NotwendigeVorbereitungenIds,
            };
            const result = onChange(modelFields);
            value = result?.OrtsVereinbarung ?? value;
          }
          if (errors.OrtsVereinbarung?.hasError) {
            runValidationTasks("OrtsVereinbarung", value);
          }
          setOrtsVereinbarung(value);
        }}
        onBlur={() => runValidationTasks("OrtsVereinbarung", OrtsVereinbarung)}
        errorMessage={errors.OrtsVereinbarung?.errorMessage}
        hasError={errors.OrtsVereinbarung?.hasError}
        {...getOverrideProps(overrides, "OrtsVereinbarung")}
      ></TextField>
      <TextField
        label="Aertztlicher vorbericht"
        isRequired={false}
        isReadOnly={false}
        value={AertztlicherVorbericht}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              KundenName,
              KundenAnfrage,
              TerminVreinbarung,
              OrtsVereinbarung,
              AertztlicherVorbericht: value,
              NotwendigeVorbereitungenIds,
            };
            const result = onChange(modelFields);
            value = result?.AertztlicherVorbericht ?? value;
          }
          if (errors.AertztlicherVorbericht?.hasError) {
            runValidationTasks("AertztlicherVorbericht", value);
          }
          setAertztlicherVorbericht(value);
        }}
        onBlur={() =>
          runValidationTasks("AertztlicherVorbericht", AertztlicherVorbericht)
        }
        errorMessage={errors.AertztlicherVorbericht?.errorMessage}
        hasError={errors.AertztlicherVorbericht?.hasError}
        {...getOverrideProps(overrides, "AertztlicherVorbericht")}
      ></TextField>
      <TextField
        label="Notwendige vorbereitungen ids"
        isRequired={false}
        isReadOnly={false}
        value={NotwendigeVorbereitungenIds}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              KundenName,
              KundenAnfrage,
              TerminVreinbarung,
              OrtsVereinbarung,
              AertztlicherVorbericht,
              NotwendigeVorbereitungenIds: value,
            };
            const result = onChange(modelFields);
            value = result?.NotwendigeVorbereitungenIds ?? value;
          }
          if (errors.NotwendigeVorbereitungenIds?.hasError) {
            runValidationTasks("NotwendigeVorbereitungenIds", value);
          }
          setNotwendigeVorbereitungenIds(value);
        }}
        onBlur={() =>
          runValidationTasks(
            "NotwendigeVorbereitungenIds",
            NotwendigeVorbereitungenIds
          )
        }
        errorMessage={errors.NotwendigeVorbereitungenIds?.errorMessage}
        hasError={errors.NotwendigeVorbereitungenIds?.hasError}
        {...getOverrideProps(overrides, "NotwendigeVorbereitungenIds")}
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
