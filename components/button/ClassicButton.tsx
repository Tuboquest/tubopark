import { LinearGradient } from "expo-linear-gradient";
import { FC } from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

type ClassicButtonProps = {
  title: string;
  onPress: () => void;
};

export const ClassicButton: FC<ClassicButtonProps> = (props) => {
  const { title, onPress } = props;

  return (
    <TouchableOpacity activeOpacity={0.5} onPress={onPress}>
      <LinearGradient
        colors={["#074264", "#83A5C7"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.button}
      >
        <Text style={styles.buttonText}>{title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#1181ff",
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
