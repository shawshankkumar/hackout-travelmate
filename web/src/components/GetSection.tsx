import { dashboardSectionType, dashboardSections } from "@/utils/constants";

export default function GetSection({ section }: { section: dashboardSectionType }) {
  switch (section) {
    case "profile":
      return <div>profile section</div>;
    case "bookings":
      return <div>bookings section</div>;
    case "services":
      return <div>services section</div>;
    case "calendar":
      return <div>calendar section</div>;
    case "payments":
      return <div>payments section</div>;
    default:
      return <div>default section</div>;
  }
}
