"use dom";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import ShadLayout from "@/components/shad-layout";
import { useGlobalButtonHaptics } from "@/hooks/useGlobalButtonHaptics";
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

      <Drawer>
        <DrawerTrigger asChild>
          <Button>Drawer Open</Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Are you absolutely sure?</DrawerTitle>
            <DrawerDescription>This action cannot be undone.</DrawerDescription>
          </DrawerHeader>
          <DrawerFooter>
            <Button>Submit</Button>
            <DrawerClose>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>

      <Link asChild href={"/table"}>
        <Button variant={"destructive"}>Navigate Table</Button>
      </Link>

      <Link asChild href={"/settings"}>
        <Button variant={"default"}>Settings</Button>
      </Link>
    </ShadLayout>
  );
}
