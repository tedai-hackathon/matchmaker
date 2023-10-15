/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  getOverrideProps,
  getOverridesFromVariants,
  mergeVariantsAndOverrides,
} from "@aws-amplify/ui-react/internal";
import { Flex, Icon } from "@aws-amplify/ui-react";
export default function SideBarToggel2(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      variantValues: { property1: "Default" },
      overrides: {
        "Line 1": {},
        "Line 2": {},
        "Line 3": {},
        SideBarToggel2: {},
      },
    },
    {
      variantValues: { property1: "Variant2" },
      overrides: {
        "Line 1": {
          viewBox: {
            minX: 0,
            minY: 0,
            width: 36.199462890625,
            height: 36.199462890625,
          },
        },
        "Line 2": {
          viewBox: {
            minX: 0,
            minY: 0,
            width: 36.199462890625,
            height: 36.199462890625,
          },
        },
        "Line 3": {
          viewBox: {
            minX: 0,
            minY: 0,
            width: 36.199462890625,
            height: 36.199462890625,
          },
        },
        SideBarToggel2: { gap: "0" },
      },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <Flex
      gap="16.670724868774414px"
      direction="column"
      width="unset"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      overflow="hidden"
      position="relative"
      padding="34.32208251953125px 24.515771865844727px 34.32208251953125px 24.515771865844727px"
      backgroundColor="rgba(255,255,255,1)"
      display="flex"
      {...getOverrideProps(overrides, "SideBarToggel2")}
      {...rest}
    >
      <Icon
        width="51.19px"
        height="0px"
        viewBox={{ minX: 0, minY: 0, width: 51.19384765625, height: 1 }}
        paths={[
          {
            d: "M0 -1.54198C-0.851613 -1.54198 -1.54198 -0.851613 -1.54198 0C-1.54198 0.851613 -0.851613 1.54198 0 1.54198L0 -1.54198ZM51.1938 1.54198C52.0454 1.54198 52.7358 0.851613 52.7358 0C52.7358 -0.851613 52.0454 -1.54198 51.1938 -1.54198L51.1938 1.54198ZM0 1.54198L51.1938 1.54198L51.1938 -1.54198L0 -1.54198L0 1.54198Z",
            stroke: "rgba(0,0,0,1)",
            fillRule: "nonzero",
            strokeWidth: 3,
          },
        ]}
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        {...getOverrideProps(overrides, "Line 1")}
      ></Icon>
      <Icon
        width="51.19px"
        height="0px"
        viewBox={{ minX: 0, minY: 0, width: 51.19384765625, height: 1 }}
        paths={[
          {
            d: "M0 -1.54198C-0.851613 -1.54198 -1.54198 -0.851613 -1.54198 0C-1.54198 0.851613 -0.851613 1.54198 0 1.54198L0 -1.54198ZM51.1938 1.54198C52.0454 1.54198 52.7358 0.851613 52.7358 0C52.7358 -0.851613 52.0454 -1.54198 51.1938 -1.54198L51.1938 1.54198ZM0 1.54198L51.1938 1.54198L51.1938 -1.54198L0 -1.54198L0 1.54198Z",
            stroke: "rgba(0,0,0,1)",
            fillRule: "nonzero",
            strokeWidth: 3,
          },
        ]}
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        {...getOverrideProps(overrides, "Line 2")}
      ></Icon>
      <Icon
        width="51.19px"
        height="0px"
        viewBox={{ minX: 0, minY: 0, width: 51.19384765625, height: 1 }}
        paths={[
          {
            d: "M0 -1.54198C-0.851613 -1.54198 -1.54198 -0.851613 -1.54198 0C-1.54198 0.851613 -0.851613 1.54198 0 1.54198L0 -1.54198ZM51.1938 1.54198C52.0454 1.54198 52.7358 0.851613 52.7358 0C52.7358 -0.851613 52.0454 -1.54198 51.1938 -1.54198L51.1938 1.54198ZM0 1.54198L51.1938 1.54198L51.1938 -1.54198L0 -1.54198L0 1.54198Z",
            stroke: "rgba(0,0,0,1)",
            fillRule: "nonzero",
            strokeWidth: 3,
          },
        ]}
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        {...getOverrideProps(overrides, "Line 3")}
      ></Icon>
    </Flex>
  );
}
