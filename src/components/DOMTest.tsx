"use dom";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "./ui/button";
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
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { Link } from "expo-router";
import "../../global.css";

const DOMTest = (props: { dom?: import("expo/dom").DOMProps }) => {
  return (
    <div className="p-5 gap-2 flex flex-col flex-1">
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
    </div>
    
  );
};

export default DOMTest;
