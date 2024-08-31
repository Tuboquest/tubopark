import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Alert,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { GradientBackground } from "@/components/GradientBackground";
import { useRouter } from "expo-router";
import { Profile } from "@/api/profile";
import { useAuth } from "@/hooks/useAuth";

export default function ProfileScreen() {
  const [profileImage, setProfileImage] = useState<any>(
    require("@/assets/images/profile.png")
  );

  const router = useRouter();

  const { user, setUser } = useAuth();

  const chooseImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      Alert.alert(
        "Permission insuffisante",
        "Nous avons besoin de la permission d'accéder à votre galerie pour choisir une photo."
      );
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
      base64: true,
    });

    if (!result.canceled && result.assets && result.assets.length > 0) {
      let user = await Profile.updateAvatar(result.assets[0].base64 as string);
      setUser(user);
      console.log(user);
    } else {
      console.log("Image selection cancelled");
    }
    return;
  };

  return (
    <GradientBackground>
      <View style={styles.container}>
        <View style={styles.header}></View>

        <View style={styles.profileSection}>
          <TouchableOpacity onPress={chooseImage}>
            {user?.avatar !== null && (
              <Image
                source={{ uri: `data:image/jpeg;base64,${user?.avatar}` }}
                style={styles.profileImage}
              />
            )}
            {user?.avatar === null && (
              <Image source={profileImage} style={styles.profileImage} />
            )}
          </TouchableOpacity>
          <Text style={styles.name}>
            {user?.firstname} {user?.lastname}
          </Text>
          <Text style={styles.email}>{user?.email}</Text>
          <View style={styles.separator} />
        </View>

        <View style={styles.menu}>
          <MenuItem
            icon={require("@/assets/iconly/curved/Profile.png")}
            title="Edit Profile"
            onPress={() => router.push("/editProfile")}
          />
          <MenuItem
            icon={require("@/assets/iconly/curved/Wallet.png")}
            title="Payment"
            onPress={() => router.push("/payment")}
          />
          <MenuItem
            icon={require("@/assets/iconly/curved/Notification.png")}
            title="Notifications"
            onPress={() => router.push("/notifications")}
          />
          <MenuItem
            icon={require("@/assets/iconly/curved/Activity.png")}
            title="Statistics"
            onPress={() => router.push("(profil)/statistics")}

          />
          <MenuItem
            icon={require("@/assets/iconly/curved/Chart.png")}
            title="History and Reports"
            disabled
          />
          <MenuItem
            icon={require("@/assets/iconly/curved/Logout.png")}
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
  onPress?: () => void;
  disabled?: boolean;
  logout?: boolean;
}

function MenuItem({ icon, title, onPress, disabled, logout }: MenuItemProps) {
  return (
    <TouchableOpacity
      style={[styles.menuItem, disabled && styles.disabled]}
      onPress={onPress}
      disabled={disabled}
    >
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
  },
  profileSection: {
    alignItems: "center",
    marginTop: 10,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 50,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
  email: {
    fontSize: 14,
    color: "#fff",
    marginBottom: 10,
  },
  separator: {
    width: 300,
    height: 1,
    backgroundColor: "#35383F",
    marginVertical: 20,
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
    width: 28,
    height: 28,
    marginRight: 20,
  },
  menuText: {
    fontSize: 18,
    color: "#fff",
  },
  disabled: {
    opacity: 0.5,
  },
  logoutText: {
    color: "red",
  },
});
