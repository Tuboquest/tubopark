import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { GradientBackground } from "@/components/GradientBackground";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

const { width } = Dimensions.get("window");

const gradientColors = {
  card: ["#074264", "#83A5C7"],
  border: ["#DFBA0A", "#000000"],
  button: ["#074264", "#83A5C7"],
};

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

        <LinearGradient
          colors={gradientColors.border}
          style={styles.cardBorder}
        >
          <View style={styles.cardContainer}>
            <LinearGradient colors={gradientColors.card} style={styles.card}>
              <Text style={styles.title}>Upgrade Premium</Text>
              <View style={styles.feature}>
                <Ionicons name="checkmark-circle" size={24} color="green" />
                <Text style={styles.featureText}>
                  History and detailed reports
                </Text>
              </View>
              <View style={styles.feature}>
                <Ionicons name="checkmark-circle" size={24} color="green" />
                <Text style={styles.featureText}>
                  Security and surveillance
                </Text>
              </View>
              <View style={styles.feature}>
                <Ionicons name="checkmark-circle" size={24} color="green" />
                <Text style={styles.featureText}>Advanced geolocation</Text>
              </View>

              <LinearGradient
                colors={gradientColors.border}
                style={styles.priceCard}
              >
                <Text style={styles.priceText}>74.99 € / year</Text>
              </LinearGradient>
            </LinearGradient>
          </View>
        </LinearGradient>

        <LinearGradient
          colors={gradientColors.border}
          style={styles.buttonBorder}
        >
          <TouchableOpacity style={styles.updateButton}>
            <LinearGradient
              colors={gradientColors.button}
              style={styles.gradientButton}
            >
              <Text style={styles.updateButtonText}>Update</Text>
            </LinearGradient>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </GradientBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: "center",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 70,
    width: "100%",
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginLeft: 10,
  },
  cardBorder: {
    padding: 3,
    borderRadius: 23,
    marginBottom: 20,
    width: width * 0.8,
  },
  cardContainer: {
    borderRadius: 20,
    overflow: "hidden",
  },
  card: {
    padding: 20,
    borderRadius: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 30,
    textAlign: "center",
  },
  feature: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  featureText: {
    fontSize: 18,
    color: "#fff",
    marginLeft: 10,
  },
  priceCard: {
    marginTop: 30,
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: "center",
  },
  priceText: {
    fontSize: 18,
    color: "#fff",
  },
  buttonBorder: {
    padding: 3,
    borderRadius: 100,
    marginTop: 80,
    width: width * 0.8,
  },
  updateButton: {
    borderRadius: 100,
    overflow: "hidden",
  },
  gradientButton: {
    padding: 15,
    borderRadius: 100,
    alignItems: "center",
    width: "100%",
  },
  updateButtonText: {
    fontSize: 16,
    color: "#fff",
  },
});
