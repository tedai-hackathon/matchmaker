/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { PersonTitle } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type PersonTitleUpdateFormInputValues = {
    Language?: string;
    Title?: string;
    Gender?: string;
};
export declare type PersonTitleUpdateFormValidationValues = {
    Language?: ValidationFunction<string>;
    Title?: ValidationFunction<string>;
    Gender?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PersonTitleUpdateFormOverridesProps = {
    PersonTitleUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Language?: PrimitiveOverrideProps<TextFieldProps>;
    Title?: PrimitiveOverrideProps<TextFieldProps>;
    Gender?: PrimitiveOverrideProps<SelectFieldProps>;
} & EscapeHatchProps;
export declare type PersonTitleUpdateFormProps = React.PropsWithChildren<{
    overrides?: PersonTitleUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    personTitle?: PersonTitle;
    onSubmit?: (fields: PersonTitleUpdateFormInputValues) => PersonTitleUpdateFormInputValues;
    onSuccess?: (fields: PersonTitleUpdateFormInputValues) => void;
    onError?: (fields: PersonTitleUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PersonTitleUpdateFormInputValues) => PersonTitleUpdateFormInputValues;
    onValidate?: PersonTitleUpdateFormValidationValues;
} & React.CSSProperties>;
export default function PersonTitleUpdateForm(props: PersonTitleUpdateFormProps): React.ReactElement;
