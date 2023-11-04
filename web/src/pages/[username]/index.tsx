import ServiceCard from "@/components/ServiceCard";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { AiFillInstagram } from "react-icons/ai";
import { GetServerSidePropsContext } from "next";
import { BsYoutube } from "react-icons/bs";
import { FaMapLocationDot, FaXTwitter } from "react-icons/fa6";
import { BiLogoFacebookCircle } from "react-icons/bi";
import axios from "axios";

export default function UserPage({ data }: { data: any }) {
  const {
    given_name,
    family_name,
    picture,
    username,
    services,
    socials,
    description,
    destinations,
  } = data.userData;
  
  return (
    <main className="mx-3 py-3 lg:mx-0 lg:py-0 lg:flex">
      <section className="hidden lg:flex lg:flex-col w-3/12 bg-purple-200 h-screen px-7 justify-center">
        <div className="flex gap-5 items-center py-5">
          <Avatar className="h-28 w-28">
            <AvatarImage src={picture} alt="@shadcn" />
            <AvatarFallback>{username}</AvatarFallback>
          </Avatar>
          <h1 className="text-2xl font-bold mt-2 w-full whitespace-nowrap text-ellipsis overflow-hidden">
            {given_name} {family_name}
          </h1>
        </div>
        <p className="text-sm text-left text-black/80 w-full text-ellipsis overflow-hidden">
          {description}
        </p>
        <div className="flex flex-col justify-between mt-4">
          <div className="flex gap-2 items-center">
            <FaMapLocationDot className="h-7 w-7" />
            <span className="text-lg font-semibold">Destinations</span>
          </div>
          <ul>
            {destinations.map((destination: any) => (
              <li key={destination.id} className="text-sm">
                {destination.name}
              </li>
            ))}
          </ul>
          <div className="flex gap-4 items-center mt-10">
            <a href={socials.youtube} target="_blank">
              <BsYoutube className="h-7 w-7" />
            </a>
            <a href={socials.instagram} target="_blank">
              <AiFillInstagram className="h-7 w-7" />
            </a>
            <a href={socials.facebook} target="_blank">
              <BiLogoFacebookCircle className="h-7 w-7" />
            </a>
            <a href={socials.twitter} target="_blank">
              <FaXTwitter className="h-6 w-6" />
            </a>
          </div>
        </div>
      </section>
      <section className="mb-2 bg-purple-200 rounded-lg p-6 flex flex-col gap-1 lg:hidden">
        <div className="flex gap-2 items-center">
          <Avatar className="h-11 w-11">
            <AvatarImage src={picture} alt={given_name} />
            <AvatarFallback>{username}</AvatarFallback>
          </Avatar>
          <h1 className="text-base font-bold w-full whitespace-nowrap text-ellipsis overflow-hidden">
            {given_name} {family_name}
          </h1>
        </div>
        <p className="text-xs text-black/50">{description}</p>
        <div className="flex items-center justify-between mt-4">
          <div className="flex gap-2 items-center">
            <FaMapLocationDot className="h-7 w-7" />
            <span className="text-xs font-semibold">
              <span className="text-sm">
                {destinations[0].name} + {destinations.length - 1} more
              </span>
            </span>
          </div>
          <div className="flex gap-4 items-center">
            <a href={socials.youtube} target="_blank">
              <BsYoutube className="h-7 w-7" />
            </a>
            <a href={socials.instagram} target="_blank">
              <AiFillInstagram className="h-7 w-7" />
            </a>
            <a href={socials.facebook} target="_blank">
              <BiLogoFacebookCircle className="h-7 w-7" />
            </a>
            <a href={socials.twitter} target="_blank">
              <FaXTwitter className="h-6 w-6" />
            </a>
          </div>
        </div>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-2 lg:gap-4 h-fit lg:w-3/4 lg:p-5">
        {services.map((service: any) => {
          if (service.enabled) {
            return (
              <ServiceCard
                key={service.id}
                serviceId={service.id}
                username={username}
                serviceTitle={service.name}
                serviceDescription={service.description}
                servicePrice={service.amount}
                serviceTime={service.timeslot}
                nextAvailableDate={service.next_available}
              />
            );
          }
        })}
      </section>
    </main>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { username } = context.query;
  try {
    const response = await axios.get(
      process.env.NEXT_PUBLIC_API_URL + "/user/" + username
    );
    const data = response.data;
    return {
      props: { data },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      redirect: {
        permanent: false,
        destination: "/not-found",
      },
      props: {},
    };
  }
}
