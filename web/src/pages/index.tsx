import Hero from "@/components/sections/Hero";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import About from "@/components/sections/About";
import Features from "@/components/sections/Features";
import QnA from "@/components/sections/QnA";
import Footer from "@/components/Footer";

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
      <QnA />
      <Footer />
    </>
  );
}
