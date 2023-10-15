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
export declare type TherapieServiceCreateFormInputValues = {
    Service?: string;
};
export declare type TherapieServiceCreateFormValidationValues = {
    Service?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TherapieServiceCreateFormOverridesProps = {
    TherapieServiceCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Service?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TherapieServiceCreateFormProps = React.PropsWithChildren<{
    overrides?: TherapieServiceCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: TherapieServiceCreateFormInputValues) => TherapieServiceCreateFormInputValues;
    onSuccess?: (fields: TherapieServiceCreateFormInputValues) => void;
    onError?: (fields: TherapieServiceCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TherapieServiceCreateFormInputValues) => TherapieServiceCreateFormInputValues;
    onValidate?: TherapieServiceCreateFormValidationValues;
} & React.CSSProperties>;
export default function TherapieServiceCreateForm(props: TherapieServiceCreateFormProps): React.ReactElement;
