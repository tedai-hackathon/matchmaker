/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ConversationParticipantCreateFormInputValues = {
    Name?: string;
    CognitoID?: string;
    Type?: string;
};
export declare type ConversationParticipantCreateFormValidationValues = {
    Name?: ValidationFunction<string>;
    CognitoID?: ValidationFunction<string>;
    Type?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ConversationParticipantCreateFormOverridesProps = {
    ConversationParticipantCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Name?: PrimitiveOverrideProps<TextFieldProps>;
    CognitoID?: PrimitiveOverrideProps<TextFieldProps>;
    Type?: PrimitiveOverrideProps<SelectFieldProps>;
} & EscapeHatchProps;
export declare type ConversationParticipantCreateFormProps = React.PropsWithChildren<{
    overrides?: ConversationParticipantCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ConversationParticipantCreateFormInputValues) => ConversationParticipantCreateFormInputValues;
    onSuccess?: (fields: ConversationParticipantCreateFormInputValues) => void;
    onError?: (fields: ConversationParticipantCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ConversationParticipantCreateFormInputValues) => ConversationParticipantCreateFormInputValues;
    onValidate?: ConversationParticipantCreateFormValidationValues;
} & React.CSSProperties>;
export default function ConversationParticipantCreateForm(props: ConversationParticipantCreateFormProps): React.ReactElement;
