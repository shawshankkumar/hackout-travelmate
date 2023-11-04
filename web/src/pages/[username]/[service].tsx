import { GetServerSidePropsContext } from "next/types";
import { BiRupee } from "react-icons/bi";
import { MdArrowBackIos } from "react-icons/md";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BsFillCalendarEventFill } from "react-icons/bs";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import React, { useState } from "react";
import Link from "next/link";
import Logo from "@/components/Logo";
import TimeSlotPicker from "@/components/TimeSlotPicker";
import Head from "next/head";
import Image from "next/image";

export default function Service({
  username,
  service,
}: {
  username: string;
  service: string;
}) {
  const [date, setDate] = useState<Date>();
  const [time, setTime] = useState<string>();

  const [confirm, setConfirm] = useState<boolean>(false);
  const [showPayment, setShowPayment] = useState<boolean>(false);
  const [bookingConfirmed, setBookingConfirmed] = useState<boolean>(false);

  const mockPayment = () => {
    setShowPayment(true);
    setTimeout(() => {
      setShowPayment(false);
      setBookingConfirmed(true);
    }, 2000);
  }

  return (
    <>
      <Head>
        <title>Service | travelMate</title>
      </Head>
      {confirm ? (
        <main className="flex items-center justify-center bg-purple-200 h-screen">
          <div className="flex flex-col md:flex-row bg-white w-[300px] md:min-h-[300px] lg:min-h-[450px] md:w-[750px] lg:w-[1000px] mx-auto rounded-lg font-mono">
            <div className="px-7 py-8 md:px-12 clip-circle" />
            {showPayment ? <p className="grow text-xl self-center text-center font-bold">do payment and redirect</p> : (
              <>
                <div className="flex flex-col gap-2 px-6 py-8 md:my-auto md:w-[250px] lg:w-[400px] border-b-2 md:border-r-2 md:border-b-0 border-dashed text-black/70 md:text-lg lg:text-xl">
                  <Logo className="text-black" size={24} />
                  <p>Ladakh Bike Trip Session</p>
                  <p>04 Nov 2:00 AM</p>
                  <p>30 Min ₹400</p>
                  {bookingConfirmed ? (<a className="cursor-pointer hover:underline break-all">meet.google.com/something-random-url</a>) : <Button onClick={mockPayment}>Confirm Booking</Button>}
                </div>
                <div className="flex flex-col gap-10 justify-evenly grow px-6 py-8 text-black/80 lg:text-xl">
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <p className="font-bold lg:text-xl">Harshit Singh</p>
                  </div>
                  <div className="flex gap-3 self-end">
                    <div className="flex flex-col text-right">
                      <p className="font-bold text-xl lg:text-3xl">Vanshika Kulkarni</p>
                      <Link className="text-black/70 cursor-pointer hover:underline text-sm" href="/">travelmate.io/vanshika</Link>
                      <Image
                        className="w-20 self-end"
                        src="/images/Stars.svg"
                        alt="ratings"
                        width={200}
                        height={200}
                      />
                    </div>
                    <Avatar>
                      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                  </div>
                </div>
              </>
            )}
            <div className="px-7 py-8 md:px-12 clip-circle rotate-180" />
          </div>
        </main>
      ) : (
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
                <Button size="sm" disabled={date === undefined || time === undefined} onClick={() => setConfirm(true)}>Confirm Details</Button>
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
            <section className="flex flex-col md:hidden mt-5 mx-10">
              <h2 className=" font-bold text-lg">Book your session</h2>
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                required={true}
                className="rounded-md border mt-3 self-center"
              />
              {date && <TimeSlotPicker selected={time} onSelect={setTime} startTime="10:00" endTime="12:00" timeInterval={30} />}
            </section>
          </section>
          <section className="mx-3 lg:mx-0 md:max-w-[80%] md:mx-auto lg:min-w-[20%] lg:max-w-[50%] lg:p-8 lg:rounded-xl bg-white">
            <section className="hidden md:flex md:flex-col">
              <h2 className="font-bold text-lg">Book your session</h2>
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                required={true}
                className="rounded-md border mt-3 self-center"
              />
              {date && <TimeSlotPicker selected={time} onSelect={setTime} startTime="10:00" endTime="12:00" timeInterval={30} />}
            </section>
          </section>
        </main>
      )}
    </>
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
