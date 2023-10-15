/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Icon, Text } from "@aws-amplify/ui-react";
export default function LogoWithText(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="10px"
      direction="column"
      width="unset"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "LogoWithText")}
      {...rest}
    >
      <Flex
        gap="10px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "logo")}
      >
        <Flex
          gap="10px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 323")}
        >
          <Icon
            width="43.77px"
            height="38px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 43.766845703125,
              height: 38.001129150390625,
            }}
            paths={[
              {
                d: "M27.1951 37.6961C27.2945 37.8679 27.4781 37.9737 27.6769 37.9737L32.0054 37.9737C32.4337 37.9737 32.7014 37.511 32.4872 37.1408L16.7644 9.96168C16.5502 9.59148 16.0148 9.59148 15.8007 9.96168C10.5706 19.0026 5.328 28.0842 0.0753175 37.1683C-0.138741 37.5385 0.128959 38.0011 0.55722 38.0011L20.8308 38.0011C21.2591 38.0011 21.5268 37.5384 21.3127 37.1682L19.2389 33.5834C19.1395 33.4116 18.9558 33.3057 18.7571 33.3057L8.38781 33.3057C8.17365 33.3057 8.03981 33.0744 8.14688 32.8893L16.0397 19.2454C16.1468 19.0603 16.4145 19.0603 16.5216 19.2454L27.1951 37.6961Z",
                fill: "rgba(168,255,252,1)",
                fillRule: "nonzero",
              },
              {
                d: "M19.2442 4.00901C19.1448 4.18082 19.1448 4.39249 19.2442 4.5643L38.4106 37.6961C38.51 37.8679 38.6937 37.9737 38.8925 37.9737L43.2096 37.9737C43.6379 37.9737 43.9056 37.511 43.6914 37.1408L22.3665 0.277646C22.1523 -0.0925493 21.6169 -0.0925485 21.4028 0.277647L19.2442 4.00901Z",
                fill: "rgba(168,255,252,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            {...getOverrideProps(overrides, "Union")}
          ></Icon>
        </Flex>
        <Flex
          gap="10px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 322")}
        >
          <Text
            fontFamily="Inter"
            fontSize="50.2407341003418px"
            fontWeight="700"
            color="rgba(186,181,181,1)"
            lineHeight="75.36109924316406px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="150.72px"
            height="38.18px"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Vetta"
            {...getOverrideProps(overrides, "Vetta")}
          ></Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
