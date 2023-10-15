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
export declare type DiagnoseCreateFormInputValues = {
    Diagnose?: string;
};
export declare type DiagnoseCreateFormValidationValues = {
    Diagnose?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DiagnoseCreateFormOverridesProps = {
    DiagnoseCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Diagnose?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type DiagnoseCreateFormProps = React.PropsWithChildren<{
    overrides?: DiagnoseCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: DiagnoseCreateFormInputValues) => DiagnoseCreateFormInputValues;
    onSuccess?: (fields: DiagnoseCreateFormInputValues) => void;
    onError?: (fields: DiagnoseCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: DiagnoseCreateFormInputValues) => DiagnoseCreateFormInputValues;
    onValidate?: DiagnoseCreateFormValidationValues;
} & React.CSSProperties>;
export default function DiagnoseCreateForm(props: DiagnoseCreateFormProps): React.ReactElement;
