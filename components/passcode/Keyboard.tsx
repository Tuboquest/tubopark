import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { FC } from "react";
import { DigitProps, KeyboardProps } from "@/components/passcode/types";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome5 } from "@expo/vector-icons";
import { useHaptic } from "@/hooks/useHaptics";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

export const Keyboard: FC<KeyboardProps> = (props) => {
  return (
    <FlatList
      style={{
        height: "100%",
      }}
      scrollEnabled={false}
      data={Array.from({ length: 9 }, (_, i) => i + 1)}
      renderItem={({ item }) => (
        <Digit
          value={item}
          key={`keyboard-digit-${item}`}
          toColor={props?.toColor as string}
          fromColor={props?.fromColor as string}
          onPress={() => props?.onPress(item)}
          size={props?.keySize}
          color={props?.color}
        />
      )}
      numColumns={3}
      columnWrapperStyle={{
        justifyContent: "space-between",
        width: "100%",
      }}
      contentContainerStyle={{
        gap: 35,
        paddingHorizontal: 70,
        height: "100%",
        paddingTop: 15,
      }}
      ListFooterComponent={() => (
        <KeyboardFooter
          color={props?.color}
          keySize={props?.keySize}
          {...props}
        />
      )}
    />
  );
};

const KeyboardFooter: FC<KeyboardProps> = (props) => {
  const hapticsFeedback = useHaptic("light");
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
      }}
    >
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => {
          hapticsFeedback?.();
          props?.onPress("clear");
        }}
        style={{
          width: props?.keySize,
          height: props?.keySize,
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            color: props?.color,
            width: "100%",
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          clear
        </Text>
      </TouchableOpacity>
      <Digit
        value={0}
        size={props?.keySize}
        color={props?.color}
        fromColor={props?.fromColor as string}
        toColor={props?.toColor as string}
        onPress={() => props?.onPress(0)}
      />
      <Digit
        icon={() => (
          <FontAwesome5
            name="backspace"
            size={18}
            color={props?.color}
            style={{ marginRight: 1.5 }}
          />
        )}
        size={props?.keySize}
        fromColor={props?.fromColor as string}
        toColor={props?.toColor as string}
        onPress={() => props?.onPress("delete")}
        color={props?.color}
      />
    </View>
  );
};

const Digit: FC<DigitProps> = ({ icon: Icon, ...props }) => {
  const hapticsFeedback = useHaptic("light");
  const scale = useSharedValue(1);

  const animationStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
    };
  });

  const onDigitPress = () => {
    scale.value = withTiming(
      0.95,
      {
        duration: 100,
        easing: Easing.inOut(Easing.ease),
      },
      () => {
        scale.value = withTiming(1, {
          duration: 100,
          easing: Easing.inOut(Easing.ease),
        });
      },
    );
  };
  const handleDigitPress = (value: number | React.ComponentType) => {
    if (typeof value === "string") {
      props?.onPress(value);
    } else {
      // Else it's the backspace icon (delete action)
      props?.onPress("delete");
    }
  };

  return (
    <Animated.View style={animationStyle}>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => {
          hapticsFeedback?.();
          onDigitPress();
          handleDigitPress(props?.value as number | React.ComponentType);
        }}
        style={{
          width: props?.size,
          height: props?.size,
          borderRadius: 50,
          shadowColor: "#000",
          shadowOffset: {
            width: 5,
            height: 5,
          },
          shadowOpacity: 0.4,
          shadowRadius: 10,
          elevation: 5,
        }}
      >
        <LinearGradient
          colors={[props?.fromColor, props?.toColor]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={{
            flex: 1,
            borderRadius: 50,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {Icon ? (
            <Icon />
          ) : (
            <Text
              style={{
                color: props?.color,
                fontSize: 18,
                fontWeight: "bold",
              }}
            >
              {props?.value}
            </Text>
          )}
        </LinearGradient>
      </TouchableOpacity>
    </Animated.View>
  );
};
