import { useEffect } from "react";
import { toast } from "@/components/ui/use-toast";
import Error from "@/components/Error";
import Head from "next/head";

export default function ServerError() {

  useEffect(() => {
    toast({
      title: "Something went wrong",
      description: "Please try again later.",
    })
  }, []);

  return (
    <>
      <Head>
        <title>Something went wrong</title>
      </Head>
      <Error code={500} />
    </>
  );
}
