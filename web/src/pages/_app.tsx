import '@/styles/globals.css'
import Navbar from "@/components/Navbar";
import { Toaster } from "@/components/ui/toaster";
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className="flex flex-col min-h-screen">
      <Toaster />
      <Navbar />
      <Component {...pageProps} />
    </main>
  )
}
