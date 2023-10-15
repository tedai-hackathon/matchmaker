/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Reminder } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ReminderUpdateFormInputValues = {
    ErfassungsZeitpunkt?: string;
    Thema?: string;
    Termin?: string;
    Details?: string;
    Done?: boolean;
};
export declare type ReminderUpdateFormValidationValues = {
    ErfassungsZeitpunkt?: ValidationFunction<string>;
    Thema?: ValidationFunction<string>;
    Termin?: ValidationFunction<string>;
    Details?: ValidationFunction<string>;
    Done?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ReminderUpdateFormOverridesProps = {
    ReminderUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    ErfassungsZeitpunkt?: PrimitiveOverrideProps<TextFieldProps>;
    Thema?: PrimitiveOverrideProps<TextFieldProps>;
    Termin?: PrimitiveOverrideProps<TextFieldProps>;
    Details?: PrimitiveOverrideProps<TextFieldProps>;
    Done?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type ReminderUpdateFormProps = React.PropsWithChildren<{
    overrides?: ReminderUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    reminder?: Reminder;
    onSubmit?: (fields: ReminderUpdateFormInputValues) => ReminderUpdateFormInputValues;
    onSuccess?: (fields: ReminderUpdateFormInputValues) => void;
    onError?: (fields: ReminderUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ReminderUpdateFormInputValues) => ReminderUpdateFormInputValues;
    onValidate?: ReminderUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ReminderUpdateForm(props: ReminderUpdateFormProps): React.ReactElement;
