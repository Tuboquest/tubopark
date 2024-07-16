// navigation.d.ts
import { StackNavigationProp } from "@react-navigation/stack";

type RootStackParamList = {
  Profile: undefined;
  EditProfile: undefined;
  // Ajoutez d'autres routes ici si nécessaire
};

type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Profile"
>;

type EditProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "EditProfile"
>;

export type ProfileProps = {
  navigation: ProfileScreenNavigationProp;
};

export type EditProfileProps = {
  navigation: EditProfileScreenNavigationProp;
};
