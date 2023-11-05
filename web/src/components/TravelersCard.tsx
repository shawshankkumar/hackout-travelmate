import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function TravelersCard({ data }: any) {
  return (
    <>
      {data && (
        <div className="shadow-md border border-slate-200 p-4 rounded-xl flex flex-col justify-center items-center">
          <Avatar className="h-32 w-32">
            <AvatarImage src={data.picture} alt="@shadcn" />
            <AvatarFallback>{data.given_name}</AvatarFallback>
          </Avatar>
          <h1 className="mt-4">{data.given_name}</h1>
          <Image
            className="w-20 mt-2"
            src="/images/Stars.svg"
            alt="/"
            width={100}
            height={100}
          />
          <Link href={data.username ?? ""}>
            <Button size="sm" className="mt-4">
              View Profile
            </Button>
          </Link>
        </div>
      )}
    </>
  );
}
