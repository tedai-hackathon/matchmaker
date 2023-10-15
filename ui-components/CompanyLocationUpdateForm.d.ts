/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { CompanyLocation } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CompanyLocationUpdateFormInputValues = {};
export declare type CompanyLocationUpdateFormValidationValues = {};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CompanyLocationUpdateFormOverridesProps = {
    CompanyLocationUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
} & EscapeHatchProps;
export declare type CompanyLocationUpdateFormProps = React.PropsWithChildren<{
    overrides?: CompanyLocationUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    companyLocation?: CompanyLocation;
    onSubmit?: (fields: CompanyLocationUpdateFormInputValues) => CompanyLocationUpdateFormInputValues;
    onSuccess?: (fields: CompanyLocationUpdateFormInputValues) => void;
    onError?: (fields: CompanyLocationUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CompanyLocationUpdateFormInputValues) => CompanyLocationUpdateFormInputValues;
    onValidate?: CompanyLocationUpdateFormValidationValues;
} & React.CSSProperties>;
export default function CompanyLocationUpdateForm(props: CompanyLocationUpdateFormProps): React.ReactElement;
