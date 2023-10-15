/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ConversationParticipant } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ConversationParticipantUpdateFormInputValues = {
    Name?: string;
    CognitoID?: string;
    Type?: string;
};
export declare type ConversationParticipantUpdateFormValidationValues = {
    Name?: ValidationFunction<string>;
    CognitoID?: ValidationFunction<string>;
    Type?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ConversationParticipantUpdateFormOverridesProps = {
    ConversationParticipantUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Name?: PrimitiveOverrideProps<TextFieldProps>;
    CognitoID?: PrimitiveOverrideProps<TextFieldProps>;
    Type?: PrimitiveOverrideProps<SelectFieldProps>;
} & EscapeHatchProps;
export declare type ConversationParticipantUpdateFormProps = React.PropsWithChildren<{
    overrides?: ConversationParticipantUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    conversationParticipant?: ConversationParticipant;
    onSubmit?: (fields: ConversationParticipantUpdateFormInputValues) => ConversationParticipantUpdateFormInputValues;
    onSuccess?: (fields: ConversationParticipantUpdateFormInputValues) => void;
    onError?: (fields: ConversationParticipantUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ConversationParticipantUpdateFormInputValues) => ConversationParticipantUpdateFormInputValues;
    onValidate?: ConversationParticipantUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ConversationParticipantUpdateForm(props: ConversationParticipantUpdateFormProps): React.ReactElement;
