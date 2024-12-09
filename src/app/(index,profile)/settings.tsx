import ProfileRoute from "@/components/ProfileRoute";
import { router } from "expo-router";

export default function SettingsRoute() {
  return <ProfileRoute navigate={router.navigate} />;
}
