import ServiceCard from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";
import useUser from "@/hooks/use-user";
import { useState } from "react";

export default function Services() {
  const { username, services } = useUser();
  const [servicesArr, setServices] = useState<
    {
      amount: number;
      description: string;
      enabled: boolean;
      id: string;
      name: string;
      next_available: number;
      timeslot: number;
    }[]
  >([]);

  const addService = () => {
    const newService = {
      amount: 200,
      description: "Hey, wanna hangout with me and talk about new cities?",
      enabled: true,
      id: "xyz",
      name: "Hangout with me",
      next_available: 1699216993000,
      timeslot: 30,
    };

    setServices([...servicesArr, newService]);
  };
  if (!servicesArr || servicesArr.length === 0) {
    return (
      <div className="flex flex-col justify-center items-center h-[30vh] gap-6">
        <span className="font-bold text-slate-500 text-xl">
          Uh oh, You haven&apos;t created any service yet.
        </span>
        <Button className="ml-4" onClick={addService}>
          Create Service
        </Button>
      </div>
    );
  }
  return (
    <div className="">
      <Button className="ml-2 mt-4" onClick={addService}>
        Create Service
      </Button>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 lg:gap-4 h-fit lg:p-5">
        {servicesArr?.map((service: any) => {
          if (service.enabled) {
            return (
              <ServiceCard
                editible={true}
                key={service.id}
                serviceId={service.id}
                username={username}
                serviceTitle={service.name}
                serviceDescription={service.description}
                servicePrice={service.amount}
                serviceTime={service.timeslot}
                nextAvailableDate={service.next_available}
              />
            );
          }
        })}
      </div>
    </div>
  );
}
