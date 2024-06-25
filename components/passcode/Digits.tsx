import { View } from "react-native";
import { FC, useEffect } from "react";
import { DigitsProps } from "@/components/passcode/types";
import Animated, {
  Easing,
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

export const Digits: FC<DigitsProps> = ({
  code,
  isWrong,
  activeColor,
  inactiveColor,
  errorColor,
}) => {
  return (
    <View
      style={{
        height: 75,
        //
        flexDirection: "row",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        gap: 15,
      }}
    >
      {Array.from({ length: 4 }, (_, i) => i + 1)?.map((digit, i) => (
        <Digit
          key={`digit-${digit}`}
          digit={digit}
          isSet={!!code?.[i]}
          isWrong={isWrong}
          activeColor={activeColor}
          inactiveColor={inactiveColor}
          errorColor={errorColor}
        />
      ))}
    </View>
  );
};

const Digit = ({
  digit,
  isSet,
  isWrong,
  inactiveColor,
  activeColor,
  errorColor,
}: {
  digit: number;
  isSet: boolean;
  isWrong?: boolean;
  inactiveColor?: string;
  activeColor?: string;
  errorColor?: string;
}) => {
  const backgroundColor = useSharedValue(0);
  const scale = useSharedValue(1);

  const animationStyle = useAnimatedStyle(() => {
    const colors = isWrong
      ? [activeColor, errorColor]
      : [inactiveColor, activeColor];
    const color = interpolateColor(
      backgroundColor.value,
      [0, 1],
      colors as string[],
    );
    return {
      transform: [{ scale: scale.value }],
      backgroundColor: color,
    };
  });

  useEffect(() => {
    if (isSet) {
      scale.value = withTiming(
        1.5,
        {
          duration: 300,
          easing: Easing.inOut(Easing.ease),
        },
        () => {
          scale.value = withTiming(1, {
            duration: 300,
            easing: Easing.inOut(Easing.ease),
          });
        },
      );
      backgroundColor.value = withTiming(1, {
        duration: 300,
        easing: Easing.inOut(Easing.ease),
      });
    } else {
      scale.value = withTiming(
        0.8,
        {
          duration: 300,
          easing: Easing.inOut(Easing.ease),
        },
        () => {
          scale.value = withTiming(1, {
            duration: 300,
            easing: Easing.inOut(Easing.ease),
          });
        },
      );
      backgroundColor.value = withTiming(0, {
        duration: 300,
        easing: Easing.inOut(Easing.ease),
      });
    }
  }, [isSet]);

  useEffect(() => {
    if (isWrong) {
      backgroundColor.value = withTiming(1, {
        duration: 300,
        easing: Easing.inOut(Easing.ease),
      });
    } else if (digit !== 1) {
      backgroundColor.value = withTiming(0, {
        duration: 300,
        easing: Easing.inOut(Easing.ease),
      });
    }
  }, [isWrong]);
  return (
    <Animated.View
      style={[
        {
          width: 20,
          height: 20,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 50,
        },
        animationStyle,
      ]}
    >
      {/*<Text>{digit}</Text>*/}
    </Animated.View>
  );
};
