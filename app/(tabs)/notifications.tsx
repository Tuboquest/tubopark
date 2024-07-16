import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

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
  const renderItem = ({ item }) => (
    <View style={styles.notificationItem}>
      <Text style={styles.notificationTitle}>{item.title}</Text>
      <Text style={styles.notificationDate}>{item.date}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Notification</Text>
      <FlatList
        data={notificationsData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#1a1a1a",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 20,
  },
  list: {
    paddingBottom: 20,
  },
  notificationItem: {
    backgroundColor: "#333",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
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
