import { Disk } from "@/api/disk";
import { ClassicButton } from "@/components/button/ClassicButton";
import { GradientBackground } from "@/components/GradientBackground";
import LogoArea from "@/components/LogoArea";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { useAuth } from "@/hooks/useAuth";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import React, { useEffect } from "react";
import { useState } from "react";

import { StyleSheet, Text, View, TouchableOpacity, Button } from "react-native";
import { User } from "@/types/User";
import { Fetch } from "@/api";
import TestPasscodeScreen from "@/app/test-passcode";
import { PinInput } from "@/components/input/PinInput";

export default function DiskListScreen() {
  const [diskList, setDiskList] = useState<any>([
    { name: "template", serial_number: "123456789" },
    { name: "template2", serial_number: "123456789" },
  ]);

  const [user, setUserState] = useState<User | undefined>();

  const [pinTyped, setPinTyped] = useState<string[]>(["", "", "", ""]);
  const [diskId, setDiskId] = useState<string>("");
  const [isEditingPin, setIsEditingPin] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = () => {
      Disk.diskList().then((data) => {
        // console.log("data", data);
        data && setDiskList(data);
      });
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const tampUser = await Fetch?.getUser();
      setUserState(tampUser);
      // console.log("user: ", tampUser);
    };
    fetchData();
  }, []);

  // console.log(" diskList,", diskList.message);

  const onPair = (diskID: string) => {
    setIsEditingPin(true);
    setDiskId(diskID);
  };

  const onUnPair = (diskID: string) => {
    Disk.unPairDisk(diskID);
    router?.push("/(tabs)/wheel");
  };

  const testPassCode = async () => {
    const passCode = pinTyped[0] + pinTyped[1] + pinTyped[2] + pinTyped[3];
    const result = await Disk.pairDisk(diskId, passCode);
    console.log("result", result.message);
    setIsEditingPin(false);
    setPinTyped(["", "", "", ""]);
    if (result.message === "Invalid pairing code") {
      alert("failed to pair");
      return;
    }

    router?.push("/(tabs)/wheel");
  };

  return (
    <ParallaxScrollView>
      <GradientBackground>
        <View style={styles.container}>
          <LogoArea />

          <View style={styles.titleContainer}>
            <Text style={styles.title}>List of unpaired disk</Text>
          </View>

          {isEditingPin && (
            <View style={styles.passcodeContainer}>
              <Text style={styles.logoText}>Disk passcode</Text>
              <PinInput pinTyped={pinTyped} setPinTyped={setPinTyped} />
              <TouchableOpacity
                style={styles.button}
                onPress={() => testPassCode()}
              >
                <Text style={styles.buttonText}>Confirm</Text>
              </TouchableOpacity>
            </View>
          )}

          <View style={styles.diskListContainer}>
            {user?.has_disk && (
              <View style={styles.logo}>
                <Text style={styles.logoText}>DISK</Text>
                <Text style={styles.logoText}>{user.disk.name}</Text>
                <Text style={styles.serialNumberText}>
                  {user.disk.serial_number}
                </Text>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => onUnPair(user.disk.id)}
                >
                  <Text style={styles.buttonText}>UnPair</Text>
                </TouchableOpacity>
              </View>
            )}

            {!user?.has_disk &&
            diskList &&
            !diskList.message &&
            !isEditingPin ? (
              diskList?.map((disk: Record<string, any>, diskIndex: number) => {
                return (
                  <View key={diskIndex} style={styles.logo}>
                    <Text style={styles.logoText}>DISK</Text>
                    <Text style={styles.logoText}>{disk.name}</Text>
                    <Text style={styles.serialNumberText}>
                      {disk.serial_number}
                    </Text>
                    <TouchableOpacity
                      style={styles.button}
                      onPress={() => onPair(disk.id)}
                    >
                      <Text style={styles.buttonText}>Pair</Text>
                    </TouchableOpacity>
                  </View>
                );
              })
            ) : (
              <View style={{ height: 500 }}>
                {/* <Text style={styles.loadingText}>Loading...</Text> */}
              </View>
            )}
          </View>
        </View>
      </GradientBackground>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  diskListContainer: {
    marginTop: 30,
    gap: 35,
  },
  titleContainer: {
    width: "100%",
    marginTop: 75,
  },
  passcodeContainer: {
    padding: 10,
    borderRadius: 50,
    backgroundColor: "#18202d",
    borderWidth: 2,
    borderColor: "#1E95D9",
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    width: "100%",
    position: "absolute",
    top: 30,
  },
  time: {
    color: "#fff",
    fontSize: 16,
  },
  signal: {
    flexDirection: "row",
    alignItems: "center",
  },
  logo: {
    padding: 10,
    borderRadius: 50,
    backgroundColor: "#18202d",
    borderWidth: 2,
    borderColor: "#1E95D9",
    justifyContent: "center",
    alignItems: "center",
    margin: 25,
  },
  logoText: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#1E95D9",
  },
  loadingText: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#1E95D9",
    height: 500,
  },
  serialNumberText: {
    fontSize: 24,
    fontWeight: "bold",

    color: "#1E95D9",
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 50,
    paddingHorizontal: 24,
  },
  button: {
    backgroundColor: "#1181ff",
    padding: 15,
    borderRadius: 20,
    width: 200,
    marginTop: 30,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 16,
  },
});
