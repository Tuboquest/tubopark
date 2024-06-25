import { StyleSheet, Text, View, Image } from "react-native";

export default function LogoArea() {
  return (
    <View style={styles.logo}>
      <Image source={require("@/assets/images/tuboquest-logo.png")} />
    </View>
  );
}

const styles = StyleSheet.create({
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
});
