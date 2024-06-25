import { GradientBackground } from "@/components/GradientBackground";
import LogoArea from "@/components/LogoArea";
import { LinearGradient } from "expo-linear-gradient";

import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function LoginScreen() {
  return (
    <GradientBackground>
      <View style={styles.container}>
        <LogoArea />
      </View>
    </GradientBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
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
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 50,
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
