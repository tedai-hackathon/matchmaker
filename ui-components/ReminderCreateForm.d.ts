/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ReminderCreateFormInputValues = {
    ErfassungsZeitpunkt?: string;
    Thema?: string;
    Termin?: string;
    Details?: string;
    Done?: boolean;
};
export declare type ReminderCreateFormValidationValues = {
    ErfassungsZeitpunkt?: ValidationFunction<string>;
    Thema?: ValidationFunction<string>;
    Termin?: ValidationFunction<string>;
    Details?: ValidationFunction<string>;
    Done?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ReminderCreateFormOverridesProps = {
    ReminderCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    ErfassungsZeitpunkt?: PrimitiveOverrideProps<TextFieldProps>;
    Thema?: PrimitiveOverrideProps<TextFieldProps>;
    Termin?: PrimitiveOverrideProps<TextFieldProps>;
    Details?: PrimitiveOverrideProps<TextFieldProps>;
    Done?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type ReminderCreateFormProps = React.PropsWithChildren<{
    overrides?: ReminderCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ReminderCreateFormInputValues) => ReminderCreateFormInputValues;
    onSuccess?: (fields: ReminderCreateFormInputValues) => void;
    onError?: (fields: ReminderCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ReminderCreateFormInputValues) => ReminderCreateFormInputValues;
    onValidate?: ReminderCreateFormValidationValues;
} & React.CSSProperties>;
export default function ReminderCreateForm(props: ReminderCreateFormProps): React.ReactElement;
