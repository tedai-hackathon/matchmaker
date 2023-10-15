/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, IconProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type LogoWithTextOverridesProps = {
    LogoWithText?: PrimitiveOverrideProps<FlexProps>;
    logo?: PrimitiveOverrideProps<FlexProps>;
    "Frame 323"?: PrimitiveOverrideProps<FlexProps>;
    Union?: PrimitiveOverrideProps<IconProps>;
    "Frame 322"?: PrimitiveOverrideProps<FlexProps>;
    Vetta?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type LogoWithTextProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: LogoWithTextOverridesProps | undefined | null;
}>;
export default function LogoWithText(props: LogoWithTextProps): React.ReactElement;
