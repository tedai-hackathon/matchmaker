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
export declare type ErkannteBehandlungsElementeCreateFormInputValues = {
    ErfassungsZeitpunkt?: string;
    Kunde?: string;
    Tiere?: string;
    Vorbericht?: string;
    Befunde?: string;
    Diagnosen?: string;
    TherapieMassnahmen?: string;
    VerwendeteTherapieMittel?: string;
    AbgegebeneTherapieMittel?: string;
    InPegassusErfasst?: string;
};
export declare type ErkannteBehandlungsElementeCreateFormValidationValues = {
    ErfassungsZeitpunkt?: ValidationFunction<string>;
    Kunde?: ValidationFunction<string>;
    Tiere?: ValidationFunction<string>;
    Vorbericht?: ValidationFunction<string>;
    Befunde?: ValidationFunction<string>;
    Diagnosen?: ValidationFunction<string>;
    TherapieMassnahmen?: ValidationFunction<string>;
    VerwendeteTherapieMittel?: ValidationFunction<string>;
    AbgegebeneTherapieMittel?: ValidationFunction<string>;
    InPegassusErfasst?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ErkannteBehandlungsElementeCreateFormOverridesProps = {
    ErkannteBehandlungsElementeCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    ErfassungsZeitpunkt?: PrimitiveOverrideProps<TextFieldProps>;
    Kunde?: PrimitiveOverrideProps<TextFieldProps>;
    Tiere?: PrimitiveOverrideProps<TextFieldProps>;
    Vorbericht?: PrimitiveOverrideProps<TextFieldProps>;
    Befunde?: PrimitiveOverrideProps<TextFieldProps>;
    Diagnosen?: PrimitiveOverrideProps<TextFieldProps>;
    TherapieMassnahmen?: PrimitiveOverrideProps<TextFieldProps>;
    VerwendeteTherapieMittel?: PrimitiveOverrideProps<TextFieldProps>;
    AbgegebeneTherapieMittel?: PrimitiveOverrideProps<TextFieldProps>;
    InPegassusErfasst?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ErkannteBehandlungsElementeCreateFormProps = React.PropsWithChildren<{
    overrides?: ErkannteBehandlungsElementeCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ErkannteBehandlungsElementeCreateFormInputValues) => ErkannteBehandlungsElementeCreateFormInputValues;
    onSuccess?: (fields: ErkannteBehandlungsElementeCreateFormInputValues) => void;
    onError?: (fields: ErkannteBehandlungsElementeCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ErkannteBehandlungsElementeCreateFormInputValues) => ErkannteBehandlungsElementeCreateFormInputValues;
    onValidate?: ErkannteBehandlungsElementeCreateFormValidationValues;
} & React.CSSProperties>;
export default function ErkannteBehandlungsElementeCreateForm(props: ErkannteBehandlungsElementeCreateFormProps): React.ReactElement;
