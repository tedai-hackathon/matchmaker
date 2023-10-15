/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { AnimalType } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type AnimalTypeUpdateFormInputValues = {
    TypeName?: string;
};
export declare type AnimalTypeUpdateFormValidationValues = {
    TypeName?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AnimalTypeUpdateFormOverridesProps = {
    AnimalTypeUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    TypeName?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type AnimalTypeUpdateFormProps = React.PropsWithChildren<{
    overrides?: AnimalTypeUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    animalType?: AnimalType;
    onSubmit?: (fields: AnimalTypeUpdateFormInputValues) => AnimalTypeUpdateFormInputValues;
    onSuccess?: (fields: AnimalTypeUpdateFormInputValues) => void;
    onError?: (fields: AnimalTypeUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: AnimalTypeUpdateFormInputValues) => AnimalTypeUpdateFormInputValues;
    onValidate?: AnimalTypeUpdateFormValidationValues;
} & React.CSSProperties>;
export default function AnimalTypeUpdateForm(props: AnimalTypeUpdateFormProps): React.ReactElement;
