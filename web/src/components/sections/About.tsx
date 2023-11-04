import React from "react";
import { Button } from "../ui/button";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import Image from "next/image";
const About = () => {
  return (
    <div className="flex flex-col lg:flex lg:flex-row w-full h-screen bg-travelMate-backgroundLight">
      <div className="w-full h-full lg:w-1/2 flex flex-col justify-center gap-10 p-5 lg:p-20">
        <div>
          <h1 className="text-6xl font-semibold">
            Create your travelMate <br />
            page in seconds
          </h1>
        </div>
        <div>
          <h1 className="text-xl">
            From Wanderlust to Wallet <br />
            Start Earning with Travel Mate&rsquo;s Innovative Travel Platform!
          </h1>
        </div>
        <div>
          <Button className="rounded-full px-6 py-6 flex items-center gap-5">
            <div>
              <h1 className="text-2xl font-semibold">Publish your page</h1>
            </div>
            <div>
              <ArrowTopRightIcon width={35} height={35} />
            </div>
          </Button>
        </div>
      </div>
      <div className="w-full lg:w-1/2 flex justify-start lg:justify-center items-center gap-10 p-5 lg:pr-20">
        <Image className="w-full max-w-[400px] lg:max-w-none lg:w-11/12" src={"/images/CreatePageTemplate.svg"} alt="/" width={500} height={500} />
      </div>
    </div>
  );
};

export default About;
