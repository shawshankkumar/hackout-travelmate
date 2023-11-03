import { ComboboxDemo } from "@/components/ComboBox";
import DashboardSideBar from "@/components/DashboardSidebar";
import GetSection from "@/components/GetSection";
import ProfileBar from "@/components/ProfileBar";
import { dashboardSectionType } from "@/utils/constants";
import { GetServerSidePropsContext } from "next";

export default function Section({
  section,
}: {
  section: dashboardSectionType;
}) {
  return (
    <main className="mx-3 py-3 lg:mx-0 lg:py-0 flex flex-col lg:flex-row">
      <DashboardSideBar active={section} />
      <section className="w-full lg:p-3">
        <ProfileBar />
        <section className="flex w-full lg:hidden mt-2">
          <ComboboxDemo active={section} />
        </section>
        <GetSection section={section} />
      </section>
    </main>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { section } = context.query;

  return {
    props: {
      section,
    },
  };
}
