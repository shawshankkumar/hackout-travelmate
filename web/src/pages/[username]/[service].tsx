import { GetServerSidePropsContext } from "next/types";
import { BiRupee } from "react-icons/bi";
import { MdArrowBackIos } from "react-icons/md";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BsFillCalendarEventFill } from "react-icons/bs";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import React, { useEffect } from "react";
import Link from "next/link";
import TimeSlotPicker from "@/components/TimeSlotPicker";

export default function Service({
  username,
  service,
}: {
  username: string;
  service: string;
}) {
  const [date, setDate] = React.useState<Date>();
  return (
    <main className="my-3 lg:my-0 lg:h-screen lg:w-screen lg:bg-purple-200 lg:flex lg:justify-center lg:items-center lg:gap-12">
      <section className="mx-3 lg:mx-0 md:max-w-[80%] md:mx-auto lg:max-w-[46%] lg:p-8 lg:rounded-xl bg-white">
        <section>
          <div className="flex justify-between items-center">
            <Link href={`/${username}`}>
              <span className="flex items-center gap-1">
                <MdArrowBackIos />
                <span className="text-sm text-black/60">{username}</span>
              </span>
            </Link>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
          <h1 className="font-extrabold text-xl mt-5">Ladakh Bike Trip</h1>
          <div className="flex justify-between items-center my-5">
            <div className="flex flex-col text-xs">
              <span className=" opacity-70">Next Available</span>
              <span className="font-semibold">3:00 PM, 20th Aug</span>
            </div>
            <Button size={"sm"}>Confirm Details</Button>
          </div>
        </section>
        <section className="flex mt-3">
          <div className="flex items-center justify-center border-2 border-slate-200/50 rounded-br-none rounded-tr-none min-w-[33.3%] max-w-fit px-2 py-3 rounded-xl">
            <div className="lg:text-lg bg-gray-200 text-gray-600 font-semibold w-fit px-4 flex justify-center items-center h-full rounded-md">
              <BiRupee /> 100
            </div>
          </div>
          <div className="lg:text-lg flex justify-center items-center gap-2 rounded-xl rounded-tl-none rounded-bl-none border-2 border-slate-200/50 border-l-0 w-2/3 px-2 py-3 font-semibold text-gray-600">
            <BsFillCalendarEventFill className=" text-gray-400" /> 20 Min
            meeting
          </div>
        </section>
        <section>
          <p className="text-sm mt-3 text-black/70">
            Hey there! I am your go-to Indian travel influencer, on a thrilling
            journey to uncover the wonders of my incredible homeland. Join me as
            I traverse the diverse landscapes, immerse in rich cultures, and
            unveil hidden treasures that make India truly extraordinary. Through
            my lens, I share not just destinations, but the soul-stirring
            stories behind them, offering travel enthusiasts a front-row seat to
            the beauty and magic that is uniquely India. Ready to explore
            together?
          </p>
        </section>
        <section className="flex flex-col lg:hidden mt-5">
          <h2 className=" font-bold text-lg">Book your session</h2>
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            required={true}
            className="rounded-md border mt-3 w-fit"
          />
        </section>
      </section>
      <section className="mx-3 lg:mx-0 md:max-w-[80%] md:mx-auto lg:min-w-[20%] lg:max-w-[50%] lg:p-8 lg:rounded-xl bg-white">
        <section className="hidden lg:flex lg:flex-col">
          <h2 className="font-bold text-lg">Book your session</h2>
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            required={true}
            className="rounded-md border mt-3 self-center"
          />
          <TimeSlotPicker startTime="10:00" endTime="12:00" timeInterval={30} />
        </section>
      </section>
    </main>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { username, service } = context.query;

  return {
    props: {
      username,
      service,
    },
  };
}
