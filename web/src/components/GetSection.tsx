import Booking from "@/components/Booking";
import Calendar from "@/components/Calendar";
import Profile from "@/components/Profile";
import Services from "@/components/Services";
import { dashboardSectionType, dashboardSections } from "@/utils/constants";

export default function GetSection({
  section,
}: {
  section: dashboardSectionType;
}) {
  switch (section) {
    case "profile":
      return <Profile />;
    case "bookings":
      return <Booking />;
    case "services":
      return <Services />;
    case "calendar":
      return <Calendar />;
    case "payments":
      return <div>payments section</div>;
    default:
      return <div>default section</div>;
  }
}
