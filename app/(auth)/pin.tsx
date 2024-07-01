import { ClassicButton } from "@/components/button/ClassicButton";
import { GradientBackground } from "@/components/GradientBackground";
import LogoArea from "@/components/LogoArea";
import { router } from "expo-router";
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

export default function PinScren() {
  const [pinSaved, setPinSaved] = useState<string>("");
  const [isPinSaved, setIsPinSaved] = useState<boolean>(false);

  const handleSavePin = () => {
    setIsPinSaved(true);
  };

  const handleConfirmPin = () => {
    router.push("/(onBoarding)/pageOne");
  };

  return (
    <GradientBackground>
      <View style={styles.container}>
        <LogoArea />
        <Text style={styles.title}>
          {isPinSaved ? "Confirm your pin code" : "Create your pin code"}
        </Text>

        <Text style={styles.description}>
          The pin code will be used to connect to the application
        </Text>
        <View style={styles.numberPad}>
          <View style={styles.numberPad}>
            <View style={styles.numberButton}>
              <TextInput style={styles.numberText} maxLength={1}></TextInput>
            </View>
            <View style={styles.numberButton}>
              <TextInput style={styles.numberText} maxLength={1}></TextInput>
            </View>
            <View style={styles.numberButton}>
              <TextInput style={styles.numberText} maxLength={1}></TextInput>
            </View>
            <View style={styles.numberButton}>
              <TextInput style={styles.numberText} maxLength={1}></TextInput>
            </View>
          </View>
        </View>
        {isPinSaved ? (
          <ClassicButton title={"Create"} onPress={handleConfirmPin} />
        ) : (
          <ClassicButton title={"Next"} onPress={handleSavePin} />
        )}
      </View>
    </GradientBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  textContainer: {
    marginTop: 24,
    gap: 35,
    justifyContent: "center",
    alignItems: "center",
  },
  signUpContainer: {
    flexDirection: "row",
    gap: 5,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 30,
    color: "#fff",
    marginBottom: 125,
  },
  inputContainer: {
    width: "100%",
    marginBottom: 24,
    gap: 24,
    alignItems: "center",
  },
  input: {
    height: 60,
    width: 324,
    backgroundColor: "#FFF",
    paddingHorizontal: 15,
    borderRadius: 10,
    marginBottom: 10,
    color: "#000",
  },
  rememberContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  rememberCheckbox: {
    width: 20,
    height: 20,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  checkedIcon: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#fff",
  },
  button: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    width: "100%",
    marginBottom: 20,
  },
  buttonText: {
    color: "#000",
    textAlign: "center",
    fontWeight: "bold",
  },
  forgotPassword: {
    color: "#1E95D9",
    marginBottom: 10,
  },
  whiteText: {
    color: "#fff",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 16,
    alignItems: "center",
  },
  time: {
    fontSize: 16,
    color: "#fff",
  },
  signal: {
    flexDirection: "row",
    alignItems: "center",
  },
  signalIcon: {
    fontSize: 16,
    color: "#fff",
  },
  logoContainer: {
    alignItems: "center",
    marginTop: 48,
  },
  description: {
    fontSize: 16,
    color: "#fff",
    textAlign: "center",
    marginTop: 16,
  },
  numberPad: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 32,
    width: 327,
    marginBottom: 50,
  },
  numberButton: {
    width: 70,
    height: 70,
    borderRadius: 10,
    backgroundColor: "#83A5C7",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
  },
  numberText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
  },
  nextButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
});
