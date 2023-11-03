import {
    Card,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
  import { Separator } from "@/components/ui/separator";
  import { VscTriangleRight } from "react-icons/vsc";
  import { BiRupee } from "react-icons/bi";
  import { Button } from "@/components/ui/button";
  import Link from "next/link";
  
  type ServiceCardProps = {
    serviceTitle: string;
    serviceDescription: string;
    servicePrice: number;
    serviceTime: string;
    username: string;
    serviceId: number;
  };
  
  export default function ServiceCard({
    username,
    serviceId,
    serviceTitle,
    serviceDescription,
    servicePrice,
    serviceTime,
  }: ServiceCardProps) {
    return (
      <Card className="">
        <CardHeader>
          <CardTitle className="font-bold flex justify-between items-center">
            <span>{serviceTitle}</span>
            <span className="p-1 rounded-full border-black/40 border-[2px] dark:border-white/40">
              <VscTriangleRight />
            </span>
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
  