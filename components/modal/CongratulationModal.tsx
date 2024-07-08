import React from "react";
import {
  View,
  Modal,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { ClassicButton } from "../button/ClassicButton";

interface CongratulationModalProps {
  visible: boolean;
  onClose: () => void;
}

const CongratulationModal: React.FC<CongratulationModalProps> = (props) => {
  const { visible, onClose } = props;

  return (
    <Modal visible={visible} transparent>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          {/* <Image
            source={require("path/to/congratulation-image.png")}
            style={styles.image}
          /> */}
          <Text style={styles.message}>Congratulations!</Text>
          <ClassicButton title={"Go to Homepage"} onPress={onClose} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  message: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default CongratulationModal;
