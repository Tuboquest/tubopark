import { ClassicButton } from "@/components/button/ClassicButton";
import { GradientBackground } from "@/components/GradientBackground";
import LogoArea from "@/components/LogoArea";
import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Alert,
} from "react-native";
import * as ImagePicker from "expo-image-picker";

export default function Profile() {
  const [profileImage, setProfileImage] = useState<any>(
    require("../../assets/images/profile.png")
  );

  const chooseImage = async () => {
    // Demande des permissions pour accéder à la galerie
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      Alert.alert(
        "Permission insuffisante",
        "Nous avons besoin de la permission d'accéder à votre galerie pour choisir une photo."
      );
      return;
    }

    // Ouvrir la galerie pour choisir une image
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setProfileImage({ uri: result.uri });
    }
  };

  return (
    <GradientBackground>
      <View style={styles.container}>
        <View style={styles.header}></View>

        <View style={styles.profileSection}>
          <TouchableOpacity onPress={chooseImage}>
            <Image source={profileImage} style={styles.profileImage} />
          </TouchableOpacity>
          <Text style={styles.name}>Bob Latimpe</Text>
          <Text style={styles.email}>boblatimpe@yourdomain.com</Text>
        </View>

        <View style={styles.menu}>
          <MenuItem
            icon={require("../../assets/iconly/curved/Profile.png")}
            title="Edit Profile"
          />
          <MenuItem
            icon={require("../../assets/iconly/curved/Wallet.png")}
            title="Payment"
          />
          <MenuItem
            icon={require("../../assets/iconly/curved/Notification.png")}
            title="Notifications"
          />
          <MenuItem
            icon={require("../../assets/iconly/curved/Activity.png")}
            title="Statistics"
          />
          <MenuItem
            icon={require("../../assets/iconly/curved/Wallet.png")}
            title="History and Reports"
            disabled
          />
          <MenuItem
            icon={require("../../assets/iconly/curved/Logout.png")}
            title="Logout"
            logout
          />
        </View>
      </View>
    </GradientBackground>
  );
}

interface MenuItemProps {
  icon: any;
  title: string;
  disabled?: boolean;
  logout?: boolean;
}

function MenuItem({ icon, title, disabled, logout }: MenuItemProps) {
  return (
    <TouchableOpacity style={[styles.menuItem, disabled && styles.disabled]}>
      <Image
        source={icon}
        style={[styles.menuIcon, { tintColor: logout ? "red" : "white" }]}
      />
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
    borderRadius: 10,
    marginBottom: 10,
  },
  menuIcon: {
    width: 24,
    height: 24,
    marginRight: 20,
  },
  menuText: {
    fontSize: 16,
    color: "#fff",
  },
  disabled: {
    opacity: 0.5,
  },
  logoutText: {
    color: "red",
  },
});
