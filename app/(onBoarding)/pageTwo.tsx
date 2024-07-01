import { ClassicButton } from "@/components/button/ClassicButton";
import { GradientBackground } from "@/components/GradientBackground";
import LogoArea from "@/components/LogoArea";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";

import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

export default function onBoardingScreenTwo() {
  return (
    <GradientBackground>
      <View style={styles.logoContainer}>
        <Image source={require("@/assets/images/onBoardingTwoLogo.png")} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Find Parking Places Around You Easily</Text>
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Text>
      </View>
      <View style={styles.indicatorContainer}>
        {[...Array(3)].map((_, index) => (
          <View
            key={index}
            style={[
              styles.indicatorDot,
              index === 0 ? styles.activeIndicatorDot : null,
            ]}
          />
        ))}
      </View>
      <View style={styles.buttonContainer}>
        <ClassicButton
          title={"Next"}
          onPress={() => router?.push("/(onBoarding)/pageThree")}
        />
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => router?.push("/(tabs)")}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Skip</Text>
        </TouchableOpacity>
      </View>
    </GradientBackground>
  );
}

const styles = StyleSheet.create({
  logoContainer: {
    marginTop: 34,
    alignItems: "center",
  },
  textContainer: {
    gap: 50,
    margin: 16,
    justifyContent: "space-around",
  },
  buttonContainer: {
    margin: 16,
    gap: 12,
    alignItems: "center",
    justifyContent: "space-around",
  },
  title: {
    alignItems: "center",
    fontSize: 32,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 50,
    textAlign: "center",
  },
  text: {
    alignItems: "flex-end",
    fontSize: 16,
    color: "#F5F5F5",
    textAlign: "center",
  },
  image: {
    flex: 1,
    justifyContent: "flex-end",
  },
  indicatorContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  indicatorDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#777",
    marginHorizontal: 5,
  },
  activeIndicatorDot: {
    backgroundColor: "#4285f4",
  },
  button: {
    backgroundColor: "#35383F",
    padding: 15,
    borderRadius: 50,
    width: 326,
    height: 58,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 16,
  },
});
