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
export declare type AnimalRaceCreateFormInputValues = {
    RaceName?: string;
};
export declare type AnimalRaceCreateFormValidationValues = {
    RaceName?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AnimalRaceCreateFormOverridesProps = {
    AnimalRaceCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    RaceName?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type AnimalRaceCreateFormProps = React.PropsWithChildren<{
    overrides?: AnimalRaceCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: AnimalRaceCreateFormInputValues) => AnimalRaceCreateFormInputValues;
    onSuccess?: (fields: AnimalRaceCreateFormInputValues) => void;
    onError?: (fields: AnimalRaceCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: AnimalRaceCreateFormInputValues) => AnimalRaceCreateFormInputValues;
    onValidate?: AnimalRaceCreateFormValidationValues;
} & React.CSSProperties>;
export default function AnimalRaceCreateForm(props: AnimalRaceCreateFormProps): React.ReactElement;
