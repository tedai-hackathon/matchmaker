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
export declare type PersonTitleCreateFormInputValues = {
    Language?: string;
    Title?: string;
    Gender?: string;
};
export declare type PersonTitleCreateFormValidationValues = {
    Language?: ValidationFunction<string>;
    Title?: ValidationFunction<string>;
    Gender?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PersonTitleCreateFormOverridesProps = {
    PersonTitleCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Language?: PrimitiveOverrideProps<TextFieldProps>;
    Title?: PrimitiveOverrideProps<TextFieldProps>;
    Gender?: PrimitiveOverrideProps<SelectFieldProps>;
} & EscapeHatchProps;
export declare type PersonTitleCreateFormProps = React.PropsWithChildren<{
    overrides?: PersonTitleCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: PersonTitleCreateFormInputValues) => PersonTitleCreateFormInputValues;
    onSuccess?: (fields: PersonTitleCreateFormInputValues) => void;
    onError?: (fields: PersonTitleCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PersonTitleCreateFormInputValues) => PersonTitleCreateFormInputValues;
    onValidate?: PersonTitleCreateFormValidationValues;
} & React.CSSProperties>;
export default function PersonTitleCreateForm(props: PersonTitleCreateFormProps): React.ReactElement;
