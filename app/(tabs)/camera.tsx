import { Image, StyleSheet, Platform, Text, View } from "react-native";

import Video from "react-native-video";
import WebView from "react-native-webview";
import { GradientBackground } from "@/components/GradientBackground";
import React from "react";

export default function CameraScreen() {
  const jwtToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoidHVib3F1ZXN0LXRlc3QiLCJleHAiOjE3MjQ3ODc4NDJ9.Ozc_vIKo3CryPJR-3Tqhm9BltS2s4-byZSlFuNG_70o";
  return (
    <GradientBackground>
      <View style={styles.titleContainer}>
        <Text style={styles.text}>Camera page coming soon</Text>
      </View>

      {/* <Video
        source={{ uri: "https://youtu.be/H3XIJYEPdus?si=8qsKO0SpqyCyAJu9." }}
        style={styles.video}
        controls={true}
        resizeMode="cover"
        repeat={true}
      /> */}

      {/* <WebView
        originWhitelist={["*"]}
        source={{
          uri: "http://192.168.1.27:8000/api/video",
          headers: {
            Authorization: `Bearer ${jwtToken}`,
            "Content-Type": "application/json",
          },
        }}
      /> */}
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
