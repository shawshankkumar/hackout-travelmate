import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from "@/components/Navbar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      <Component {...pageProps} />
    </main>
  )
}
