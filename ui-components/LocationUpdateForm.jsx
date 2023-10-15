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
import { Location } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function LocationUpdateForm(props) {
  const {
    id: idProp,
    location: locationModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    Street: "",
    Nr: "",
    PLZ: "",
    CityName: "",
    Type: "",
    GEO_LAT: "",
    GEO_LON: "",
    Country: "",
  };
  const [Street, setStreet] = React.useState(initialValues.Street);
  const [Nr, setNr] = React.useState(initialValues.Nr);
  const [PLZ, setPLZ] = React.useState(initialValues.PLZ);
  const [CityName, setCityName] = React.useState(initialValues.CityName);
  const [Type, setType] = React.useState(initialValues.Type);
  const [GEO_LAT, setGEO_LAT] = React.useState(initialValues.GEO_LAT);
  const [GEO_LON, setGEO_LON] = React.useState(initialValues.GEO_LON);
  const [Country, setCountry] = React.useState(initialValues.Country);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = locationRecord
      ? { ...initialValues, ...locationRecord }
      : initialValues;
    setStreet(cleanValues.Street);
    setNr(cleanValues.Nr);
    setPLZ(cleanValues.PLZ);
    setCityName(cleanValues.CityName);
    setType(cleanValues.Type);
    setGEO_LAT(cleanValues.GEO_LAT);
    setGEO_LON(cleanValues.GEO_LON);
    setCountry(cleanValues.Country);
    setErrors({});
  };
  const [locationRecord, setLocationRecord] = React.useState(locationModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Location, idProp)
        : locationModelProp;
      setLocationRecord(record);
    };
    queryData();
  }, [idProp, locationModelProp]);
  React.useEffect(resetStateValues, [locationRecord]);
  const validations = {
    Street: [{ type: "Required" }],
    Nr: [{ type: "Required" }],
    PLZ: [{ type: "Required" }],
    CityName: [],
    Type: [],
    GEO_LAT: [],
    GEO_LON: [],
    Country: [],
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
          Street,
          Nr,
          PLZ,
          CityName,
          Type,
          GEO_LAT,
          GEO_LON,
          Country,
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
            Location.copyOf(locationRecord, (updated) => {
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
      {...getOverrideProps(overrides, "LocationUpdateForm")}
      {...rest}
    >
      <TextField
        label="Street"
        isRequired={true}
        isReadOnly={false}
        value={Street}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Street: value,
              Nr,
              PLZ,
              CityName,
              Type,
              GEO_LAT,
              GEO_LON,
              Country,
            };
            const result = onChange(modelFields);
            value = result?.Street ?? value;
          }
          if (errors.Street?.hasError) {
            runValidationTasks("Street", value);
          }
          setStreet(value);
        }}
        onBlur={() => runValidationTasks("Street", Street)}
        errorMessage={errors.Street?.errorMessage}
        hasError={errors.Street?.hasError}
        {...getOverrideProps(overrides, "Street")}
      ></TextField>
      <TextField
        label="Nr"
        isRequired={true}
        isReadOnly={false}
        value={Nr}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Street,
              Nr: value,
              PLZ,
              CityName,
              Type,
              GEO_LAT,
              GEO_LON,
              Country,
            };
            const result = onChange(modelFields);
            value = result?.Nr ?? value;
          }
          if (errors.Nr?.hasError) {
            runValidationTasks("Nr", value);
          }
          setNr(value);
        }}
        onBlur={() => runValidationTasks("Nr", Nr)}
        errorMessage={errors.Nr?.errorMessage}
        hasError={errors.Nr?.hasError}
        {...getOverrideProps(overrides, "Nr")}
      ></TextField>
      <TextField
        label="Plz"
        isRequired={true}
        isReadOnly={false}
        value={PLZ}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Street,
              Nr,
              PLZ: value,
              CityName,
              Type,
              GEO_LAT,
              GEO_LON,
              Country,
            };
            const result = onChange(modelFields);
            value = result?.PLZ ?? value;
          }
          if (errors.PLZ?.hasError) {
            runValidationTasks("PLZ", value);
          }
          setPLZ(value);
        }}
        onBlur={() => runValidationTasks("PLZ", PLZ)}
        errorMessage={errors.PLZ?.errorMessage}
        hasError={errors.PLZ?.hasError}
        {...getOverrideProps(overrides, "PLZ")}
      ></TextField>
      <TextField
        label="City name"
        isRequired={false}
        isReadOnly={false}
        value={CityName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Street,
              Nr,
              PLZ,
              CityName: value,
              Type,
              GEO_LAT,
              GEO_LON,
              Country,
            };
            const result = onChange(modelFields);
            value = result?.CityName ?? value;
          }
          if (errors.CityName?.hasError) {
            runValidationTasks("CityName", value);
          }
          setCityName(value);
        }}
        onBlur={() => runValidationTasks("CityName", CityName)}
        errorMessage={errors.CityName?.errorMessage}
        hasError={errors.CityName?.hasError}
        {...getOverrideProps(overrides, "CityName")}
      ></TextField>
      <SelectField
        label="Type"
        placeholder="Please select an option"
        isDisabled={false}
        value={Type}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Street,
              Nr,
              PLZ,
              CityName,
              Type: value,
              GEO_LAT,
              GEO_LON,
              Country,
            };
            const result = onChange(modelFields);
            value = result?.Type ?? value;
          }
          if (errors.Type?.hasError) {
            runValidationTasks("Type", value);
          }
          setType(value);
        }}
        onBlur={() => runValidationTasks("Type", Type)}
        errorMessage={errors.Type?.errorMessage}
        hasError={errors.Type?.hasError}
        {...getOverrideProps(overrides, "Type")}
      >
        <option
          children="Private"
          value="PRIVATE"
          {...getOverrideProps(overrides, "Typeoption0")}
        ></option>
        <option
          children="Office"
          value="OFFICE"
          {...getOverrideProps(overrides, "Typeoption1")}
        ></option>
        <option
          children="Barn"
          value="BARN"
          {...getOverrideProps(overrides, "Typeoption2")}
        ></option>
        <option
          children="Paddock"
          value="PADDOCK"
          {...getOverrideProps(overrides, "Typeoption3")}
        ></option>
        <option
          children="Field"
          value="FIELD"
          {...getOverrideProps(overrides, "Typeoption4")}
        ></option>
      </SelectField>
      <TextField
        label="Geo lat"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={GEO_LAT}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              Street,
              Nr,
              PLZ,
              CityName,
              Type,
              GEO_LAT: value,
              GEO_LON,
              Country,
            };
            const result = onChange(modelFields);
            value = result?.GEO_LAT ?? value;
          }
          if (errors.GEO_LAT?.hasError) {
            runValidationTasks("GEO_LAT", value);
          }
          setGEO_LAT(value);
        }}
        onBlur={() => runValidationTasks("GEO_LAT", GEO_LAT)}
        errorMessage={errors.GEO_LAT?.errorMessage}
        hasError={errors.GEO_LAT?.hasError}
        {...getOverrideProps(overrides, "GEO_LAT")}
      ></TextField>
      <TextField
        label="Geo lon"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={GEO_LON}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              Street,
              Nr,
              PLZ,
              CityName,
              Type,
              GEO_LAT,
              GEO_LON: value,
              Country,
            };
            const result = onChange(modelFields);
            value = result?.GEO_LON ?? value;
          }
          if (errors.GEO_LON?.hasError) {
            runValidationTasks("GEO_LON", value);
          }
          setGEO_LON(value);
        }}
        onBlur={() => runValidationTasks("GEO_LON", GEO_LON)}
        errorMessage={errors.GEO_LON?.errorMessage}
        hasError={errors.GEO_LON?.hasError}
        {...getOverrideProps(overrides, "GEO_LON")}
      ></TextField>
      <TextField
        label="Country"
        isRequired={false}
        isReadOnly={false}
        value={Country}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Street,
              Nr,
              PLZ,
              CityName,
              Type,
              GEO_LAT,
              GEO_LON,
              Country: value,
            };
            const result = onChange(modelFields);
            value = result?.Country ?? value;
          }
          if (errors.Country?.hasError) {
            runValidationTasks("Country", value);
          }
          setCountry(value);
        }}
        onBlur={() => runValidationTasks("Country", Country)}
        errorMessage={errors.Country?.errorMessage}
        hasError={errors.Country?.hasError}
        {...getOverrideProps(overrides, "Country")}
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
          isDisabled={!(idProp || locationModelProp)}
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
              !(idProp || locationModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
