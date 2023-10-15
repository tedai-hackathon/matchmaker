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
export declare type AnimalTypeCreateFormInputValues = {
    TypeName?: string;
};
export declare type AnimalTypeCreateFormValidationValues = {
    TypeName?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AnimalTypeCreateFormOverridesProps = {
    AnimalTypeCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    TypeName?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type AnimalTypeCreateFormProps = React.PropsWithChildren<{
    overrides?: AnimalTypeCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: AnimalTypeCreateFormInputValues) => AnimalTypeCreateFormInputValues;
    onSuccess?: (fields: AnimalTypeCreateFormInputValues) => void;
    onError?: (fields: AnimalTypeCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: AnimalTypeCreateFormInputValues) => AnimalTypeCreateFormInputValues;
    onValidate?: AnimalTypeCreateFormValidationValues;
} & React.CSSProperties>;
export default function AnimalTypeCreateForm(props: AnimalTypeCreateFormProps): React.ReactElement;
