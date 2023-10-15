/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Diagnose as Diagnose0 } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type DiagnoseUpdateFormInputValues = {
    Diagnose?: string;
};
export declare type DiagnoseUpdateFormValidationValues = {
    Diagnose?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DiagnoseUpdateFormOverridesProps = {
    DiagnoseUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Diagnose?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type DiagnoseUpdateFormProps = React.PropsWithChildren<{
    overrides?: DiagnoseUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    diagnose?: Diagnose0;
    onSubmit?: (fields: DiagnoseUpdateFormInputValues) => DiagnoseUpdateFormInputValues;
    onSuccess?: (fields: DiagnoseUpdateFormInputValues) => void;
    onError?: (fields: DiagnoseUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: DiagnoseUpdateFormInputValues) => DiagnoseUpdateFormInputValues;
    onValidate?: DiagnoseUpdateFormValidationValues;
} & React.CSSProperties>;
export default function DiagnoseUpdateForm(props: DiagnoseUpdateFormProps): React.ReactElement;
