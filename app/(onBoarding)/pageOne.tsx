import { router } from "expo-router";

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

export default function onBoardingScreenOne() {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={() => router?.push("/(onBoarding)/pageTwo")}
      style={styles.container}
    >
      <ImageBackground
        source={require("@/assets/images/diskBackground.jpg")}
        resizeMode="cover"
        style={styles.image}
      >
        <View style={styles.textContainer}>
          <Text style={styles.title}>Welcome to TUBOPARK</Text>
          <Text style={styles.text}>A Moment in Tubo...</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textContainer: {
    gap: 96,
    margin: 16,
    justifyContent: "space-around",
  },
  title: {
    alignItems: "center",
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 50,
  },
  text: {
    alignItems: "flex-end",
    fontSize: 16,
    color: "#F5F5F5",
    textAlign: "right",
    fontStyle: "italic",
  },
  image: {
    height: "100%",
    justifyContent: "flex-end",
  },
});
