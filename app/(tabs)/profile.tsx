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

export default function ProfileScreen() {
  const [profileImage, setProfileImage] = useState<any>(
    require("@/assets/images/profile.png")
  );
  const [profile, setProfile] = useState<any>({});
  const router = useRouter();

  useEffect(() => {
    const fetchProfile = async () => {
      const profileData = await Profile.getProfile();
      setProfile(profileData);
      if (profileData.imageUri) {
        setProfileImage({ uri: profileData.imageUri });
      }
    };
    fetchProfile();
  }, []);

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
    });

    if (!result.canceled && result.assets && result.assets.length > 0) {
      const selectedImage = result.assets[0];
      setProfileImage({ uri: selectedImage.uri });

      // Update profile with the new image
      await Profile.updateProfile({ imageUri: selectedImage.uri });
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
          <Text style={styles.name}>
            {profile.firstName} {profile.lastName}
          </Text>
          <Text style={styles.email}>{profile.email}</Text>
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
          />
          <MenuItem
            icon={require("@/assets/iconly/curved/Notification.png")}
            title="Notifications"
            onPress={() => router.push("/notifications")}
          />
          <MenuItem
            icon={require("@/assets/iconly/curved/Activity.png")}
            title="Statistics"
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
