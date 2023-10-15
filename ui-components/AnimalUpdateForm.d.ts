/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Animal } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type AnimalUpdateFormInputValues = {
    Name?: string;
    Color?: string;
    ProductID?: string;
    NameAbbreviation?: string;
    Gender?: string;
};
export declare type AnimalUpdateFormValidationValues = {
    Name?: ValidationFunction<string>;
    Color?: ValidationFunction<string>;
    ProductID?: ValidationFunction<string>;
    NameAbbreviation?: ValidationFunction<string>;
    Gender?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AnimalUpdateFormOverridesProps = {
    AnimalUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Name?: PrimitiveOverrideProps<TextFieldProps>;
    Color?: PrimitiveOverrideProps<TextFieldProps>;
    ProductID?: PrimitiveOverrideProps<TextFieldProps>;
    NameAbbreviation?: PrimitiveOverrideProps<TextFieldProps>;
    Gender?: PrimitiveOverrideProps<SelectFieldProps>;
} & EscapeHatchProps;
export declare type AnimalUpdateFormProps = React.PropsWithChildren<{
    overrides?: AnimalUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    animal?: Animal;
    onSubmit?: (fields: AnimalUpdateFormInputValues) => AnimalUpdateFormInputValues;
    onSuccess?: (fields: AnimalUpdateFormInputValues) => void;
    onError?: (fields: AnimalUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: AnimalUpdateFormInputValues) => AnimalUpdateFormInputValues;
    onValidate?: AnimalUpdateFormValidationValues;
} & React.CSSProperties>;
export default function AnimalUpdateForm(props: AnimalUpdateFormProps): React.ReactElement;
