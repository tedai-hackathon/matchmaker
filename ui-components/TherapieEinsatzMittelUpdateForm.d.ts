/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { TherapieEinsatzMittel } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type TherapieEinsatzMittelUpdateFormInputValues = {
    Bezeichnung?: string;
    Menge?: number;
    Einheit?: string;
};
export declare type TherapieEinsatzMittelUpdateFormValidationValues = {
    Bezeichnung?: ValidationFunction<string>;
    Menge?: ValidationFunction<number>;
    Einheit?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TherapieEinsatzMittelUpdateFormOverridesProps = {
    TherapieEinsatzMittelUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Bezeichnung?: PrimitiveOverrideProps<TextFieldProps>;
    Menge?: PrimitiveOverrideProps<TextFieldProps>;
    Einheit?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TherapieEinsatzMittelUpdateFormProps = React.PropsWithChildren<{
    overrides?: TherapieEinsatzMittelUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    therapieEinsatzMittel?: TherapieEinsatzMittel;
    onSubmit?: (fields: TherapieEinsatzMittelUpdateFormInputValues) => TherapieEinsatzMittelUpdateFormInputValues;
    onSuccess?: (fields: TherapieEinsatzMittelUpdateFormInputValues) => void;
    onError?: (fields: TherapieEinsatzMittelUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TherapieEinsatzMittelUpdateFormInputValues) => TherapieEinsatzMittelUpdateFormInputValues;
    onValidate?: TherapieEinsatzMittelUpdateFormValidationValues;
} & React.CSSProperties>;
export default function TherapieEinsatzMittelUpdateForm(props: TherapieEinsatzMittelUpdateFormProps): React.ReactElement;
