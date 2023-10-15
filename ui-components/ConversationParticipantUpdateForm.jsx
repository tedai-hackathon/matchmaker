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
import { ConversationParticipant } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function ConversationParticipantUpdateForm(props) {
  const {
    id: idProp,
    conversationParticipant: conversationParticipantModelProp,
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
    CognitoID: "",
    Type: "",
  };
  const [Name, setName] = React.useState(initialValues.Name);
  const [CognitoID, setCognitoID] = React.useState(initialValues.CognitoID);
  const [Type, setType] = React.useState(initialValues.Type);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = conversationParticipantRecord
      ? { ...initialValues, ...conversationParticipantRecord }
      : initialValues;
    setName(cleanValues.Name);
    setCognitoID(cleanValues.CognitoID);
    setType(cleanValues.Type);
    setErrors({});
  };
  const [conversationParticipantRecord, setConversationParticipantRecord] =
    React.useState(conversationParticipantModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(ConversationParticipant, idProp)
        : conversationParticipantModelProp;
      setConversationParticipantRecord(record);
    };
    queryData();
  }, [idProp, conversationParticipantModelProp]);
  React.useEffect(resetStateValues, [conversationParticipantRecord]);
  const validations = {
    Name: [{ type: "Required" }],
    CognitoID: [{ type: "Required" }],
    Type: [{ type: "Required" }],
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
          CognitoID,
          Type,
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
            ConversationParticipant.copyOf(
              conversationParticipantRecord,
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
      {...getOverrideProps(overrides, "ConversationParticipantUpdateForm")}
      {...rest}
    >
      <TextField
        label="Name"
        isRequired={true}
        isReadOnly={false}
        value={Name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Name: value,
              CognitoID,
              Type,
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
        label="Cognito id"
        isRequired={true}
        isReadOnly={false}
        value={CognitoID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Name,
              CognitoID: value,
              Type,
            };
            const result = onChange(modelFields);
            value = result?.CognitoID ?? value;
          }
          if (errors.CognitoID?.hasError) {
            runValidationTasks("CognitoID", value);
          }
          setCognitoID(value);
        }}
        onBlur={() => runValidationTasks("CognitoID", CognitoID)}
        errorMessage={errors.CognitoID?.errorMessage}
        hasError={errors.CognitoID?.hasError}
        {...getOverrideProps(overrides, "CognitoID")}
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
              Name,
              CognitoID,
              Type: value,
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
          children="Ai"
          value="AI"
          {...getOverrideProps(overrides, "Typeoption0")}
        ></option>
        <option
          children="Human"
          value="HUMAN"
          {...getOverrideProps(overrides, "Typeoption1")}
        ></option>
        <option
          children="Poweruser"
          value="POWERUSER"
          {...getOverrideProps(overrides, "Typeoption2")}
        ></option>
        <option
          children="Admin"
          value="ADMIN"
          {...getOverrideProps(overrides, "Typeoption3")}
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
          isDisabled={!(idProp || conversationParticipantModelProp)}
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
              !(idProp || conversationParticipantModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
