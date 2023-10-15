/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Behandlung } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type BehandlungUpdateFormInputValues = {
    ErfassungsZeitpunkt?: string;
    InPegassusErfasst?: string;
};
export declare type BehandlungUpdateFormValidationValues = {
    ErfassungsZeitpunkt?: ValidationFunction<string>;
    InPegassusErfasst?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BehandlungUpdateFormOverridesProps = {
    BehandlungUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    ErfassungsZeitpunkt?: PrimitiveOverrideProps<TextFieldProps>;
    InPegassusErfasst?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type BehandlungUpdateFormProps = React.PropsWithChildren<{
    overrides?: BehandlungUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    behandlung?: Behandlung;
    onSubmit?: (fields: BehandlungUpdateFormInputValues) => BehandlungUpdateFormInputValues;
    onSuccess?: (fields: BehandlungUpdateFormInputValues) => void;
    onError?: (fields: BehandlungUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: BehandlungUpdateFormInputValues) => BehandlungUpdateFormInputValues;
    onValidate?: BehandlungUpdateFormValidationValues;
} & React.CSSProperties>;
export default function BehandlungUpdateForm(props: BehandlungUpdateFormProps): React.ReactElement;
