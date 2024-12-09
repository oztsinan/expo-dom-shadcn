import { router, Slot, Stack } from "expo-router";
import { PlatformColor } from "react-native";
import { ShadLayoutFull } from "@/components/shad-layout";

export default function RootLayout({ segment }: { segment: string }) {
  if (process.env.EXPO_OS === "web") {
    return (
      <ShadLayoutFull navigate={router.navigate}>
        <Slot />
      </ShadLayoutFull>
    );
  }

  const name = getRouteName(segment);

  return (
    <Stack
      screenOptions={{
        headerTransparent: true,
        headerBlurEffect: "prominent",
        headerShadowVisible: true,
        headerLargeTitleShadowVisible: false,
        // headerLargeStyle: {
        //   backgroundColor: PlatformColor("systemGroupedBackgroundColor"), // Color of your background
        // },
        headerStyle: {
          // Hack to ensure the collapsed small header shows the shadow / border.
          backgroundColor: "rgba(255,255,255,0.01)",
        },
        headerLargeStyle: {
          backgroundColor: PlatformColor("systemGroupedBackgroundColor") as any,
        },
        contentStyle: {
          backgroundColor: PlatformColor("systemGroupedBackgroundColor"),
        },
        headerTitleStyle: {
          color: PlatformColor("label") as any,
        },
      }}
    >
      <Stack.Screen
        name={name}
        options={{
          title: titles[name],
          headerLargeTitle: true,
          headerSearchBarOptions: {},
          // headerRight() {
          //   return <ProfileButton segment={segment} />;
          // },

          //
          ...(name !== "index"
            ? {
                headerLargeTitle: undefined,
                headerSearchBarOptions: undefined,
              }
            : {}),
        }}
      />
      <Stack.Screen
        name="table"
        options={{
          title: "Settings",
          presentation: "modal",
          headerTransparent: true,
          headerBlurEffect: "prominent",
          headerShadowVisible: true,
        }}
      />
      <Stack.Screen
        name="settings"
        options={{
          title: "Settings",
          headerTransparent: true,
          headerBlurEffect: "prominent",
          headerShadowVisible: true,
        }}
      />
    </Stack>
  );
}

export const unstable_settings = {
  initialRouteName: "index",
  profile: {
    initialRouteName: "profile",
  },
};

const titles = {
  index: "Dashboard",
  profile: "Profile",
};

function getRouteName(segment: string) {
  return segment.replace(/\((.+)\)/, "$1") as keyof typeof titles;
}
