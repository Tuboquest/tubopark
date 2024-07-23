import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { GradientBackground } from "@/components/GradientBackground";
import { LinearGradient } from "expo-linear-gradient";

const iconSources: { [key: string]: any } = {
  success: require("@/assets/iconly/bold/Success.png"),
  error: require("@/assets/iconly/bold/Fail.png"),
  info: require("@/assets/iconly/bold/InfoSquare.png"),
  default: require("@/assets/iconly/bold/Notification.png"),
};

// Simulated notifications data
const simulatedNotifications = [
  { id: 1, title: "Backup Successful", date: "2023-07-21", status: "success" },
  { id: 2, title: "Login Attempt Failed", date: "2023-07-20", status: "error" },
  { id: 3, title: "New Update Available", date: "2023-07-19", status: "info" },
  {
    id: 4,
    title: "System Check Complete",
    date: "2023-07-18",
    status: "success",
  },
  {
    id: 5,
    title: "Password Change Required",
    date: "2023-07-17",
    status: "error",
  },
];

export default function NotificationsScreen() {
  const [notificationsData, setNotificationsData] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const fetchNotifications = async () => {
      // Simulate an API call to fetch notifications
      const data = await new Promise((resolve) =>
        setTimeout(() => resolve(simulatedNotifications), 1000)
      );
      setNotificationsData(data);
    };

    fetchNotifications();
  }, []);

  const getGradientColors = (status) => {
    switch (status) {
      case "success":
        return ["#39E180", "#1AB65C"];
      case "error":
        return ["#FF9094", "#FF5A5F"];
      case "info":
        return ["#00BCD3", "#00BCD3"];
      default:
        return ["#83A5C7", "#074264"];
    }
  };

  const getIconSource = (status) => {
    return iconSources[status] || iconSources.default;
  };

  const renderItem = ({ item }) => (
    <View style={styles.notificationItem}>
      <LinearGradient
        colors={getGradientColors(item.status)}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.ellipse}
      >
        <Image source={getIconSource(item.status)} style={styles.icon} />
      </LinearGradient>
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
          keyExtractor={(item) => item.id.toString()}
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
    marginRight: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    width: 24,
    height: 24,
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
