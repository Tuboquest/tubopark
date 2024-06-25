import { Text, TouchableOpacity } from "react-native";
import { FC, useEffect } from "react";
import { ValidateButtonProps } from "@/components/passcode/types";
import Animated, {
  useSharedValue,
  withTiming,
  Easing,
  useAnimatedStyle,
} from "react-native-reanimated";
import { useHaptic } from "@/hooks/useHaptics";

export const ValidateButton: FC<ValidateButtonProps> = ({
  validationText,
  isVisible,
  onPress,
  validationColor,
  validationBackgroundColor,
}) => {
  const bottom = useSharedValue(200);
  const opacity = useSharedValue(0);
  const hapticsFeedback = useHaptic("light");

  const animationStyle = useAnimatedStyle(() => {
    return {
      bottom: bottom.value,
      opacity: opacity.value,
    };
  });

  useEffect(() => {
    if (isVisible) {
      bottom.value = withTiming(20, {
        duration: 300,
        easing: Easing.inOut(Easing.ease),
      });
      opacity.value = withTiming(1, {
        duration: 300,
        easing: Easing.inOut(Easing.ease),
      });
    } else {
      bottom.value = withTiming(-200, {
        duration: 300,
        easing: Easing.inOut(Easing.ease),
      });
      opacity.value = withTiming(0, {
        duration: 300,
        easing: Easing.inOut(Easing.ease),
      });
    }
  }, [isVisible]);

  return (
    <Animated.View
      style={[
        {
          position: "absolute",
          bottom: -200,
          height: 70,
          width: "100%",
          paddingHorizontal: 70,
        },
        animationStyle,
      ]}
    >
      <TouchableOpacity
        activeOpacity={0.8}
        style={{
          backgroundColor: validationBackgroundColor,
          paddingVertical: 15,
          borderRadius: 50,
          shadowColor: "black",
          shadowOffset: {
            width: 0,
            height: 10,
          },
          shadowOpacity: 0.32,
          shadowRadius: 5.46,
        }}
        onPress={() => {
          hapticsFeedback?.();
          onPress();
        }}
      >
        <Text
          style={{
            color: validationColor,
            textAlign: "center",
            fontWeight: "bold",
            fontSize: 18,
          }}
        >
          {validationText}
        </Text>
      </TouchableOpacity>
    </Animated.View>
  );
};
