import React, { FC } from "react";
import Svg, {
  Rect,
  Defs,
  Mask,
  G,
  Path,
  LinearGradient,
  Stop,
  Polygon,
} from "react-native-svg";
import { Text, View } from "react-native";

type BaseDiskProps = {
  showPin?: boolean;
  pinColor?: string;
};

export type MaskedDiskProps = BaseDiskProps &
  (
    | {
        gradientBackground?: false;
        backgroundColor?: string;
      }
    | {
        gradientBackground: true;
        fromColor: string;
        toColor: string;
      }
  );

export const MaskedDisk: FC<MaskedDiskProps> = (props) => {
  const SIZE = 350;
  const maskID = "maskRect";

  return (
    <Svg
      height={SIZE}
      width={SIZE}
      style={{
        shadowColor: "black",
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
      }}
    >
      <Defs>
        {props?.gradientBackground && (
          <LinearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <Stop offset="0%" stopColor={props?.fromColor} />
            <Stop offset="100%" stopColor={props?.toColor} />
          </LinearGradient>
        )}

        <Mask id={maskID} x={0} y={0} height={SIZE} width={SIZE}>
          <Rect
            x={0}
            y={0}
            width={SIZE}
            height={SIZE}
            fill="#fff" // Filling color - defines which part is visible
          />
          <Path
            d="M 110,200 Q 175,250 235,200 L 275,250 Q 175,330 75,250 L 110,200"
            fill="#000" // Black - makes this part transparent
          />
        </Mask>
      </Defs>
      <G mask={`url(#${maskID})`}>
        {/* Card background */}
        <Rect
          x={0}
          y={0}
          width={SIZE}
          height={SIZE}
          fill={
            props?.gradientBackground
              ? "url(#grad1)"
              : props?.backgroundColor ?? "#2863a7"
          }
          rx="15" // X axis corners radius
          ry="15" // Y axis corners radius
        />
      </G>
      <Polygon
        points="175,210 190,180 160,180"
        stroke="#FFF"
        stroke-width="6"
        strokeLinejoin={"round"}
        fill="#FFF"
      />
      <View
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: 170,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: 78,
            fontWeight: "bold",
            borderWidth: 2,
            paddingHorizontal: 20,
            borderRadius: 10,
            borderColor: "white",
            color: "white",
          }}
        >
          P
        </Text>
        {props?.showPin && (
          <View
            style={{
              marginTop: 15,
              width: 20,
              height: 20,
              backgroundColor: props?.pinColor ?? "#bdbca9",
              borderRadius: 50,
              position: "relative",
            }}
          >
            <View
              style={{
                position: "absolute",
                top: 3,
                right: 5,
                width: 5,
                height: 5,
                borderRadius: 50,
                backgroundColor: "#FFFFF50",
              }}
            />
          </View>
        )}
      </View>
    </Svg>
  );
};
