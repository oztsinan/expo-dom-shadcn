import "../../global.css";
import { TooltipProvider } from "@/components/ui/tooltip";
import React from "react";
import { IS_DOM } from "expo/dom";
import { StyleNoSelect } from "./style-no-select";
import { DOMRouterProvider } from "@/lib/router-with-dom";
import { Header, SideNavigationBar } from "./shad-nav";
import { useColorScheme } from "react-native";
import { cn } from "@/lib/utils";

export function ShadLayoutFull({
  navigate,
  children,
  select,
}: {
  navigate: typeof import("expo-router").router["navigate"];
  children: React.ReactNode;
  select?: boolean;
}) {
  return (
    <>
      {!select && <StyleNoSelect />}
      <DOMRouterProvider value={{ navigate }}>
        <TooltipProvider>
          <main className="flex min-h-screen w-screen flex-col pb-10">
            {/* <SideNavigationBar /> */}
            {!IS_DOM && <SideNavigationBar />}
            <div className="flex flex-col p-5 gap-2">
              {/* TODO: Migrate to native. */}
              {!IS_DOM && <Header />}

              {children}
            </div>
          </main>
        </TooltipProvider>
      </DOMRouterProvider>
    </>
  );
}

export default function ShadLayout({
  navigate,
  children,
  select,
}: {
  navigate: typeof import("expo-router").router["navigate"];
  children: React.ReactNode;
  select?: boolean;
}) {
  const colorScheme = useColorScheme();

  if (process.env.EXPO_OS === "web" && !IS_DOM) {
    // In standard web, use a partial layout since the shared elements are in the Layout Route.
    return <>{children}</>;
  }

  return (
    <div
      className={cn("animate-fade-in", {
        dark: colorScheme === "dark",
      })}
    >
      <ShadLayoutFull select={select} navigate={navigate} children={children} />
    </div>
  );
}
