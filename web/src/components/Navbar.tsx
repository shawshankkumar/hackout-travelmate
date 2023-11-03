import Logo from "@/components/Logo";

export default function Navbar() {
  return (
    <nav className="flex px-8 py-5">
      <Logo className="self-start items-center text-xl" size={32} />
    </nav>
  )
}
