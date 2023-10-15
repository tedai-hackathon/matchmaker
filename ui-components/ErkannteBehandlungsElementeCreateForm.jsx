/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { ErkannteBehandlungsElemente } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function ErkannteBehandlungsElementeCreateForm(props) {
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
    Kunde: "",
    Tiere: "",
    Vorbericht: "",
    Befunde: "",
    Diagnosen: "",
    TherapieMassnahmen: "",
    VerwendeteTherapieMittel: "",
    AbgegebeneTherapieMittel: "",
    InPegassusErfasst: "",
  };
  const [ErfassungsZeitpunkt, setErfassungsZeitpunkt] = React.useState(
    initialValues.ErfassungsZeitpunkt
  );
  const [Kunde, setKunde] = React.useState(initialValues.Kunde);
  const [Tiere, setTiere] = React.useState(initialValues.Tiere);
  const [Vorbericht, setVorbericht] = React.useState(initialValues.Vorbericht);
  const [Befunde, setBefunde] = React.useState(initialValues.Befunde);
  const [Diagnosen, setDiagnosen] = React.useState(initialValues.Diagnosen);
  const [TherapieMassnahmen, setTherapieMassnahmen] = React.useState(
    initialValues.TherapieMassnahmen
  );
  const [VerwendeteTherapieMittel, setVerwendeteTherapieMittel] =
    React.useState(initialValues.VerwendeteTherapieMittel);
  const [AbgegebeneTherapieMittel, setAbgegebeneTherapieMittel] =
    React.useState(initialValues.AbgegebeneTherapieMittel);
  const [InPegassusErfasst, setInPegassusErfasst] = React.useState(
    initialValues.InPegassusErfasst
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setErfassungsZeitpunkt(initialValues.ErfassungsZeitpunkt);
    setKunde(initialValues.Kunde);
    setTiere(initialValues.Tiere);
    setVorbericht(initialValues.Vorbericht);
    setBefunde(initialValues.Befunde);
    setDiagnosen(initialValues.Diagnosen);
    setTherapieMassnahmen(initialValues.TherapieMassnahmen);
    setVerwendeteTherapieMittel(initialValues.VerwendeteTherapieMittel);
    setAbgegebeneTherapieMittel(initialValues.AbgegebeneTherapieMittel);
    setInPegassusErfasst(initialValues.InPegassusErfasst);
    setErrors({});
  };
  const validations = {
    ErfassungsZeitpunkt: [{ type: "Required" }],
    Kunde: [],
    Tiere: [],
    Vorbericht: [],
    Befunde: [],
    Diagnosen: [],
    TherapieMassnahmen: [],
    VerwendeteTherapieMittel: [],
    AbgegebeneTherapieMittel: [],
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
          Kunde,
          Tiere,
          Vorbericht,
          Befunde,
          Diagnosen,
          TherapieMassnahmen,
          VerwendeteTherapieMittel,
          AbgegebeneTherapieMittel,
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
          await DataStore.save(new ErkannteBehandlungsElemente(modelFields));
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
      {...getOverrideProps(overrides, "ErkannteBehandlungsElementeCreateForm")}
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
              Kunde,
              Tiere,
              Vorbericht,
              Befunde,
              Diagnosen,
              TherapieMassnahmen,
              VerwendeteTherapieMittel,
              AbgegebeneTherapieMittel,
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
        label="Kunde"
        isRequired={false}
        isReadOnly={false}
        value={Kunde}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ErfassungsZeitpunkt,
              Kunde: value,
              Tiere,
              Vorbericht,
              Befunde,
              Diagnosen,
              TherapieMassnahmen,
              VerwendeteTherapieMittel,
              AbgegebeneTherapieMittel,
              InPegassusErfasst,
            };
            const result = onChange(modelFields);
            value = result?.Kunde ?? value;
          }
          if (errors.Kunde?.hasError) {
            runValidationTasks("Kunde", value);
          }
          setKunde(value);
        }}
        onBlur={() => runValidationTasks("Kunde", Kunde)}
        errorMessage={errors.Kunde?.errorMessage}
        hasError={errors.Kunde?.hasError}
        {...getOverrideProps(overrides, "Kunde")}
      ></TextField>
      <TextField
        label="Tiere"
        isRequired={false}
        isReadOnly={false}
        value={Tiere}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ErfassungsZeitpunkt,
              Kunde,
              Tiere: value,
              Vorbericht,
              Befunde,
              Diagnosen,
              TherapieMassnahmen,
              VerwendeteTherapieMittel,
              AbgegebeneTherapieMittel,
              InPegassusErfasst,
            };
            const result = onChange(modelFields);
            value = result?.Tiere ?? value;
          }
          if (errors.Tiere?.hasError) {
            runValidationTasks("Tiere", value);
          }
          setTiere(value);
        }}
        onBlur={() => runValidationTasks("Tiere", Tiere)}
        errorMessage={errors.Tiere?.errorMessage}
        hasError={errors.Tiere?.hasError}
        {...getOverrideProps(overrides, "Tiere")}
      ></TextField>
      <TextField
        label="Vorbericht"
        isRequired={false}
        isReadOnly={false}
        value={Vorbericht}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ErfassungsZeitpunkt,
              Kunde,
              Tiere,
              Vorbericht: value,
              Befunde,
              Diagnosen,
              TherapieMassnahmen,
              VerwendeteTherapieMittel,
              AbgegebeneTherapieMittel,
              InPegassusErfasst,
            };
            const result = onChange(modelFields);
            value = result?.Vorbericht ?? value;
          }
          if (errors.Vorbericht?.hasError) {
            runValidationTasks("Vorbericht", value);
          }
          setVorbericht(value);
        }}
        onBlur={() => runValidationTasks("Vorbericht", Vorbericht)}
        errorMessage={errors.Vorbericht?.errorMessage}
        hasError={errors.Vorbericht?.hasError}
        {...getOverrideProps(overrides, "Vorbericht")}
      ></TextField>
      <TextField
        label="Befunde"
        isRequired={false}
        isReadOnly={false}
        value={Befunde}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ErfassungsZeitpunkt,
              Kunde,
              Tiere,
              Vorbericht,
              Befunde: value,
              Diagnosen,
              TherapieMassnahmen,
              VerwendeteTherapieMittel,
              AbgegebeneTherapieMittel,
              InPegassusErfasst,
            };
            const result = onChange(modelFields);
            value = result?.Befunde ?? value;
          }
          if (errors.Befunde?.hasError) {
            runValidationTasks("Befunde", value);
          }
          setBefunde(value);
        }}
        onBlur={() => runValidationTasks("Befunde", Befunde)}
        errorMessage={errors.Befunde?.errorMessage}
        hasError={errors.Befunde?.hasError}
        {...getOverrideProps(overrides, "Befunde")}
      ></TextField>
      <TextField
        label="Diagnosen"
        isRequired={false}
        isReadOnly={false}
        value={Diagnosen}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ErfassungsZeitpunkt,
              Kunde,
              Tiere,
              Vorbericht,
              Befunde,
              Diagnosen: value,
              TherapieMassnahmen,
              VerwendeteTherapieMittel,
              AbgegebeneTherapieMittel,
              InPegassusErfasst,
            };
            const result = onChange(modelFields);
            value = result?.Diagnosen ?? value;
          }
          if (errors.Diagnosen?.hasError) {
            runValidationTasks("Diagnosen", value);
          }
          setDiagnosen(value);
        }}
        onBlur={() => runValidationTasks("Diagnosen", Diagnosen)}
        errorMessage={errors.Diagnosen?.errorMessage}
        hasError={errors.Diagnosen?.hasError}
        {...getOverrideProps(overrides, "Diagnosen")}
      ></TextField>
      <TextField
        label="Therapie massnahmen"
        isRequired={false}
        isReadOnly={false}
        value={TherapieMassnahmen}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ErfassungsZeitpunkt,
              Kunde,
              Tiere,
              Vorbericht,
              Befunde,
              Diagnosen,
              TherapieMassnahmen: value,
              VerwendeteTherapieMittel,
              AbgegebeneTherapieMittel,
              InPegassusErfasst,
            };
            const result = onChange(modelFields);
            value = result?.TherapieMassnahmen ?? value;
          }
          if (errors.TherapieMassnahmen?.hasError) {
            runValidationTasks("TherapieMassnahmen", value);
          }
          setTherapieMassnahmen(value);
        }}
        onBlur={() =>
          runValidationTasks("TherapieMassnahmen", TherapieMassnahmen)
        }
        errorMessage={errors.TherapieMassnahmen?.errorMessage}
        hasError={errors.TherapieMassnahmen?.hasError}
        {...getOverrideProps(overrides, "TherapieMassnahmen")}
      ></TextField>
      <TextField
        label="Verwendete therapie mittel"
        isRequired={false}
        isReadOnly={false}
        value={VerwendeteTherapieMittel}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ErfassungsZeitpunkt,
              Kunde,
              Tiere,
              Vorbericht,
              Befunde,
              Diagnosen,
              TherapieMassnahmen,
              VerwendeteTherapieMittel: value,
              AbgegebeneTherapieMittel,
              InPegassusErfasst,
            };
            const result = onChange(modelFields);
            value = result?.VerwendeteTherapieMittel ?? value;
          }
          if (errors.VerwendeteTherapieMittel?.hasError) {
            runValidationTasks("VerwendeteTherapieMittel", value);
          }
          setVerwendeteTherapieMittel(value);
        }}
        onBlur={() =>
          runValidationTasks(
            "VerwendeteTherapieMittel",
            VerwendeteTherapieMittel
          )
        }
        errorMessage={errors.VerwendeteTherapieMittel?.errorMessage}
        hasError={errors.VerwendeteTherapieMittel?.hasError}
        {...getOverrideProps(overrides, "VerwendeteTherapieMittel")}
      ></TextField>
      <TextField
        label="Abgegebene therapie mittel"
        isRequired={false}
        isReadOnly={false}
        value={AbgegebeneTherapieMittel}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ErfassungsZeitpunkt,
              Kunde,
              Tiere,
              Vorbericht,
              Befunde,
              Diagnosen,
              TherapieMassnahmen,
              VerwendeteTherapieMittel,
              AbgegebeneTherapieMittel: value,
              InPegassusErfasst,
            };
            const result = onChange(modelFields);
            value = result?.AbgegebeneTherapieMittel ?? value;
          }
          if (errors.AbgegebeneTherapieMittel?.hasError) {
            runValidationTasks("AbgegebeneTherapieMittel", value);
          }
          setAbgegebeneTherapieMittel(value);
        }}
        onBlur={() =>
          runValidationTasks(
            "AbgegebeneTherapieMittel",
            AbgegebeneTherapieMittel
          )
        }
        errorMessage={errors.AbgegebeneTherapieMittel?.errorMessage}
        hasError={errors.AbgegebeneTherapieMittel?.hasError}
        {...getOverrideProps(overrides, "AbgegebeneTherapieMittel")}
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
              Kunde,
              Tiere,
              Vorbericht,
              Befunde,
              Diagnosen,
              TherapieMassnahmen,
              VerwendeteTherapieMittel,
              AbgegebeneTherapieMittel,
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
