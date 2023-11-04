import Logo from "@/components/Logo";
import useAuth from "@/hooks/use-auth";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface NavbarProps {
  variant?: "dashboard";
}

export default function Navbar({ variant }: NavbarProps) {
  const { isAuthenticated } = useAuth();

  return (
    <nav className="flex justify-between items-center px-2 py-4 md:px-8 md:py-4 lg:px-12 xl:px-20">
      <Logo className="self-start items-center text-xl" size={32} />
      <Button className="md:text-lg md:px-6 md:py-5">
        {isAuthenticated ? <Link href="/dashboard/profile">Visit Dashboard</Link> : <Link href="/auth">Get Started</Link>}
      </Button>
    </nav>
  )
}
