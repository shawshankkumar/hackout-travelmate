import { BsCalendarEvent } from "react-icons/bs";
import { GiEgyptianProfile } from "react-icons/gi";
import { HiOutlineTicket } from "react-icons/hi";
import { MdOutlinePayment, MdOutlineRoomService } from "react-icons/md";

export default function SectionIcon({ icon }: { icon: string }) {
  switch (icon) {
    case "Calendar":
      return <BsCalendarEvent />;
    case "Profile":
      return <GiEgyptianProfile />;
    case "Bookings":
      return <HiOutlineTicket />;
    case "Services":
      return <MdOutlineRoomService />;
    case "Payments":
      return <MdOutlinePayment />;

    default:
      return <div />;
  }
}
