import { useEffect } from "react";
import { toast } from "@/components/ui/use-toast";
import Error from "@/components/Error";
import Head from "next/head";

export default function UserNotFound() {
  useEffect(() => {
    toast({
      title: "No such user found",
      description: "The page you are looking for does not exist."
    })
  }, []);

  return (
    <>
      <Head>
        <title>Page not found</title>
      </Head>
      <Error code={404} />
    </>
  )
}
