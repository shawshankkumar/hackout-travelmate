import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  InstagramLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";

const Footer = () => {
  return (
    <div className="bg-black p-5 lg:p-20 flex flex-col-reverse gap-20 lg:flex lg:flex-row justify-between text-white">
      <div className="flex items-center gap-5">
        <Image className="w-28" src="/images/logoIcon.png" alt="" width={150} height={150} />
        <h1 className="text-4xl lg:text-9xl font-bold">travelmate</h1>
      </div>
      <div className="flex flex-col gap-5">
        <div className="flex gap-10 text-lg font-medium">
          <div className="flex flex-col gap-3">
            <div>
              <Link href={""}>About</Link>
            </div>
            <div>
              <Link href={""}>Contact Us</Link>
            </div>
            <div>
              <Link href={""}>Terms Of Service</Link>
            </div>
            <div>
              <Link href={""}>Privacy</Link>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div>
              <Link href={""}>Pricing</Link>
            </div>
            <div>
              <Link href={""}>Blog</Link>
            </div>
          </div>
        </div>
        <div>
          <div className="flex gap-5">
            <Link href={""}>
              <InstagramLogoIcon width={30} height={30} className="cursor-pointer" />
            </Link>
            <Link href={""}>
              <LinkedInLogoIcon width={30} height={30} className="cursor-pointer" />
            </Link>
            <Link href={""}>
              <TwitterLogoIcon width={30} height={30} className="cursor-pointer" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
