import { ClassicButton } from "@/components/button/ClassicButton";
import { GradientBackground } from "@/components/GradientBackground";
import { PinInput } from "@/components/input/PinInput";
import LogoArea from "@/components/LogoArea";
import { router } from "expo-router";
import { SetStateAction, useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

export default function sendMailScreen() {
  const [email, setEmail] = useState<string>("");
  const [isSubmit, setIsSubmit] = useState<boolean>(false);
  const [pinTyped, setPinTyped] = useState<string[]>(["", "", "", ""]);

  const handleSendEmail = async () => {
    // Implement your send email logic here
    // const user = await Auth.sendEmail(email);
    // auth(user.token, user);
    // if (!user.token) {
    //   alert(user.email);
    //   return;
    // }
    // router?.push("/(tabs)");
    // alert(email);
    if (!email) {
      alert("Please enter your email");
      return;
    }
    setIsSubmit(true);
  };

  const handlerSendCode = () => {
    // Implement your send code logic here
    // const user = await Auth.sendCode(email);
    // auth(user.token, user);
    // if (!user.token) {
    //   alert(user.email);
    //   return;
    // }
    // router?.push("/(tabs)");
    console.log("change page");
    if (pinTyped.includes("")) {
      alert("Please enter the code");
      return;
    }

    router?.push("/(resetPassword)/createNewPassword");
  };

  return (
    <GradientBackground>
      <View style={styles.container}>
        <LogoArea />
        {isSubmit ? (
          <>
            <View style={styles.titleContainer}>
              <Text style={styles.description}>
                Code has been send to {email}
              </Text>
            </View>
            <PinInput pinTyped={pinTyped} setPinTyped={setPinTyped} />
            <ClassicButton title="Verify" onPress={handlerSendCode} />
          </>
        ) : (
          <>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>Please enter your mail</Text>
            </View>

            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>

            <ClassicButton title="Continue" onPress={handleSendEmail} />
          </>
        )}
      </View>
    </GradientBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  titleContainer: {
    width: "100%",
    marginTop: 75,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#fff",
    marginVertical: 20,
  },
  description: {
    fontSize: 16,
    color: "#fff",
    textAlign: "center",
    marginBottom: 20,
  },
  inputContainer: {
    width: "80%",
    marginBottom: 20,
  },
  input: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  button: {
    width: "80%",
  },
});
