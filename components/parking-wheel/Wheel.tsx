import React, { FC } from "react";
import { StyleSheet, View } from "react-native";
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from "react-native-gesture-handler";
import Animated, {
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";
import Svg, { Text, G, Rect } from "react-native-svg";
import { canvas2Polar } from "react-native-redash";
import {
  MaskedDisk,
  MaskedDiskProps,
} from "@/components/parking-wheel/SquareMask";
import { DentedCircle } from "@/components/parking-wheel/DentedCircle";
import { GestureLayout } from "@/components/parking-wheel/GestureLayout";

type ClockDiskProps = {
  angle: number;
  onRotate: (angle: number) => void;
} & MaskedDiskProps;

const RADIUS = 180;
const SIZE = RADIUS * 2;
const TEXT_OFFSET = 50;
const SENSITIVITY_FACTOR = 1.8;

export const ClockDisk: FC<ClockDiskProps> = ({ onRotate, ...props }) => {
  const theta = useSharedValue(props?.angle); // Rotation in radians

  const onGestureEvent = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    { initialTheta: number; startTheta: number; lastTheta: number }
  >({
    onStart: ({ x, y }, ctx) => {
      const { theta: startTheta } = canvas2Polar(
        { x, y },
        { x: RADIUS, y: RADIUS },
      );
      ctx.startTheta = startTheta;
      ctx.initialTheta = theta.value;
      ctx.lastTheta = theta.value;
    },
    onActive: ({ x, y }, ctx) => {
      const { theta: newTheta } = canvas2Polar(
        { x, y },
        { x: RADIUS, y: RADIUS },
      );
      let deltaTheta = newTheta - ctx.startTheta;

      if (Math.abs(deltaTheta) > 5) {
        deltaTheta = 0;
      } else {
        if (deltaTheta > Math.PI) {
          deltaTheta -= 2 * Math.PI;
        } else if (deltaTheta < -Math.PI) {
          deltaTheta += 2 * Math.PI;
        }

        deltaTheta *= -1;
        deltaTheta *= SENSITIVITY_FACTOR;
      }

      const smoothTheta = ctx.lastTheta + deltaTheta * 0.3;
      theta.value = smoothTheta;
      ctx.startTheta = newTheta;
      ctx.lastTheta = smoothTheta;
    },
    onEnd: (_, ctx) => {
      const totalRotation = theta.value - ctx.initialTheta;
      const totalRotationDegrees = totalRotation * (180 / Math.PI);
      runOnJS(onRotate)(totalRotationDegrees);
    },
  });
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: `${theta.value}rad` }],
  }));
  const digits = getDigits();
  const maskProps = { ...(({ angle, ...others }) => others)(props) };

  return (
    <GestureLayout>
      <View style={styles.container}>
        <PanGestureHandler onGestureEvent={onGestureEvent}>
          <Animated.View style={[styles.quadrant, animatedStyle]}>
            <Svg height={SIZE} width={SIZE} viewBox="0 0 300 300">
              <DentedCircle />
              {digits.map((digit, i) => transformedText(digit, digit.value))}
            </Svg>
          </Animated.View>
        </PanGestureHandler>
        <View
          style={{
            position: "absolute",
            height: 300,
          }}
        >
          <MaskedDisk {...maskProps} />
        </View>
      </View>
    </GestureLayout>
  );
};

const transformedText: FC<any> = ({ x, y, angle }, str) => {
  const correctAngle = (angle * 180) / Math.PI - 180;

  return (
    <G key={str} transform={`translate(${x}, ${y})`}>
      <Rect
        x={-1} // Center the bar from x
        y={-35}
        width={2}
        height={15}
        fill="black"
        transform={`rotate(${correctAngle})`}
      />
      <Rect
        x={-26.5}
        y={-30}
        width={1}
        height={25}
        fill="black"
        transform={`rotate(${correctAngle + 15})`}
      />
      <Text
        fontSize={24}
        fill="black"
        x={0}
        y={0}
        textAnchor="middle"
        alignmentBaseline="middle"
        fontWeight="bold"
        transform={`rotate(${correctAngle})`}
      >
        {str}
      </Text>
    </G>
  );
};

const getDigits = () => {
  let positions = [];
  const TOTAL_HOURS = 12;
  const START_HOUR = 19;
  const DIGIT_RADIUS = 150;

  for (let i = 0; i < TOTAL_HOURS; i++) {
    const hour = START_HOUR - i;
    const angle = ((Math.PI * 2) / TOTAL_HOURS) * i;

    const x =
      DIGIT_RADIUS +
      (DIGIT_RADIUS - TEXT_OFFSET) * Math.cos(angle - Math.PI / 2);
    const y =
      DIGIT_RADIUS +
      (DIGIT_RADIUS - TEXT_OFFSET) * Math.sin(angle - Math.PI / 2);

    positions.push({ x, y, value: hour, angle });
  }

  return positions;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  quadrant: {
    width: SIZE,
    height: SIZE,
    backgroundColor: "transparent",
  },
});
