import React from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowTopRightIcon,
  ArrowRightIcon,
  MagnifyingGlassIcon,
} from "@radix-ui/react-icons";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex flex-1 bg-travelMate-background">
      <div className="w-full lg:w-1/2 p-5 lg:p-20 flex flex-col items-start justify-center gap-10 lg:gap-20">
        <div className="w-full">
          <div className="w-full max-w-[400px] lg:max-w-none lg:min-w-[500px] lg:w-2/3 bg-travelMate-pink rounded-full p-2 pr-4 flex justify-between items-center">
            <div className="flex gap-2 items-center">
              <div className="rounded-full bg-white">
                <Image
                  className="w-12 lg:w-20"
                  src="/images/ProfilePic.svg"
                  alt="/"
                  width={500}
                  height={500}
                />
              </div>
              <div>
                <h1 className="text-sm lg:text-xl text-white font-medium">
                  Get a chance to meet <br /> your favourite travel influencer
                </h1>
              </div>
            </div>
            <div className="text-white">
              <ArrowTopRightIcon width={50} height={50} />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div>
            <h1 className="font-bold text-4xl lg:text-5xl">
              More Than a Map <br />
              Your Expert Travel Companion
            </h1>
          </div>
          <div className="w-full">
            <div className="w-full max-w-[450px] lg:max-w-none lg:min-w-[500px] lg:w-4/5 flex items-center pl-3 bg-white border border-[#D2D2D2]">
              <MagnifyingGlassIcon width={30} height={30} color="#8A8A8A" />
              <input
                className="px-5 py-3 w-full text-xl outline-none border-none"
                type="text"
                placeholder="Search Location"
              />
            </div>
          </div>
        </div>
        <div>
          <Button className="p-7 flex items-center gap-5">
            <div>
              <h1 className="text-2xl font-semibold">Start your page</h1>
            </div>
            <div>
              <ArrowRightIcon width={30} height={30} />
            </div>
          </Button>
        </div>
        <div className="gap-5 flex flex-col lg:flex lg:flex-row items-center">
          <div>
            <Image
              className="w-56"
              src="/images/Rating.svg"
              alt="/"
              width={500}
              height={500}
            />
          </div>
          <div>
            <div>
              <Image
                className="w-40"
                src="/images/Stars.svg"
                alt="/"
                width={300}
                height={300}
              />
            </div>
            <div>
              <h1 className="text-xl font-medium">Rated by 500+ travelers</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-1/2 hidden lg:block">
        <Image
          className=""
          src="/images/masonry.png"
          alt="/"
          layout="responsive"
          width={600}
          height={600}
        />
      </div>
    </div>
  );
};

export default Hero;
