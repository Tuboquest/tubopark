import { FC } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

type UrbanistTextProps = {
  text: string;
  style: Record<string, any>;
};

export const UrbanistText: FC<UrbanistTextProps> = (props) => {
  const { text } = props;

  return <Text style={styles.text}>{text}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontFamily: "Urbanist",
  },
});
