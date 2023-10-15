/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { KundenTermin } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type KundenTerminUpdateFormInputValues = {
    KundenName?: string;
    KundenAnfrage?: string;
    TerminVreinbarung?: string;
    OrtsVereinbarung?: string;
    AertztlicherVorbericht?: string;
    NotwendigeVorbereitungenIds?: string;
};
export declare type KundenTerminUpdateFormValidationValues = {
    KundenName?: ValidationFunction<string>;
    KundenAnfrage?: ValidationFunction<string>;
    TerminVreinbarung?: ValidationFunction<string>;
    OrtsVereinbarung?: ValidationFunction<string>;
    AertztlicherVorbericht?: ValidationFunction<string>;
    NotwendigeVorbereitungenIds?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type KundenTerminUpdateFormOverridesProps = {
    KundenTerminUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    KundenName?: PrimitiveOverrideProps<TextFieldProps>;
    KundenAnfrage?: PrimitiveOverrideProps<TextFieldProps>;
    TerminVreinbarung?: PrimitiveOverrideProps<TextFieldProps>;
    OrtsVereinbarung?: PrimitiveOverrideProps<TextFieldProps>;
    AertztlicherVorbericht?: PrimitiveOverrideProps<TextFieldProps>;
    NotwendigeVorbereitungenIds?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type KundenTerminUpdateFormProps = React.PropsWithChildren<{
    overrides?: KundenTerminUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    kundenTermin?: KundenTermin;
    onSubmit?: (fields: KundenTerminUpdateFormInputValues) => KundenTerminUpdateFormInputValues;
    onSuccess?: (fields: KundenTerminUpdateFormInputValues) => void;
    onError?: (fields: KundenTerminUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: KundenTerminUpdateFormInputValues) => KundenTerminUpdateFormInputValues;
    onValidate?: KundenTerminUpdateFormValidationValues;
} & React.CSSProperties>;
export default function KundenTerminUpdateForm(props: KundenTerminUpdateFormProps): React.ReactElement;
