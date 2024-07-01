import { ClassicButton } from "@/components/button/ClassicButton";
import { GradientBackground } from "@/components/GradientBackground";
import LogoArea from "@/components/LogoArea";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";

import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function StartScreen() {
  return (
    <GradientBackground>
      <View style={styles.container}>
        <LogoArea />

        <View style={styles.titleContainer}>
          <Text style={styles.title}>Choose your connection</Text>
        </View>
        <View style={styles.buttonContainer}>
          <ClassicButton
            title={"Create account"}
            onPress={() => router?.push("/(auth)/register")}
          />
          <ClassicButton
            title={"Login"}
            onPress={() => router?.push("/(auth)/login")}
          />
          {/* <ClassicButton
            title={"OnBoarding"}
            onPress={() => router?.push("/(onBoarding)/pageOne")}
          /> */}
        </View>
      </View>
    </GradientBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    marginTop: 30,
    gap: 35,
  },
  titleContainer: {
    width: "100%",
    marginTop: 75,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    width: "100%",
    position: "absolute",
    top: 30,
  },
  time: {
    color: "#fff",
    fontSize: 16,
  },
  signal: {
    flexDirection: "row",
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#18202d",
    borderWidth: 2,
    borderColor: "#1181ff",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
  },
  logoText: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#1181ff",
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 50,
    paddingHorizontal: 24,
  },
  button: {
    backgroundColor: "#1181ff",
    padding: 15,
    borderRadius: 20,
    width: 200,
    marginTop: 30,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 16,
  },
});
