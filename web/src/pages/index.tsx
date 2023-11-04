import Hero from "@/components/sections/Hero";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import About from "@/components/sections/About";
import Features from "@/components/sections/Features";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | travelMate</title>
      </Head>
      <Navbar />
      <Hero />
      <About />
      <Features />
    </>
  );
}
