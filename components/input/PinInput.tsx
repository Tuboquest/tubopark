import { LinearGradient } from "expo-linear-gradient";
import { FC, useRef } from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  View,
  TextInput,
} from "react-native";

type PinInputProps = {
  pinTyped: string[];
  //   onChangeHandler: (
  //     index: number,
  //     value: string,
  //     setFunction: React.Dispatch<React.SetStateAction<string[]>>
  //   ) => void;
  setPinTyped: React.Dispatch<React.SetStateAction<string[]>>;
};

export const PinInput: FC<PinInputProps> = (props) => {
  const { pinTyped, setPinTyped } = props;

  const onChangeHandler = (
    index: number,
    value: string,
    setFunction: React.Dispatch<React.SetStateAction<string[]>>
  ) => {
    const newPin = [...pinTyped];
    newPin[index] = value;
    setFunction(newPin);
    if (index === 0) {
      secondRef.current.focus();
    }
    if (index === 1) {
      thirdRef.current.focus();
    }
    if (index === 2) {
      fourthRef.current.focus();
    }
  };

  const firstRef = useRef<any>(null);
  const secondRef = useRef<any>(null);
  const thirdRef = useRef<any>(null);
  const fourthRef = useRef<any>(null);

  return (
    <View style={styles.numberPad}>
      <View style={styles.numberPad}>
        <View style={styles.numberButton}>
          <TextInput
            maxLength={1}
            style={styles.numberText}
            ref={firstRef}
            autoFocus={true}
            showSoftInputOnFocus={true}
            keyboardType="numeric"
            value={pinTyped[0]}
            onChangeText={(value) => onChangeHandler(0, value, setPinTyped)}
          ></TextInput>
        </View>
        <View style={styles.numberButton}>
          <TextInput
            maxLength={1}
            style={styles.numberText}
            ref={secondRef}
            keyboardType="numeric"
            value={pinTyped[1]}
            onChangeText={(value) => onChangeHandler(1, value, setPinTyped)}
          ></TextInput>
        </View>
        <View style={styles.numberButton}>
          <TextInput
            maxLength={1}
            style={styles.numberText}
            ref={thirdRef}
            keyboardType="numeric"
            value={pinTyped[2]}
            onChangeText={(value) => onChangeHandler(2, value, setPinTyped)}
          ></TextInput>
        </View>
        <View style={styles.numberButton}>
          <TextInput
            maxLength={1}
            style={styles.numberText}
            ref={fourthRef}
            keyboardType="numeric"
            value={pinTyped[3]}
            onChangeText={(value) => onChangeHandler(3, value, setPinTyped)}
          ></TextInput>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
});
