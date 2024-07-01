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
  Image,
} from "react-native";

export default function RegisterScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleRegister = () => {
    // Implement your login logic here
    console.log("Login attempt:", { email, password });

    if (password !== confirmPassword) {
      alert("Password and Confirm Password do not match");
      return;
    }

    if (email === "") {
      alert("Email cannot be empty");
      return;
    }

    if (password === "") {
      alert("Password cannot be empty");
      return;
    }

    // verify if password and confirmpassword are tbhe same
    router?.push("/(auth)/pin");
  };

  return (
    <GradientBackground>
      <View style={styles.container}>
        <LogoArea />
        <Text style={styles.title}>Create your Account</Text>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={true}
          />
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry={true}
          />
        </View>

        <View style={styles.rememberContainer}>
          <TouchableOpacity onPress={() => setRememberMe(!rememberMe)}>
            <View style={styles.rememberCheckbox}>
              {rememberMe && <View style={styles.checkedIcon} />}
            </View>
          </TouchableOpacity>
          <Text style={styles.whiteText}>Remember me</Text>
        </View>

        <ClassicButton title="Sign Up" onPress={handleRegister} />

        <View style={styles.textContainer}>
          <View style={styles.signUpContainer}>
            <Text style={styles.whiteText}>Already have an account?</Text>
            <TouchableOpacity onPress={() => router?.push("(auth)/login")}>
              <Text style={styles.signUp}>Sign in</Text>
            </TouchableOpacity>
          </View>
        </View>
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
    fontSize: 36,
    fontWeight: "bold",
    marginVertical: 30,
    color: "#fff",
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
    fontFamily: "Urbanist",
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
  signUp: {
    color: "#1E95D9",
  },
});
