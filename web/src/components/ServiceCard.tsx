import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { BiRupee } from "react-icons/bi";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { format } from "date-fns";
import {
  EyeClosedIcon,
  EyeOpenIcon,
  TriangleRightIcon,
} from "@radix-ui/react-icons";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type ServiceCardProps = {
  serviceTitle: string;
  serviceDescription: string;
  servicePrice: number;
  serviceTime: string;
  username: string;
  serviceId: number;
  nextAvailableDate: number;
  editible?: boolean;
};

export default function ServiceCard({
  username,
  serviceId,
  serviceTitle,
  serviceDescription,
  servicePrice,
  serviceTime,
  nextAvailableDate,
  editible = false,
}: ServiceCardProps) {
  const date = new Date(nextAvailableDate);
  const formattedDate = format(date, "d MMM");
  const formattedTime = format(date, "h:mm a");
  const [edit, setEdit] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const serviceTimeArray = [15, 30, 45, 60, 75, 90, 105, 120];

  return (
    <Card className={disabled ? "opacity-40" : undefined}>
      <CardHeader>
        <CardTitle className="font-bold flex justify-between items-start">
          {
            <span className={editible ? undefined : "pt-2"}>
              {edit ? (
                <Input type="text" placeholder={`Service Title`} />
              ) : (
                serviceTitle
              )}
            </span>
          }
          {editible ? (
            <>
              {disabled ? (
                <EyeClosedIcon className="h-6 w-6" />
              ) : (
                <EyeOpenIcon className="h-6 w-6" />
              )}
            </>
          ) : (
            <div className="flex flex-col text-[12px] border border-slate-200 p-2 rounded-md">
              <span className="opacity-70 font-medium">Next Available</span>
              <span className="font-semibold mt-1">
                {formattedTime}, {formattedDate}
              </span>
            </div>
          )}
        </CardTitle>
        <CardDescription>
          {edit ? (
            <Input type="text" placeholder={`Service Description`} />
          ) : (
            serviceDescription
          )}
        </CardDescription>
      </CardHeader>
      <Separator />
      <CardFooter className="h-12 mt-4 flex justify-between items-center">
        <div className="flex items-center h-full">
          <span className="flex items-center gap-2">
            {edit ? (
              <Select defaultValue={String(serviceTimeArray[0])}>
                <SelectTrigger id="area" className="text-xs">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent className="overflow-y-scroll h-52">
                  {serviceTimeArray.map((time) => (
                    <SelectItem key={time} value={String(time)}>
                      {time}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            ) : (
              serviceTime
            )}{" "}
            Min
          </span>
          <Separator orientation="vertical" className="mx-2" />
          <span className="flex items-center">
            <BiRupee />
            {edit ? (
              <Input type="number" placeholder="Amount" className=" w-28" />
            ) : (
              servicePrice
            )}
          </span>
        </div>
        {editible ? (
          <div className="flex gap-3">
            <Button
            className="hidden lg:block"
              size={"sm"}
              variant={"outline"}
              onClick={() => setDisabled((prev) => !prev)}
            >
              {disabled ? "Enable Service" : "Disable Service"}
            </Button>

            <Button
              disabled={disabled}
              size={"sm"}
              onClick={() => setEdit((prev) => !prev)}
            >
              {edit ? "Save" : "Edit Service"}
            </Button>
          </div>
        ) : (
          <Link href={`${username}/${serviceId}`}>
            <Button size={"sm"}>Book Session</Button>
          </Link>
        )}
      </CardFooter>
    </Card>
  );
}
