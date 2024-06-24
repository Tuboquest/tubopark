import { PassCode } from "@/components/passcode";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";

export default function TestPasscodeScreen() {
  const FAKE_USER_CODE = "1234";
  return (
    <>
      <LinearGradient
        colors={["#528168", "#272a26", "#1a1c1a"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
        }}
      />
      <SafeAreaView
        edges={["top"]}
        style={{
          flex: 1,
        }}
      >
        <PassCode
          // Default title is "Enter passcode"
          // title={"Enter your passcode"}
          subtitle={
            "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod."
          }
          onEnd={(code) => {
            console.log("Passcode: ", code);
            // Test passcode with code check
            /* if (code === FAKE_USER_CODE) {
              router?.push("/test-passcode-end");
            }*/
            // Test passcode with confirmation, returns the created passcode
            router?.push({
              pathname: "/test-passcode-end",
              params: {
                passcode: code,
              },
            });
          }}
          // Will display a validation button to allow submitting the passcode
          withValidation
          // Will handle errors if passcode doesn't match the expected one
          shouldMatch={FAKE_USER_CODE}
          /*Will ask for a confirmation of the passcode. Needs "withValidation" props to be true
          and "shouldMatch" won't be triggered*/
          withConfirmation
          // // Text and keyboard color
          // color={"#074264"}
          // // Custom code digits slots
          // activeColor={"#074264"}
          // inactiveColor={"#83A5C7"}
          // errorColor={"#FF0000"}
          // // Custom keys
          // fromColor={"#074264"}
          // toColor={"#83A5C7"}
          // keySize={45}
          // // Custom validation button
          // validationText={"submit"}
          // validationBackgroundColor={"#074264"}
          // validationColor={"#83A5C7"}
        />
      </SafeAreaView>
    </>
  );
}
