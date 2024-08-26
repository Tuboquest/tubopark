import { Text, StyleSheet, View } from "react-native";

import { GradientBackground } from "@/components/GradientBackground";

export default function MapScreen() {
  return (
    <GradientBackground>
      <View style={styles.titleContainer}>
        <Text style={styles.text}>Map page coming soon</Text>
      </View>
    </GradientBackground>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
  },
  text: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
});
