/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type LocationCreateFormInputValues = {
    Street?: string;
    Nr?: string;
    PLZ?: string;
    CityName?: string;
    Type?: string;
    GEO_LAT?: number;
    GEO_LON?: number;
    Country?: string;
};
export declare type LocationCreateFormValidationValues = {
    Street?: ValidationFunction<string>;
    Nr?: ValidationFunction<string>;
    PLZ?: ValidationFunction<string>;
    CityName?: ValidationFunction<string>;
    Type?: ValidationFunction<string>;
    GEO_LAT?: ValidationFunction<number>;
    GEO_LON?: ValidationFunction<number>;
    Country?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type LocationCreateFormOverridesProps = {
    LocationCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Street?: PrimitiveOverrideProps<TextFieldProps>;
    Nr?: PrimitiveOverrideProps<TextFieldProps>;
    PLZ?: PrimitiveOverrideProps<TextFieldProps>;
    CityName?: PrimitiveOverrideProps<TextFieldProps>;
    Type?: PrimitiveOverrideProps<SelectFieldProps>;
    GEO_LAT?: PrimitiveOverrideProps<TextFieldProps>;
    GEO_LON?: PrimitiveOverrideProps<TextFieldProps>;
    Country?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type LocationCreateFormProps = React.PropsWithChildren<{
    overrides?: LocationCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: LocationCreateFormInputValues) => LocationCreateFormInputValues;
    onSuccess?: (fields: LocationCreateFormInputValues) => void;
    onError?: (fields: LocationCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: LocationCreateFormInputValues) => LocationCreateFormInputValues;
    onValidate?: LocationCreateFormValidationValues;
} & React.CSSProperties>;
export default function LocationCreateForm(props: LocationCreateFormProps): React.ReactElement;
