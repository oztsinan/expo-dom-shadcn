import TableRoute from "@/components/TableRoute";
import { router } from "expo-router";

export default function SettingsRoute() {
  return <TableRoute navigate={router.navigate} />;
}
