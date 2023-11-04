import { ArrowTopRightIcon, Share1Icon } from "@radix-ui/react-icons";
import useUser from "@/hooks/use-user";

export default function ProfileBar() {
  const { given_name } = useUser();

  return (
    <section className="p-3 border-2 border-slate-200/80 rounded-lg w-full flex items-center justify-between sticky top-0 bg-white">
      <div className="">
        <h1 className="font-bold text-lg lg:text-3xl text-slate-800">Hi, { given_name }</h1>
        <h5 className="font-medium text-slate-500 text-xs lg:text-sm">
          travelmate.io/shasha
        </h5>
      </div>
      <div className="flex items-center gap-2">
        <div className="bg-purple-400 p-2 lg:p-3 rounded-full hover:bg-purple-500">
          <ArrowTopRightIcon className="h-4 w-4 lg:h-6 lg:w-6 text-white stroke-2" />
        </div>
        <div className="p-2 lg:p-3 rounded-full hover:bg-orange-300">
          <Share1Icon className="h-4 w-4 lg:h-6 lg:w-6 text-black stroke-2" />
        </div>
      </div>
    </section>
  );
}
