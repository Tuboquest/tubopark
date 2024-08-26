import { Image, StyleSheet, Platform, Text, View } from "react-native";

import Video from "react-native-video";
import { GradientBackground } from "@/components/GradientBackground";

export default function CameraScreen() {
  return (
    <GradientBackground>
      <View style={styles.titleContainer}>
        <Text style={styles.text}>Camera page coming soon</Text>
      </View>

      <Video
        source={{ uri: "https://youtu.be/H3XIJYEPdus?si=8qsKO0SpqyCyAJu9." }}
        style={styles.video}
        controls={true}
        resizeMode="cover"
        repeat={true}
      />
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
  video: {
    width: 200 * 0.9,
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
});
