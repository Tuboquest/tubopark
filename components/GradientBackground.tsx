import { FC, ReactNode } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";

type GradientBackgroundProps = {
  children: ReactNode;
};

export const GradientBackground: FC<GradientBackgroundProps> = ({
  children,
}) => {
  return (
    <LinearGradient
      colors={["#1E95D9", "#000"]}
      style={{ flex: 1, paddingVertical: 10 }}
    >
      <SafeAreaView style={{ flex: 1 }} edges={["top"]}>
        {children}
      </SafeAreaView>
    </LinearGradient>
  );
};
