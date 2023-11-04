import Head from "next/head";
import Image from "next/image";
import qs from "querystring";
import Logo from "@/components/Logo";
import useAuth from "@/hooks/use-auth";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { Button } from "@/components/ui/button";

export default function SignIn() {
  const router = useRouter();
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    if (isAuthenticated) {
      router.push("/dashboard/profile", undefined, { shallow: true });
    }
  }, [isAuthenticated, router]);

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
      <div className="flex flex-col-reverse lg:flex-row grow">
        <div className="flex flex-col gap-2 items-center justify-center bg-black/90 grow">
          <Logo className="text-white text-3xl md:text-5xl my-10" size={48} />
          <p className="text-xl font-bold text-white">Get Started Now!</p>
          <div>
            <Button variant="secondary" onClick={handleSignIn} className="h-14 px-8">
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
        <Image
          src="/images/place2.jpg"
          alt="image"
          width={4366}
          height={2911}
          className="lg:w-[60vw]"
          loading="eager"
        />
      </div>
    </>
  );
}
