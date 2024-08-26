import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";

import { ClockDisk } from "@/components/parking-wheel";
import { useState } from "react";
import { GradientBackground } from "@/components/GradientBackground";
import { Colors } from "@/constants/Colors";
import { Theme } from "@/constants/Theme";
import LogoArea from "@/components/LogoArea";
import { router } from "expo-router";
import { Disk } from "@/api/disk";
import { useAuth } from "@/hooks/useAuth";

export default function WheelScreen() {
  const [angle, setAngle] = useState<number>(45);
  const [isConnected, setIsConnected] = useState<boolean>(false);

  const handleRotateDisk = (angle: number) => {
    setAngle(angle);
    console.log(`Disk rotated to ${angle} degrees`);
    Disk.rotate(45);
  };

  const { user } = useAuth();

  return (
    <GradientBackground>
      <View style={styles.container}>
        {/* <Text
        style={{
          fontSize: 32,
          color: Colors?.dark?.text,
          fontWeight: "bold",
          paddingHorizontal: Theme?.paddingHorizontal,
        }}
      >
        Screen title
      </Text> */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity>
            <Image
              source={
                user?.has_disk
                  ? require("@/assets/images/greenEllipse.png")
                  : require("@/assets/images/redEllipse.png")
              }
            />
          </TouchableOpacity>
          {!user?.has_disk ? (
            <TouchableOpacity
              onPress={() => router?.push("/(others)/diskList")}
            >
              <View>
                <Image
                  source={require("@/assets/images/tuboParkDiskButton.png")}
                />
              </View>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() => router?.push("/(others)/diskList")}
            >
              <View>
                <Image
                  source={require("@/assets/images/tuboParkDiskButton.png")}
                />
              </View>
            </TouchableOpacity>
          )}
        </View>
        <LogoArea />
        <View style={styles.diskContainer}>
          <ClockDisk
            angle={angle}
            onRotate={(rotation) => handleRotateDisk(rotation)}
            gradientBackground
            fromColor={"#83A5C7"}
            toColor={"#074264"}
          />
        </View>
      </View>
    </GradientBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    position: "absolute",
    top: 40,
    width: "100%",
    justifyContent: "space-around",
    gap: 150,
  },

  diskContainer: {
    position: "absolute",
    top: 275,
  },
});
