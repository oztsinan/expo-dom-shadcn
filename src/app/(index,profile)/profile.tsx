import ProfileRoute from "@/components/ProfileRoute";
import { router } from "expo-router";

export default function Screen() {
  return <ProfileRoute navigate={router.navigate} />;
}
