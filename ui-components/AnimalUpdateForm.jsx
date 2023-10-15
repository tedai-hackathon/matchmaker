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
import { Animal } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function AnimalUpdateForm(props) {
  const {
    id: idProp,
    animal: animalModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    Name: "",
    Color: "",
    ProductID: "",
    NameAbbreviation: "",
    Gender: "",
  };
  const [Name, setName] = React.useState(initialValues.Name);
  const [Color, setColor] = React.useState(initialValues.Color);
  const [ProductID, setProductID] = React.useState(initialValues.ProductID);
  const [NameAbbreviation, setNameAbbreviation] = React.useState(
    initialValues.NameAbbreviation
  );
  const [Gender, setGender] = React.useState(initialValues.Gender);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = animalRecord
      ? { ...initialValues, ...animalRecord }
      : initialValues;
    setName(cleanValues.Name);
    setColor(cleanValues.Color);
    setProductID(cleanValues.ProductID);
    setNameAbbreviation(cleanValues.NameAbbreviation);
    setGender(cleanValues.Gender);
    setErrors({});
  };
  const [animalRecord, setAnimalRecord] = React.useState(animalModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Animal, idProp)
        : animalModelProp;
      setAnimalRecord(record);
    };
    queryData();
  }, [idProp, animalModelProp]);
  React.useEffect(resetStateValues, [animalRecord]);
  const validations = {
    Name: [],
    Color: [],
    ProductID: [],
    NameAbbreviation: [],
    Gender: [],
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
          Name,
          Color,
          ProductID,
          NameAbbreviation,
          Gender,
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
            Animal.copyOf(animalRecord, (updated) => {
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
      {...getOverrideProps(overrides, "AnimalUpdateForm")}
      {...rest}
    >
      <TextField
        label="Name"
        isRequired={false}
        isReadOnly={false}
        value={Name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Name: value,
              Color,
              ProductID,
              NameAbbreviation,
              Gender,
            };
            const result = onChange(modelFields);
            value = result?.Name ?? value;
          }
          if (errors.Name?.hasError) {
            runValidationTasks("Name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("Name", Name)}
        errorMessage={errors.Name?.errorMessage}
        hasError={errors.Name?.hasError}
        {...getOverrideProps(overrides, "Name")}
      ></TextField>
      <TextField
        label="Color"
        isRequired={false}
        isReadOnly={false}
        value={Color}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Name,
              Color: value,
              ProductID,
              NameAbbreviation,
              Gender,
            };
            const result = onChange(modelFields);
            value = result?.Color ?? value;
          }
          if (errors.Color?.hasError) {
            runValidationTasks("Color", value);
          }
          setColor(value);
        }}
        onBlur={() => runValidationTasks("Color", Color)}
        errorMessage={errors.Color?.errorMessage}
        hasError={errors.Color?.hasError}
        {...getOverrideProps(overrides, "Color")}
      ></TextField>
      <TextField
        label="Product id"
        isRequired={false}
        isReadOnly={false}
        value={ProductID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Name,
              Color,
              ProductID: value,
              NameAbbreviation,
              Gender,
            };
            const result = onChange(modelFields);
            value = result?.ProductID ?? value;
          }
          if (errors.ProductID?.hasError) {
            runValidationTasks("ProductID", value);
          }
          setProductID(value);
        }}
        onBlur={() => runValidationTasks("ProductID", ProductID)}
        errorMessage={errors.ProductID?.errorMessage}
        hasError={errors.ProductID?.hasError}
        {...getOverrideProps(overrides, "ProductID")}
      ></TextField>
      <TextField
        label="Name abbreviation"
        isRequired={false}
        isReadOnly={false}
        value={NameAbbreviation}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Name,
              Color,
              ProductID,
              NameAbbreviation: value,
              Gender,
            };
            const result = onChange(modelFields);
            value = result?.NameAbbreviation ?? value;
          }
          if (errors.NameAbbreviation?.hasError) {
            runValidationTasks("NameAbbreviation", value);
          }
          setNameAbbreviation(value);
        }}
        onBlur={() => runValidationTasks("NameAbbreviation", NameAbbreviation)}
        errorMessage={errors.NameAbbreviation?.errorMessage}
        hasError={errors.NameAbbreviation?.hasError}
        {...getOverrideProps(overrides, "NameAbbreviation")}
      ></TextField>
      <SelectField
        label="Gender"
        placeholder="Please select an option"
        isDisabled={false}
        value={Gender}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Name,
              Color,
              ProductID,
              NameAbbreviation,
              Gender: value,
            };
            const result = onChange(modelFields);
            value = result?.Gender ?? value;
          }
          if (errors.Gender?.hasError) {
            runValidationTasks("Gender", value);
          }
          setGender(value);
        }}
        onBlur={() => runValidationTasks("Gender", Gender)}
        errorMessage={errors.Gender?.errorMessage}
        hasError={errors.Gender?.hasError}
        {...getOverrideProps(overrides, "Gender")}
      >
        <option
          children="Male"
          value="MALE"
          {...getOverrideProps(overrides, "Genderoption0")}
        ></option>
        <option
          children="Female"
          value="FEMALE"
          {...getOverrideProps(overrides, "Genderoption1")}
        ></option>
        <option
          children="Nonbinary"
          value="NONBINARY"
          {...getOverrideProps(overrides, "Genderoption2")}
        ></option>
        <option
          children="Genderqueer"
          value="GENDERQUEER"
          {...getOverrideProps(overrides, "Genderoption3")}
        ></option>
        <option
          children="Genderfluid"
          value="GENDERFLUID"
          {...getOverrideProps(overrides, "Genderoption4")}
        ></option>
        <option
          children="Agender"
          value="AGENDER"
          {...getOverrideProps(overrides, "Genderoption5")}
        ></option>
        <option
          children="Bigender"
          value="BIGENDER"
          {...getOverrideProps(overrides, "Genderoption6")}
        ></option>
      </SelectField>
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
          isDisabled={!(idProp || animalModelProp)}
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
              !(idProp || animalModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
