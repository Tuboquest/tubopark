import { Text } from "react-native";

import { ClockDisk } from "@/components/parking-wheel";
import { useState } from "react";
import { GradientBackground } from "@/components/GradientBackground";
import { Colors } from "@/constants/Colors";
import { Theme } from "@/constants/Theme";

export default function WheelScreen() {
  // TODO: replace tmpAngle:
  const [angle, setAngle] = useState(45);

  return (
    <GradientBackground>
      <Text
        style={{
          fontSize: 32,
          color: Colors?.dark?.text,
          fontWeight: "bold",
          paddingHorizontal: Theme?.paddingHorizontal,
        }}
      >
        Screen title
      </Text>
      <Text
        style={{
          marginTop: 5,
          fontSize: 16,
          color: Colors?.dark?.text,
          paddingHorizontal: Theme?.paddingHorizontal,
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt.
      </Text>
      <ClockDisk
        angle={angle}
        onRotate={(rotation) => {
          console.log(`Rotation ended. Total rotation: ${rotation} degrees`);
        }}
        gradientBackground
        fromColor={"#83A5C7"}
        toColor={"#074264"}
      />
    </GradientBackground>
  );
}
