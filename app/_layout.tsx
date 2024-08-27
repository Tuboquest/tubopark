import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack, Slot } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

import { useColorScheme } from "@/hooks/useColorScheme";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { UserProvider } from "@/contexts/userContexts";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    Urbanist: require("@/assets/fonts/Urbanist-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  // if (!loaded) {
  //   return null;
  // }

  return (
    <UserProvider>
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <SafeAreaProvider>
          <Stack>
            <Stack.Screen name="index" options={{ headerShown: false }} />
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen
              name="test-passcode"
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="test-passcode-end"
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="(auth)/login"
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="(auth)/register"
              options={{ headerShown: false }}
            />
            <Stack.Screen name="(auth)/pin" options={{ headerShown: false }} />
            <Stack.Screen
              name="(onBoarding)/pageOne"
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="(onBoarding)/pageTwo"
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="(onBoarding)/pageThree"
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="(onBoarding)/pageFour"
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="(resetPassword)/sendMail"
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="(resetPassword)/createNewPassword"
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="(profil)/editProfile"
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="(profil)/notifications"
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="(profil)/payment"
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="(others)/statistic"
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="(maps)/index"
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="(others)/diskList"
              options={{ headerShown: false }}
            />
            <Stack.Screen name="+not-found" />
          </Stack>
        </SafeAreaProvider>
      </ThemeProvider>
    </UserProvider>
  );
}
