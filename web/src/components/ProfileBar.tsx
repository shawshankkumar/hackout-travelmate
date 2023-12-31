import { ArrowTopRightIcon, Share1Icon } from "@radix-ui/react-icons";
import useUser from "@/hooks/use-user";
import Link from "next/link";

export default function ProfileBar() {
  const { given_name, username } = useUser();

  return (
    <section className="py-3 px-6 border-2 border-slate-200/80 rounded-xl w-full flex items-center justify-between sticky top-0 bg-white z-50">
      <div className="">
        <h1 className="font-bold text-lg lg:text-3xl text-slate-800">
          Hi, {given_name}
        </h1>
        <h5 className="font-medium text-slate-500 text-xs lg:text-sm">
          travelmate.io/{username}
        </h5>
      </div>
      <div className="flex items-center gap-2">
        <div className="bg-purple-400 p-2 lg:p-3 rounded-full hover:bg-purple-500">
          <Link href={`/${username}`}>
            <ArrowTopRightIcon className="h-4 w-4 lg:h-6 lg:w-6 text-white stroke-2" />
          </Link>
        </div>
        <div className="p-2 lg:p-3 rounded-full hover:bg-orange-300">
          <Share1Icon className="h-4 w-4 lg:h-6 lg:w-6 text-black stroke-2" />
        </div>
      </div>
    </section>
  );
}
