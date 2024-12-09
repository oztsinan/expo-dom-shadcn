"use dom";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import ShadLayout from "@/components/shad-layout";
import { Link } from "expo-router";

export default function ComponentsRoute({
  navigate,
}: {
  navigate: typeof import("expo-router").router["navigate"];
  dom?: import("expo/dom").DOMProps;
}) {
  return (
    <ShadLayout navigate={navigate} select>
      <Popover>
        <PopoverTrigger asChild>
          <Button>Popover Open</Button>
        </PopoverTrigger>
        <PopoverContent>Place content for the popover here.</PopoverContent>
      </Popover>

      <Button variant={"destructive"}>Button Destructive</Button>
      <Button variant={"outline"}>Outline Destructive</Button>

      <Link asChild href={"/table"}>
        <Button variant={"destructive"}>Navigate Table</Button>
      </Link>

      <Link asChild href={"/settings"}>
        <Button variant={"default"}>Settings</Button>
      </Link>
    </ShadLayout>
  );
}
