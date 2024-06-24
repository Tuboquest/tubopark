import { Feather, Ionicons } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";
import { router, useLocalSearchParams } from "expo-router";

export default function TestPasscodeEndScreen() {
  const { passcode } = useLocalSearchParams();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        gap: 50,
      }}
    >
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => router?.back()}
        style={{
          position: "absolute",
          top: 80,
          left: 25,
        }}
      >
        <Ionicons name="arrow-back" size={24} color={"black"} />
      </TouchableOpacity>
      <Text
        style={{
          fontSize: 32,
          fontWeight: "bold",
          marginVertical: 20,
          textAlign: "center",
        }}
      >
        {passcode ? `Passcode created:\n${passcode}` : "CORRECT PASSCODE!"}
      </Text>
      <Feather
        name="check-circle"
        size={164}
        color="black"
        style={{
          textAlign: "center",
        }}
      />
    </View>
  );
}
