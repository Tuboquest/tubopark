import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { GradientBackground } from "@/components/GradientBackground";

const notificationsData = [
  { id: "1", title: "Payment Successful!", date: "Today", status: "success" },
  {
    id: "2",
    title: "Parking Booking Canceled",
    date: "Today",
    status: "error",
  },
  {
    id: "3",
    title: "2 step verification successful",
    date: "Yesterday",
    status: "success",
  },
  { id: "4", title: "E-Wallet Connected", date: "Yesterday", status: "info" },
];

export default function Notifications() {
  const router = useRouter();

  const renderItem = ({ item }) => (
    <View style={styles.notificationItem}>
      <View style={styles.ellipse}></View>
      <View style={styles.textContainer}>
        <Text style={styles.notificationTitle}>{item.title}</Text>
        <Text style={styles.notificationDate}>{item.date}</Text>
      </View>
    </View>
  );

  return (
    <GradientBackground>
      <View style={styles.container}>
        <View style={styles.header}>
          <Ionicons
            name="arrow-back"
            size={24}
            color="#fff"
            onPress={() => router.push("/(tabs)/profile")}
          />
          <Text style={styles.headerText}>Notifications</Text>
        </View>
        <FlatList
          data={notificationsData}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.list}
        />
      </View>
    </GradientBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 50,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginLeft: 10,
  },
  list: {
    paddingBottom: 20,
  },
  notificationItem: {
    backgroundColor: "#1E95D9",
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    height: 100,
  },
  ellipse: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#00BCD3",
    marginRight: 15,
  },
  textContainer: {
    flex: 1,
  },
  notificationTitle: {
    fontSize: 16,
    color: "#fff",
  },
  notificationDate: {
    fontSize: 14,
    color: "#aaa",
    marginTop: 5,
  },
});
