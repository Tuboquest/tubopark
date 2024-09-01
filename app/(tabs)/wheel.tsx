import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";

import { ClockDisk } from "@/components/parking-wheel";
import { useEffect, useState } from "react";
import { GradientBackground } from "@/components/GradientBackground";
import { Colors } from "@/constants/Colors";
import { Theme } from "@/constants/Theme";
import LogoArea from "@/components/LogoArea";
import { router } from "expo-router";
import { Disk } from "@/api/disk";
import { useAuth } from "@/hooks/useAuth";
import { User } from "@/types/User";
import { Fetch } from "@/api";

export default function WheelScreen() {
  const [angle, setAngle] = useState<number>(12.05); //RADIANT

  const [user, setUserState] = useState<User | undefined>();

  // console.log("user: ", user);

  const submissionDelay = 3000;
  const [requestSubmitted, setRequestSubmitted] = useState<boolean>(false);

  const handleRotateDisk = async (newAngle: number) => {
    if (newAngle > 360) {
      newAngle = newAngle - 360;
    }

    if (requestSubmitted) return;
    setRequestSubmitted(true);
    setTimeout(() => {
      setRequestSubmitted(false);
    }, submissionDelay);
    Fetch?.rotateDisc(newAngle)
      .then((data) => {
        console.log("ok, the disc rotated - setting new angle");
        setAngle(newAngle);
      })
      .catch((e) => console.error("Disc rotation: ", e));

    if (user?.has_disk) {
      console.log(`Disk rotated to ${Math.round(newAngle)} degrees`);
      Disk.rotate(newAngle);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const tampUser = await Fetch?.getUser();
      setUserState(tampUser);
      // console.log("user: ", tampUser);
    };
    fetchData();
  }, []);

  return (
    <GradientBackground>
      <View style={styles.container}>
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
