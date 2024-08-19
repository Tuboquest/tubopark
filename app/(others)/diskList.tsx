import { Disk } from "@/api/disk";
import { ClassicButton } from "@/components/button/ClassicButton";
import { GradientBackground } from "@/components/GradientBackground";
import LogoArea from "@/components/LogoArea";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import React, { useEffect } from "react";
import { useState } from "react";

import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function DiskListScreen() {
  const [diskList, setDiskList] = useState<any>([
    { name: "template", serial_number: "123456789" },
    { name: "template2", serial_number: "123456789" },
  ]);

  useEffect(() => {
    const fetchData = () => {
      Disk.diskList().then((data) => {
        console.log("data", data);
        data && setDiskList(data);
      });
    };

    fetchData();
  }, []);

  console.log(" diskList,", diskList.message);

  return (
    <ParallaxScrollView>
      <GradientBackground>
        <View style={styles.container}>
          <LogoArea />

          <View style={styles.titleContainer}>
            <Text style={styles.title}>List of unpaired disk</Text>
          </View>
          <View style={styles.diskListContainer}>
            {diskList && !diskList.message ? (
              diskList?.map((disk: Record<string, any>) => {
                return (
                  <View key={disk.id} style={styles.logo}>
                    <Text style={styles.logoText}>DISK</Text>
                    <Text style={styles.logoText}>{disk.name}</Text>
                    <Text style={styles.serialNumberText}>
                      {disk.serial_number}
                    </Text>
                    <TouchableOpacity
                      style={styles.button}
                      onPress={() => {
                        Disk.pairDisk(disk.id);
                        router?.push("/(tabs)");
                      }}
                    >
                      <Text style={styles.buttonText}>Pair</Text>
                    </TouchableOpacity>
                  </View>
                );
              })
            ) : (
              <View>
                <Text style={styles.loadingText}>Loading...</Text>
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
