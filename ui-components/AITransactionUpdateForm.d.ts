/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { AITransaction } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type AITransactionUpdateFormInputValues = {
    AIServiceID?: string;
    AIModelID?: string;
    RequestJSON?: string;
    RequestDateTime?: string;
    ResponseJSON?: string;
    ResponseDateTime?: string;
};
export declare type AITransactionUpdateFormValidationValues = {
    AIServiceID?: ValidationFunction<string>;
    AIModelID?: ValidationFunction<string>;
    RequestJSON?: ValidationFunction<string>;
    RequestDateTime?: ValidationFunction<string>;
    ResponseJSON?: ValidationFunction<string>;
    ResponseDateTime?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AITransactionUpdateFormOverridesProps = {
    AITransactionUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    AIServiceID?: PrimitiveOverrideProps<TextFieldProps>;
    AIModelID?: PrimitiveOverrideProps<TextFieldProps>;
    RequestJSON?: PrimitiveOverrideProps<TextFieldProps>;
    RequestDateTime?: PrimitiveOverrideProps<TextFieldProps>;
    ResponseJSON?: PrimitiveOverrideProps<TextFieldProps>;
    ResponseDateTime?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type AITransactionUpdateFormProps = React.PropsWithChildren<{
    overrides?: AITransactionUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    aITransaction?: AITransaction;
    onSubmit?: (fields: AITransactionUpdateFormInputValues) => AITransactionUpdateFormInputValues;
    onSuccess?: (fields: AITransactionUpdateFormInputValues) => void;
    onError?: (fields: AITransactionUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: AITransactionUpdateFormInputValues) => AITransactionUpdateFormInputValues;
    onValidate?: AITransactionUpdateFormValidationValues;
} & React.CSSProperties>;
export default function AITransactionUpdateForm(props: AITransactionUpdateFormProps): React.ReactElement;
