import BookingCard from "@/components/BookingCard";

export default function Booking() {
  return (
    <section className="mx-3 my-5 overflow-y-scroll overflow-x-hidden">
      <div className="my-8">
        <h3 className="w-full border-b-2 border-b-slate-200 text-lg font-medium text-slate-500">
          Nov - 03
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 lg:gap-4 h-fit mt-5 ">
          <BookingCard />
        </div>
      </div>
      <div className="my-8">
        <h3 className="w-full border-b-2 border-b-slate-200 text-lg font-medium text-slate-500">
          Nov - 05
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 lg:gap-4 h-fit mt-5 ">
          <BookingCard />
        </div>
      </div>
      <div className="my-8">
        <h3 className="w-full border-b-2 border-b-slate-200 text-lg font-medium text-slate-500">
          Nov - 05
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 lg:gap-4 h-fit mt-5 ">
          <BookingCard />
        </div>
      </div>
    </section>
  );
}
