/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ErkannteBehandlungsElemente } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ErkannteBehandlungsElementeUpdateFormInputValues = {
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
export declare type ErkannteBehandlungsElementeUpdateFormValidationValues = {
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
export declare type ErkannteBehandlungsElementeUpdateFormOverridesProps = {
    ErkannteBehandlungsElementeUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
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
export declare type ErkannteBehandlungsElementeUpdateFormProps = React.PropsWithChildren<{
    overrides?: ErkannteBehandlungsElementeUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    erkannteBehandlungsElemente?: ErkannteBehandlungsElemente;
    onSubmit?: (fields: ErkannteBehandlungsElementeUpdateFormInputValues) => ErkannteBehandlungsElementeUpdateFormInputValues;
    onSuccess?: (fields: ErkannteBehandlungsElementeUpdateFormInputValues) => void;
    onError?: (fields: ErkannteBehandlungsElementeUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ErkannteBehandlungsElementeUpdateFormInputValues) => ErkannteBehandlungsElementeUpdateFormInputValues;
    onValidate?: ErkannteBehandlungsElementeUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ErkannteBehandlungsElementeUpdateForm(props: ErkannteBehandlungsElementeUpdateFormProps): React.ReactElement;
