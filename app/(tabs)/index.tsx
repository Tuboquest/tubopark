import React from "react";
import { Text, StyleSheet, Platform, View } from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Link, router } from "expo-router";
import { ClassicButton } from "@/components/button/ClassicButton";
import { GradientBackground } from "@/components/GradientBackground";
import LogoArea from "@/components/LogoArea";

export default function HomeScreen() {
  const [userName, setUserName] = React.useState<string>("Willy");
  return (
    <GradientBackground>
      <View style={styles.titleContainer}>
        <LogoArea />
        <View style={styles.textContainer}>
          <Text style={styles.text}>Welcome back to TuboQuest</Text>
          <Text style={styles.text}>{userName}</Text>
        </View>
        {/* <Link
          style={{
            color: "white",
            textDecorationLine: "underline",
            fontSize: 24,
          }}
          href={"test-passcode"}
        >
          Test Passcode
        </Link>
        <ClassicButton
          title={"TO STATITICS"}
          onPress={() => router?.push("(others)/statistic")}
        /> */}
      </View>
    </GradientBackground>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    alignItems: "center",
    height: "100%",
    gap: 200,
  },
  textContainer: {
    alignItems: "center",
    gap: 8,
  },
  text: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
});
