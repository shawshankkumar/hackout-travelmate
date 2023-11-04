import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import useUser from "@/hooks/use-user";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AiFillInstagram } from "react-icons/ai";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";
import { BsYoutube } from "react-icons/bs";
import { useState } from "react";

export default function Profile() {
  const { given_name, username, picture, family_name, email, description } =
    useUser();
  const [aboutme, setAboutMe] = useState(description);
  return (
    <section className="overflow-y-scroll overflow-x-hidden">
      <div className="my-4 flex flex-col gap-4 items-center">
        <Avatar className="h-32 w-32">
          <AvatarImage src={picture} alt="@shadcn" />
          <AvatarFallback>{username}</AvatarFallback>
        </Avatar>
        <div className=" text-center">
          <h2 className="text-2xl font-bold">
            {given_name} {family_name}
          </h2>
          <p className="text-gray-500">@{username}</p>
        </div>
      </div>
      <div className="ml-0 md:ml-12">
        <div className="mt-8 flex flex-col">
          <span className="font-bold text-slate-900 text-lg mb-2">Email</span>
          <span className="py-2 px-4 rounded-md text-base bg-slate-200 text-slate-900 font-semibold max-w-xl">
            {email}
          </span>
        </div>
        <div className="mt-8">
          <div className="grid w-full gap-1.5">
            <Label
              htmlFor="message-2"
              className="font-bold text-slate-900 text-lg"
            >
              About Me
            </Label>
            <div className="px-2 max-w-2xl">
              <Textarea
                placeholder="Type your message here."
                id="message-2"
                value={aboutme}
                onChange={(e) => {
                  setAboutMe(e.target.value);
                }}
              />
            </div>
            <p className="text-sm text-muted-foreground">
              Your message will be copied to your page.
            </p>
            <Button type="submit" className="w-16">
              Save
            </Button>
          </div>
        </div>
        <div className="mt-8">
          <span className="font-bold text-slate-900 text-lg mb-2">
            Social Links
          </span>
          <div className="mt-4 flex flex-col gap-2 max-w-xl">
            <div className="flex w-full max-w-sm items-center space-x-2 px-1">
              <AiFillInstagram className="h-12 w-12" />
              <Input type="email" placeholder="Instagram" />
            </div>
            <div className="flex w-full max-w-sm items-center space-x-2 px-1">
              <BiLogoFacebookCircle className="h-12 w-12" />
              <Input type="email" placeholder="Facebook" />
            </div>
            <div className="flex w-full max-w-sm items-center space-x-2 px-1">
              <BsYoutube className="h-12 w-12" />
              <Input type="email" placeholder="Youtube" />
            </div>
            <div className="flex w-full max-w-sm items-center space-x-2 px-1">
              <FaXTwitter className="h-12 w-12" />
              <Input type="email" placeholder="Twitter" />
            </div>
            <Button type="submit" className="w-[67%] mt-2">
              + Add
            </Button>
          </div>
        </div>
        <div className="mt-8">
          <span className="font-bold text-slate-900 text-lg mb-2">
            Destinations
          </span>
          <div className=""></div>
        </div>
      </div>
    </section>
  );
}
