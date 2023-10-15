/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { AnimalRace } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type AnimalRaceUpdateFormInputValues = {
    RaceName?: string;
};
export declare type AnimalRaceUpdateFormValidationValues = {
    RaceName?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AnimalRaceUpdateFormOverridesProps = {
    AnimalRaceUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    RaceName?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type AnimalRaceUpdateFormProps = React.PropsWithChildren<{
    overrides?: AnimalRaceUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    animalRace?: AnimalRace;
    onSubmit?: (fields: AnimalRaceUpdateFormInputValues) => AnimalRaceUpdateFormInputValues;
    onSuccess?: (fields: AnimalRaceUpdateFormInputValues) => void;
    onError?: (fields: AnimalRaceUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: AnimalRaceUpdateFormInputValues) => AnimalRaceUpdateFormInputValues;
    onValidate?: AnimalRaceUpdateFormValidationValues;
} & React.CSSProperties>;
export default function AnimalRaceUpdateForm(props: AnimalRaceUpdateFormProps): React.ReactElement;
