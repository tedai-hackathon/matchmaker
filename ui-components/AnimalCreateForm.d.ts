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
export declare type AnimalCreateFormInputValues = {
    Name?: string;
    Color?: string;
    ProductID?: string;
    NameAbbreviation?: string;
    Gender?: string;
};
export declare type AnimalCreateFormValidationValues = {
    Name?: ValidationFunction<string>;
    Color?: ValidationFunction<string>;
    ProductID?: ValidationFunction<string>;
    NameAbbreviation?: ValidationFunction<string>;
    Gender?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AnimalCreateFormOverridesProps = {
    AnimalCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Name?: PrimitiveOverrideProps<TextFieldProps>;
    Color?: PrimitiveOverrideProps<TextFieldProps>;
    ProductID?: PrimitiveOverrideProps<TextFieldProps>;
    NameAbbreviation?: PrimitiveOverrideProps<TextFieldProps>;
    Gender?: PrimitiveOverrideProps<SelectFieldProps>;
} & EscapeHatchProps;
export declare type AnimalCreateFormProps = React.PropsWithChildren<{
    overrides?: AnimalCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: AnimalCreateFormInputValues) => AnimalCreateFormInputValues;
    onSuccess?: (fields: AnimalCreateFormInputValues) => void;
    onError?: (fields: AnimalCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: AnimalCreateFormInputValues) => AnimalCreateFormInputValues;
    onValidate?: AnimalCreateFormValidationValues;
} & React.CSSProperties>;
export default function AnimalCreateForm(props: AnimalCreateFormProps): React.ReactElement;
