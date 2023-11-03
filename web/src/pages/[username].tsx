import ServiceCard from "@/components/ServiceCard";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { AiFillInstagram } from "react-icons/ai";
import { GetServerSidePropsContext } from "next";
import { BsYoutube } from "react-icons/bs";
import { FaMapLocationDot } from "react-icons/fa6";
import { BiLogoFacebookCircle } from "react-icons/bi";

export default function UserPage({ username }: { username: string }) {
  return (
    <main className="mx-3 py-3 lg:mx-0 lg:py-0 lg:flex">
      <section className="hidden lg:flex lg:flex-col w-3/12 bg-purple-200 h-screen px-7 justify-center">
        <div className="flex gap-5 items-center py-5">
          <Avatar className="h-28 w-28">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>{username}</AvatarFallback>
          </Avatar>
          <h1 className=" text-2xl font-bold mt-2">{username}</h1>
        </div>
        <p className="text-sm text-left text-black/80">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae,
          atque.
        </p>
        <div className="flex flex-col justify-between mt-4">
          <div className="flex gap-2 items-center">
            <FaMapLocationDot className="h-7 w-7" />
            <span className="text-lg font-semibold">Destinations</span>
          </div>
          <ul>
            <li>Kerala</li>
            <li>Kerala</li>
            <li>Kerala</li>
            <li>Kerala</li>
          </ul>
          <div className="flex gap-4 items-center mt-10">
            <BsYoutube className="h-7 w-7"  />
            <AiFillInstagram className="h-7 w-7"  />
            <BiLogoFacebookCircle className="h-7 w-7"  />
          </div>
        </div>
      </section>
      <section className="mb-2 bg-purple-200 rounded-lg p-4 flex flex-col gap-1 lg:hidden">
        <div className="flex gap-2 items-center">
          <Avatar className="h-8 w-8">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>{username}</AvatarFallback>
          </Avatar>
          <h1 className="text-sm font-bold">{username}</h1>
        </div>
        <p className="text-xs text-black/50">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae,
          atque.
        </p>
        <div className="flex items-center justify-between mt-4">
          <div className="flex gap-2">
            <FaMapLocationDot />
            <span className="text-xs font-semibold">Destinations</span>
          </div>
          <div className="flex gap-4 items-center">
            <BsYoutube />
            <AiFillInstagram />
            <BiLogoFacebookCircle />
          </div>
        </div>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-2 lg:gap-4 h-fit lg:w-3/4 lg:p-5">
        <ServiceCard
          serviceId={1234}
          username={username}
          serviceTitle={username}
          serviceDescription="Service Description"
          servicePrice={0}
          serviceTime="30"
        />
        <ServiceCard
          serviceId={1234}
          username={username}
          serviceTitle={username}
          serviceDescription="Service Description"
          servicePrice={0}
          serviceTime="30"
        />
        <ServiceCard
          serviceId={1234}
          username={username}
          serviceTitle={username}
          serviceDescription="Service Description"
          servicePrice={0}
          serviceTime="30"
        />
      </section>
    </main>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { username } = context.query;

  return {
    props: {
      username,
    },
  };
}
