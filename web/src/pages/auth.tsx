import Head from "next/head";
import Image from "next/image";
import qs from "querystring";
import { useRouter } from "next/router";
import { Button } from "@/components/ui/button";

export default function SignIn() {
  const router = useRouter();

  const handleSignIn = async () => {
    try {
      const url =
        "https://accounts.google.com/o/oauth2/v2/auth?" +
        qs.stringify({
          client_id: process.env.NEXT_PUBLIC_GOOGLE_KEY,
          redirect_uri: process.env.NEXT_PUBLIC_GOOGLE_REDIRECT,
          response_type: "code",
          access_type: "offline",
          prompt: "consent",
          scope: [
            "https://www.googleapis.com/auth/userinfo.email",
            "https://www.googleapis.com/auth/userinfo.profile",
          ].join(" "),
        });
      await router.push(url);
    } catch (error) {
      console.log(error);
      await router.push("/500", undefined, { shallow: true });
    }
  };

  return (
    <>
      <Head>
        <title>Sign In | travelMate</title>
      </Head>
      <div className="grid grid-rows-2 md:grid-rows-1 md:grid-cols-2 lg:grid-cols-3 grow">
        <div className="p-2 flex flex-col items-center justify-center gap-2 lg:col-span-2">
          <Image
            src="/images/place1.jpg"
            alt="image"
            width={6496}
            height={4331}
            className="rounded-lg md:w-[40vw] lg:w-[30vw]"
          />
          <Image
            src="/images/place2.jpg"
            alt="image"
            width={4366}
            height={2911}
            className="rounded-lg md:w-[40vw] lg:w-[30vw]"
          />
        </div>
        <div className="flex flex-col gap-2 items-center justify-center bg-gray-100">
          <p className="text-xl font-bold">Get Started Now!</p>
          <div>
            <Button onClick={handleSignIn} className="h-14 px-8 ">
              <div className="flex items-center gap-3">
                <Image
                  src="/icons/google.svg"
                  alt="google logo"
                  width={32}
                  height={32}
                />{" "}
                Sign In with Google
              </div>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
