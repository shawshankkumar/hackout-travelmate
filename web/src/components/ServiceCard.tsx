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

type ServiceCardProps = {
  serviceTitle: string;
  serviceDescription: string;
  servicePrice: number;
  serviceTime: string;
  username: string;
  serviceId: number;
  nextAvailableDate: number;
};

export default function ServiceCard({
  username,
  serviceId,
  serviceTitle,
  serviceDescription,
  servicePrice,
  serviceTime,
  nextAvailableDate,
}: ServiceCardProps) {
  const date = new Date(nextAvailableDate);
  const formattedDate = format(date, "d MMM");
  const formattedTime = format(date, "h:mm a");

  return (
    <Card className="">
      <CardHeader>
        <CardTitle className="font-bold flex justify-between items-start">
          <span className="pt-2">{serviceTitle}</span>
          <div className="flex flex-col text-[12px] border border-slate-200 p-2 rounded-md">
            <span className="opacity-70 font-medium">Next Available</span>
            <span className="font-semibold mt-1">
              {formattedTime}, {formattedDate}
            </span>
          </div>
        </CardTitle>
        <CardDescription>{serviceDescription}</CardDescription>
      </CardHeader>
      <Separator />
      <CardFooter className="h-12 mt-4 flex justify-between items-center">
        <div className="flex items-center h-full">
          <span>{serviceTime} Min</span>
          <Separator orientation="vertical" className="mx-2" />
          <span className="flex items-center">
            <BiRupee />
            {servicePrice}
          </span>
        </div>
        <Link href={`${username}/${serviceId}`}>
          <Button size={"sm"}>Book Session</Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
