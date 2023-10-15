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
export declare type BehandlungCreateFormInputValues = {
    ErfassungsZeitpunkt?: string;
    InPegassusErfasst?: string;
};
export declare type BehandlungCreateFormValidationValues = {
    ErfassungsZeitpunkt?: ValidationFunction<string>;
    InPegassusErfasst?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BehandlungCreateFormOverridesProps = {
    BehandlungCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    ErfassungsZeitpunkt?: PrimitiveOverrideProps<TextFieldProps>;
    InPegassusErfasst?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type BehandlungCreateFormProps = React.PropsWithChildren<{
    overrides?: BehandlungCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: BehandlungCreateFormInputValues) => BehandlungCreateFormInputValues;
    onSuccess?: (fields: BehandlungCreateFormInputValues) => void;
    onError?: (fields: BehandlungCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: BehandlungCreateFormInputValues) => BehandlungCreateFormInputValues;
    onValidate?: BehandlungCreateFormValidationValues;
} & React.CSSProperties>;
export default function BehandlungCreateForm(props: BehandlungCreateFormProps): React.ReactElement;
