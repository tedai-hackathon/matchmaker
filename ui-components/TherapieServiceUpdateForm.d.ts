/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { TherapieService } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type TherapieServiceUpdateFormInputValues = {
    Service?: string;
};
export declare type TherapieServiceUpdateFormValidationValues = {
    Service?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TherapieServiceUpdateFormOverridesProps = {
    TherapieServiceUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Service?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TherapieServiceUpdateFormProps = React.PropsWithChildren<{
    overrides?: TherapieServiceUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    therapieService?: TherapieService;
    onSubmit?: (fields: TherapieServiceUpdateFormInputValues) => TherapieServiceUpdateFormInputValues;
    onSuccess?: (fields: TherapieServiceUpdateFormInputValues) => void;
    onError?: (fields: TherapieServiceUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TherapieServiceUpdateFormInputValues) => TherapieServiceUpdateFormInputValues;
    onValidate?: TherapieServiceUpdateFormValidationValues;
} & React.CSSProperties>;
export default function TherapieServiceUpdateForm(props: TherapieServiceUpdateFormProps): React.ReactElement;
