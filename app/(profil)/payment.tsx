import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { GradientBackground } from "@/components/GradientBackground";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function PaymentScreen() {
  const router = useRouter();

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
          <Text style={styles.headerText}>Upgrade Premium</Text>
        </View>

        <LinearGradient colors={["#074264", "#83A5C7"]} style={styles.card}>
          <Text style={styles.title}>Upgrade Premium</Text>
          <View style={styles.feature}>
            <Ionicons name="checkmark-circle" size={24} color="green" />
            <Text style={styles.featureText}>History and detailed reports</Text>
          </View>
          <View style={styles.feature}>
            <Ionicons name="checkmark-circle" size={24} color="green" />
            <Text style={styles.featureText}>Security and surveillance</Text>
          </View>
          <View style={styles.feature}>
            <Ionicons name="checkmark-circle" size={24} color="green" />
            <Text style={styles.featureText}>Advanced geolocation</Text>
          </View>

          <LinearGradient
            colors={["#DFBA0A", "#000000"]}
            style={styles.priceCard}
          >
            <Text style={styles.priceText}>74.99 € / year</Text>
          </LinearGradient>
        </LinearGradient>

        <TouchableOpacity style={styles.updateButton}>
          <LinearGradient
            colors={["#074264", "#83A5C7"]}
            style={styles.gradientButton}
          >
            <Text style={styles.updateButtonText}>Update</Text>
          </LinearGradient>
        </TouchableOpacity>
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
    marginBottom: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginLeft: 10,
  },
  card: {
    padding: 20,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#DFBA0A",
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 20,
    textAlign: "center",
  },
  feature: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  featureText: {
    fontSize: 18,
    color: "#fff",
    marginLeft: 10,
  },
  priceCard: {
    marginTop: 20,
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: "center",
  },
  priceText: {
    fontSize: 18,
    color: "#fff",
  },
  updateButton: {
    marginTop: 20,
    borderRadius: 100,
    overflow: "hidden",
  },
  gradientButton: {
    padding: 15,
    borderRadius: 100,
    alignItems: "center",
    width: "100%",
    alignSelf: "center",
  },
  updateButtonText: {
    fontSize: 16,
    color: "#fff",
  },
});
