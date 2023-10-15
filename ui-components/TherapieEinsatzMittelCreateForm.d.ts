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
export declare type TherapieEinsatzMittelCreateFormInputValues = {
    Bezeichnung?: string;
    Menge?: number;
    Einheit?: string;
};
export declare type TherapieEinsatzMittelCreateFormValidationValues = {
    Bezeichnung?: ValidationFunction<string>;
    Menge?: ValidationFunction<number>;
    Einheit?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TherapieEinsatzMittelCreateFormOverridesProps = {
    TherapieEinsatzMittelCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Bezeichnung?: PrimitiveOverrideProps<TextFieldProps>;
    Menge?: PrimitiveOverrideProps<TextFieldProps>;
    Einheit?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TherapieEinsatzMittelCreateFormProps = React.PropsWithChildren<{
    overrides?: TherapieEinsatzMittelCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: TherapieEinsatzMittelCreateFormInputValues) => TherapieEinsatzMittelCreateFormInputValues;
    onSuccess?: (fields: TherapieEinsatzMittelCreateFormInputValues) => void;
    onError?: (fields: TherapieEinsatzMittelCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TherapieEinsatzMittelCreateFormInputValues) => TherapieEinsatzMittelCreateFormInputValues;
    onValidate?: TherapieEinsatzMittelCreateFormValidationValues;
} & React.CSSProperties>;
export default function TherapieEinsatzMittelCreateForm(props: TherapieEinsatzMittelCreateFormProps): React.ReactElement;
