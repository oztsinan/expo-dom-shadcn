import { router } from "expo-router";
import ComponentsRoute from "@/components/ComponentsRoute";

export default function IndexRoute() {
  return <ComponentsRoute navigate={router.navigate} />;
}
