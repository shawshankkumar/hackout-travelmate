import useAuth from "@/hooks/use-auth";
import Head from "next/head";

export default function Dashboard() {
  const { user } = useAuth();

  return (
    <>
      <Head>
        <title>Dashboard | travelMate</title>
      </Head>
      Hello, {user.given_name}
    </>
  )
}