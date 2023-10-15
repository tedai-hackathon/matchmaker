/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type AITransactionCreateFormInputValues = {
    AIServiceID?: string;
    AIModelID?: string;
    RequestJSON?: string;
    RequestDateTime?: string;
    ResponseJSON?: string;
    ResponseDateTime?: string;
};
export declare type AITransactionCreateFormValidationValues = {
    AIServiceID?: ValidationFunction<string>;
    AIModelID?: ValidationFunction<string>;
    RequestJSON?: ValidationFunction<string>;
    RequestDateTime?: ValidationFunction<string>;
    ResponseJSON?: ValidationFunction<string>;
    ResponseDateTime?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AITransactionCreateFormOverridesProps = {
    AITransactionCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    AIServiceID?: PrimitiveOverrideProps<TextFieldProps>;
    AIModelID?: PrimitiveOverrideProps<TextFieldProps>;
    RequestJSON?: PrimitiveOverrideProps<TextFieldProps>;
    RequestDateTime?: PrimitiveOverrideProps<TextFieldProps>;
    ResponseJSON?: PrimitiveOverrideProps<TextFieldProps>;
    ResponseDateTime?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type AITransactionCreateFormProps = React.PropsWithChildren<{
    overrides?: AITransactionCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: AITransactionCreateFormInputValues) => AITransactionCreateFormInputValues;
    onSuccess?: (fields: AITransactionCreateFormInputValues) => void;
    onError?: (fields: AITransactionCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: AITransactionCreateFormInputValues) => AITransactionCreateFormInputValues;
    onValidate?: AITransactionCreateFormValidationValues;
} & React.CSSProperties>;
export default function AITransactionCreateForm(props: AITransactionCreateFormProps): React.ReactElement;
