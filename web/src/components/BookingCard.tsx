import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { BiRupee } from "react-icons/bi";

export default function BookingCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-bold flex flex-col gap-2 items-start">
          <div className="flex justify-between w-full">
            <h2 className=" max-w-[50%] overflow-hidden text-ellipsis whitespace-nowrap">
              Sami
            </h2>
            <h1>Ladakh Bike Trip</h1>
          </div>
          <div className=" text-sm font-normal mt-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt in
            nemo id consequuntur debitis minima repudiandae animi ipsa dolores.
            Odit!
          </div>
        </CardTitle>
        <CardDescription></CardDescription>
      </CardHeader>
      <Separator />
      <CardFooter className="h-12 mt-4 flex justify-between items-center">
        <div className="flex items-center h-full">
          <span className="flex items-center gap-2">30 Min</span>
          <Separator orientation="vertical" className="mx-2" />
          <span className="flex items-center">
            <BiRupee />
            500
          </span>
          <Separator orientation="vertical" className="mx-2" />
          <span className="flex items-center">7:00 PM</span>
        </div>
        <a href={`https://meet.google.com/bpo-wdno-xho`}>
          <Button size={"sm"}>Visit Meet</Button>
        </a>
      </CardFooter>
    </Card>
  );
}
