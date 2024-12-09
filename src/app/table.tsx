import DataTableDemo from "@/components/DataTable";
import { Platform } from "react-native";

import * as Clipboard from "expo-clipboard";

export default function Table() {
  const onCopyClipboard = async (text: string) => {
    if (Platform.OS === "web") {
      navigator.clipboard.writeText(text);
      return;
    }

    await Clipboard.setStringAsync(text);
  };

  return <DataTableDemo onCopyClipboard={onCopyClipboard} />;
}
