import React from "react";
import { View, Text, Button, TouchableOpacity } from "react-native";
import WebView from "react-native-webview";
import { GradientBackground } from "@/components/GradientBackground";
import { Theme } from "@/constants/Theme";
import { Colors } from "@/constants/Colors";
import { Feather } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

export default function VideoStreamScreen() {
  const jwtToken =
    "9ce7894750a47ae9406ae8fc29263989cf41ca66e4d538f22698d012456d3c12";

  return (
    <GradientBackground>
      <View
        style={{
          paddingHorizontal: Theme?.paddingHorizontal,
        }}
      >
        <Text
          style={{
            fontSize: 32,
            color: Colors?.dark?.text,
            fontWeight: "bold",
          }}
        >
          Sentinel
        </Text>
        <Text
          style={{
            marginTop: 15,
            fontSize: 16,
            color: Colors?.dark?.text,
          }}
        >
          Stay connected with your vehicle in real-time through our live stream
          feature, video surveillance from your car's remote device, right at
          your fingertips.
        </Text>
        <View
          style={{
            marginTop: 40,
            height: 210,
            borderRadius: 25,
            backgroundColor: "red",
            overflow: "hidden",
          }}
        >
          <WebView
            originWhitelist={["*"]}
            source={{
              uri: "http://192.168.1.27:8000/api/video",
              // uri: "http://172.20.10.7:8000/api/video",
              headers: {
                Authorization: `Bearer ${jwtToken}`,
                "Content-Type": "application/json",
              },
            }}
          />
        </View>
        <View
          style={{
            marginTop: 25,
            position: "relative",
            height: 220,
            width: "100%",
            borderRadius: 25,
            overflow: "hidden",
            opacity: 0.8,
          }}
        >
          <LinearGradient
            colors={["#1E95D950", "#00000090"]}
            start={{ x: 0, y: 0.9 }}
            end={{ x: 0.5, y: 0 }}
            style={{
              height: "100%",
              width: "100%",
              padding: 25,
              justifyContent: "space-between",
            }}
          >
            <View>
              <Text
                style={{
                  fontSize: 28,
                  color: Colors?.dark?.text,
                  fontWeight: "bold",
                  marginBottom: 10,
                }}
              >
                Coming soon
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  color: Colors?.dark?.text,
                }}
              >
                ASVP agent detection and live notifications
              </Text>
            </View>
            <TouchableOpacity
              disabled
              style={{
                backgroundColor: "white",
                padding: 10,
                borderRadius: 50,
                alignSelf: "flex-end",
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  color: Colors?.light?.text,
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                AI Supercharged
                <Feather name={"arrow-right"} size={16} />
              </Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </View>
    </GradientBackground>
  );
}
