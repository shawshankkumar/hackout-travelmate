import Image from "next/image";
import React from "react";

const Features = () => {
  return (
    <div className="flex flex-col gap-10 lg:gap-20 items-center w-full min-h-screen h-fit lg:h-screen bg-travelMate-backgroundDark p-5 lg:p-20 text-white">
      <div>
        <h1 className="text-5xl font-medium">
          travelers <span className="font-bold">monetize</span> their time on
          travelmate
        </h1>
      </div>
      <div className="hidden lg:flex gap-10">
        <div>
          <Image
            className="w-full"
            src={"/images/feature1.svg"}
            alt="/"
            width={500}
            height={500}
          />
        </div>
        <div className="flex flex-col gap-10">
          <div className="flex gap-10">
            <div>
              <Image
                className="w-full"
                src={"/images/feature2.svg"}
                alt="/"
                width={500}
                height={500}
              />
            </div>
            <div>
              <Image
                className="w-full"
                src={"/images/feature3.svg"}
                alt="/"
                width={500}
                height={500}
              />
            </div>
          </div>
          <div className="flex gap-10">
            <div>
              <Image
                className="w-full"
                src={"/images/feature5.svg"}
                alt="/"
                width={500}
                height={500}
              />
            </div>
            <div>
              <Image
                className="w-full"
                src={"/images/feature4.svg"}
                alt="/"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex lg:hidden flex-col gap-5">
        <div className="flex gap-5">
          <div>
            <Image
              className="w-full"
              src={"/images/feature1.svg"}
              alt="/"
              width={500}
              height={500}
            />
          </div>
          <div className="flex flex-col gap-4">
            <div>
              <Image
                className="w-full"
                src={"/images/feature2.svg"}
                alt="/"
                width={500}
                height={500}
              />
            </div>
            <div>
              <Image
                className="w-full"
                src={"/images/feature4.svg"}
                alt="/"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
        <div>
          <Image
            className="w-full"
            src={"/images/feature3.svg"}
            alt="/"
            width={500}
            height={500}
          />
        </div>
        <div>
          <Image
            className="w-full"
            src={"/images/feature5.svg"}
            alt="/"
            width={500}
            height={500}
          />
        </div>
      </div>
    </div>
  );
};

export default Features;
