import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { GradientBackground } from "@/components/GradientBackground";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Profile } from "@/api/profile";

export default function EditProfile() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");

  const router = useRouter();

  useEffect(() => {
    const fetchProfile = async () => {
      const profileData = await Profile.getProfile();
      setFirstName(profileData.firstName || "");
      setLastName(profileData.lastName || "");
      setEmail(profileData.email || "");
      setCountry(profileData.country || "");
    };
    fetchProfile();
  }, []);

  const handleUpdate = async () => {
    await Profile.updateProfile({ firstName, lastName, email, country });
    router.push("/(tabs)/profile");
  };

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
          <Text style={styles.editProfileText}>Edit Profile</Text>
        </View>
        <View style={styles.form}>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              value={firstName}
              onChangeText={setFirstName}
              placeholder="First Name"
              placeholderTextColor="#aaa"
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              value={lastName}
              onChangeText={setLastName}
              placeholder="Last Name"
              placeholderTextColor="#aaa"
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              value={email}
              onChangeText={setEmail}
              placeholder="Email"
              placeholderTextColor="#aaa"
              keyboardType="email-address"
            />
            <Ionicons
              name="mail"
              size={24}
              color="#fff"
              style={styles.inputIcon}
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              value={country}
              onChangeText={setCountry}
              placeholder="Country"
              placeholderTextColor="#aaa"
            />
            <Ionicons
              name="location"
              size={24}
              color="#fff"
              style={styles.inputIcon}
            />
          </View>
        </View>
        <TouchableOpacity onPress={handleUpdate} style={styles.updateButton}>
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
    justifyContent: "flex-start",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 60,
    marginTop: 50,
  },
  editProfileText: {
    fontSize: 24,
    color: "#fff",
    marginLeft: 10,
  },
  form: {
    justifyContent: "flex-start",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 36,
    borderRadius: 12,
    backgroundColor: "#074264",
    width: 300,
    alignSelf: "center",
  },
  input: {
    flex: 1,
    height: 56,
    color: "#fff",
    paddingHorizontal: 10,
    fontSize: 16,
  },
  inputIcon: {
    paddingHorizontal: 10,
  },
  updateButton: {
    marginTop: 100,
    borderRadius: 100,
    overflow: "hidden",
  },
  gradientButton: {
    padding: 15,
    borderRadius: 100,
    alignItems: "center",
    width: 300,
    alignSelf: "center",
  },
  updateButtonText: {
    fontSize: 16,
    color: "#fff",
  },
});
