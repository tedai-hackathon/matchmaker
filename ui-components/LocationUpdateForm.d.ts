/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Location } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type LocationUpdateFormInputValues = {
    Street?: string;
    Nr?: string;
    PLZ?: string;
    CityName?: string;
    Type?: string;
    GEO_LAT?: number;
    GEO_LON?: number;
    Country?: string;
};
export declare type LocationUpdateFormValidationValues = {
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
export declare type LocationUpdateFormOverridesProps = {
    LocationUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Street?: PrimitiveOverrideProps<TextFieldProps>;
    Nr?: PrimitiveOverrideProps<TextFieldProps>;
    PLZ?: PrimitiveOverrideProps<TextFieldProps>;
    CityName?: PrimitiveOverrideProps<TextFieldProps>;
    Type?: PrimitiveOverrideProps<SelectFieldProps>;
    GEO_LAT?: PrimitiveOverrideProps<TextFieldProps>;
    GEO_LON?: PrimitiveOverrideProps<TextFieldProps>;
    Country?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type LocationUpdateFormProps = React.PropsWithChildren<{
    overrides?: LocationUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    location?: Location;
    onSubmit?: (fields: LocationUpdateFormInputValues) => LocationUpdateFormInputValues;
    onSuccess?: (fields: LocationUpdateFormInputValues) => void;
    onError?: (fields: LocationUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: LocationUpdateFormInputValues) => LocationUpdateFormInputValues;
    onValidate?: LocationUpdateFormValidationValues;
} & React.CSSProperties>;
export default function LocationUpdateForm(props: LocationUpdateFormProps): React.ReactElement;
