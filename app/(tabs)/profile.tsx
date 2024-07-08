import { ClassicButton } from "@/components/button/ClassicButton";
import { GradientBackground } from "@/components/GradientBackground";
import LogoArea from "@/components/LogoArea";
import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";

export default function Profile() {
  return (
    <GradientBackground>
      <View style={styles.container}>
        <View style={styles.header}></View>

        <View style={styles.profileSection}>
          <Image
            source={require("../../assets/images/profile.png")}
            style={styles.profileImage}
          />
          <Text style={styles.name}>Bob Latimpe</Text>
          <Text style={styles.email}>boblatimpe@yourdomain.com</Text>
        </View>

        <View style={styles.menu}>
          <MenuItem icon="✏️" title="Edit Profile" />
          <MenuItem icon="💳" title="Payment" />
          <MenuItem icon="🔔" title="Notifications" />
          <MenuItem icon="📊" title="Statistics" />
          <MenuItem icon="📜" title="History and Reports" disabled />
          <MenuItem icon="🔴" title="Logout" logout />
        </View>
      </View>
    </GradientBackground>
  );
}

interface MenuItemProps {
  icon: string;
  title: string;
  disabled?: boolean;
  logout?: boolean;
}

function MenuItem({ icon, title, disabled, logout }: MenuItemProps) {
  return (
    <TouchableOpacity style={[styles.menuItem, disabled && styles.disabled]}>
      <Text style={[styles.menuIcon, logout && styles.logoutIcon]}>{icon}</Text>
      <Text style={[styles.menuText, logout && styles.logoutText]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginTop: 10,
  },
  time: {
    color: "#fff",
    fontSize: 16,
  },
  signal: {
    flexDirection: "row",
    alignItems: "center",
  },
  signalBar: {
    width: 4,
    height: 18,
    backgroundColor: "#fff",
    marginLeft: 2,
  },
  profileSection: {
    alignItems: "center",
    marginTop: 50,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
  email: {
    fontSize: 16,
    color: "#fff",
    marginBottom: 40,
  },
  menu: {
    width: "100%",
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: "#1c1c1c",
    borderRadius: 10,
    marginBottom: 10,
  },
  menuIcon: {
    fontSize: 20,
    marginRight: 20,
    color: "#fff",
  },
  menuText: {
    fontSize: 16,
    color: "#fff",
  },
  disabled: {
    opacity: 0.5,
  },
  logoutIcon: {
    color: "red",
  },
  logoutText: {
    color: "red",
  },
});
