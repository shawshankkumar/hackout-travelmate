import CompanyLogo from "@/components/CompanyLogo";
import SectionIcon from "@/components/SectionIcon";
import { dashboardSectionType, dashboardSections } from "@/utils/constants";
import Link from "next/link";
import { BiSearch } from "react-icons/bi";

export default function DashboardSideBar({
  active,
}: {
  active: dashboardSectionType;
}) {
  return (
    <>
      <aside className="h-screen w-[15%] border-2 border-r-slate-200 hidden lg:flex lg:flex-col sticky top-0 left-0">
        <CompanyLogo className="my-4 mx-2" />
        <div className="px-3 w-full mt-10">
          <Link href={"/travelers"}>
            <div
              className={`mb-2 py-2 px-4 w-full text-lg my-1 font-semibold rounded-md transition-all duration-300 ease-in  ${"bg-purple-200 text-slate-900 hover:bg-purple-300"} flex items-center gap-4 whitespace-nowrap`}
            >
              <BiSearch />Travelers
            </div>
          </Link>
          {Object.entries(dashboardSections).map(([key, value]) => (
            <Link key={key} href={key}>
              <div
                className={`py-2 px-4 w-full text-lg my-1 font-semibold rounded-md transition-all duration-300 ease-in  ${
                  active === key
                    ? " bg-slate-700 text-white"
                    : "bg-white text-slate-500 hover:bg-slate-200"
                } flex items-center gap-4`}
              >
                <SectionIcon icon={value} /> {value}
              </div>
            </Link>
          ))}
        </div>
      </aside>
    </>
  );
}
