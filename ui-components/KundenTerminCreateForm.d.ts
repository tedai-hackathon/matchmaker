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
export declare type KundenTerminCreateFormInputValues = {
    KundenName?: string;
    KundenAnfrage?: string;
    TerminVreinbarung?: string;
    OrtsVereinbarung?: string;
    AertztlicherVorbericht?: string;
    NotwendigeVorbereitungenIds?: string;
};
export declare type KundenTerminCreateFormValidationValues = {
    KundenName?: ValidationFunction<string>;
    KundenAnfrage?: ValidationFunction<string>;
    TerminVreinbarung?: ValidationFunction<string>;
    OrtsVereinbarung?: ValidationFunction<string>;
    AertztlicherVorbericht?: ValidationFunction<string>;
    NotwendigeVorbereitungenIds?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type KundenTerminCreateFormOverridesProps = {
    KundenTerminCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    KundenName?: PrimitiveOverrideProps<TextFieldProps>;
    KundenAnfrage?: PrimitiveOverrideProps<TextFieldProps>;
    TerminVreinbarung?: PrimitiveOverrideProps<TextFieldProps>;
    OrtsVereinbarung?: PrimitiveOverrideProps<TextFieldProps>;
    AertztlicherVorbericht?: PrimitiveOverrideProps<TextFieldProps>;
    NotwendigeVorbereitungenIds?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type KundenTerminCreateFormProps = React.PropsWithChildren<{
    overrides?: KundenTerminCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: KundenTerminCreateFormInputValues) => KundenTerminCreateFormInputValues;
    onSuccess?: (fields: KundenTerminCreateFormInputValues) => void;
    onError?: (fields: KundenTerminCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: KundenTerminCreateFormInputValues) => KundenTerminCreateFormInputValues;
    onValidate?: KundenTerminCreateFormValidationValues;
} & React.CSSProperties>;
export default function KundenTerminCreateForm(props: KundenTerminCreateFormProps): React.ReactElement;
