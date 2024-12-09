import { Slot, Stack, Tabs } from "expo-router";
import { BlurView } from "expo-blur";
import { StyleSheet } from "react-native";
import { HapticTab } from "@/components/haptic-tab";

export default function RootLayout() {
  if (process.env.EXPO_OS === "web") return <Slot />;

  return (
    <Tabs
      screenOptions={{
        lazy: false,
        tabBarButton: HapticTab,
        headerShown: false,
        tabBarActiveTintColor: "rgb(15, 23, 42)",
        tabBarStyle: {
          position: "absolute",
          backgroundColor: "rgba(255,255,255,0.01)",
        },
        tabBarBackground: () => (
          <BlurView
            tint="prominent"
            intensity={100}
            style={StyleSheet.absoluteFill}
          />
        ),
      }}
    >
      <Tabs.Screen
        name="(index)"
        options={{
          title: "Dashboard",
        }}
      />

      <Tabs.Screen
        name="(profile)"
        options={{
          title: "profile",
        }}
      />
    </Tabs>
  );
}
