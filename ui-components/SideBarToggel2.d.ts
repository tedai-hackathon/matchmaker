/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, IconProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SideBarToggel2OverridesProps = {
    SideBarToggel2?: PrimitiveOverrideProps<FlexProps>;
    "Line 1"?: PrimitiveOverrideProps<IconProps>;
    "Line 2"?: PrimitiveOverrideProps<IconProps>;
    "Line 3"?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type SideBarToggel2Props = React.PropsWithChildren<Partial<FlexProps> & {
    property1?: "Default" | "Variant2";
} & {
    overrides?: SideBarToggel2OverridesProps | undefined | null;
}>;
export default function SideBarToggel2(props: SideBarToggel2Props): React.ReactElement;
