import Head from "next/head";
import { GetServerSidePropsContext } from "next";
import { getSignInData } from "@/utils/api";
import { useEffect } from "react";
import { useStoreZ } from "@/utils/state";
import { useRouter } from "next/router";

export default function SignIn({ data }: any) {
  const router = useRouter();
  const { auth_data } = data;
  const { addToken } = useStoreZ();

  useEffect(() => {
    addToken(auth_data)
    const redirect_to = localStorage.getItem("redirect_to");
    if (redirect_to) {
      localStorage.removeItem("redirect_to");
    }
    router.push(redirect_to ?? "/dashboard/profile", undefined, { shallow: true });
  }, [addToken, auth_data, router]);

  return (
    <>
      <Head>
        <title>Redirecting...</title>
      </Head>
    </>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { code } = context.query;
  const data = await getSignInData(code as string);
  return { props: { data } };
}
