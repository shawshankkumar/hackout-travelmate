import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { timeArray } from "@/utils/constants";
import { Separator } from "@radix-ui/react-select";

export default function Calendar() {
  const [Monday, setMonday] = useState(false);
  const [Tuesday, setTuesday] = useState(false);
  const [Wednesday, setWednesday] = useState(false);
  const [Thursday, setThursday] = useState(false);
  const [Friday, setFriday] = useState(false);
  const [Saturday, setSaturday] = useState(false);
  const [Sunday, setSunday] = useState(false);

  const sechdule = [
    {
      day: "Monday",
      available: Monday,
      availableFunction: setMonday,
    },
    {
      day: "Tuesday",
      available: Tuesday,
      availableFunction: setTuesday,
    },
    {
      day: "Wednesday",
      available: Wednesday,
      availableFunction: setWednesday,
    },
    {
      day: "Thursday",
      available: Thursday,
      availableFunction: setThursday,
    },
    {
      day: "Friday",
      available: Friday,
      availableFunction: setFriday,
    },
    {
      day: "Saturday",
      available: Saturday,
      availableFunction: setSaturday,
    },
    {
      day: "Sunday",
      available: Sunday,
      availableFunction: setSunday,
    },
  ];

  return (
    <section className=" mt-5 ml-0 lg:ml-12">
      <section className="flex">
        <div className="mt-8 w-full lg:w-[50%]">
          {sechdule.map((day) => (
            <Card key={day.day} className="mb-2">
              <CardHeader>
                <CardTitle className="font-bold flex flex-col lg:flex-row items-start gap-4 lg:justify-between lg:items-center">
                  <div className="flex items-center justify-start gap-6">
                    <Checkbox
                      id={day.day}
                      checked={day.available}
                      onCheckedChange={() => {
                        day.availableFunction((prev) => !prev);
                      }}
                    />
                    <label
                      htmlFor={day.day}
                      className="text-lg font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {day.day}
                    </label>
                  </div>
                  {day.available ? (
                    <div className="flex w-full lg:w-[70%] justify-between lg:justify-end lg:gap-4 items-center">
                      <div className="w-[45%] lg:w-[32%]">
                        <Select defaultValue={timeArray[0]}>
                          <SelectTrigger
                            id={`${day.day}+from`}
                            className="text-xs lg:text-sm"
                          >
                            <SelectValue placeholder="Select" />
                          </SelectTrigger>
                          <SelectContent className="overflow-y-scroll h-52">
                            {timeArray.map((time) => (
                              <SelectItem key={time} value={time}>
                                {time}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="h-[2px] w-3 bg-slate-300"></div>
                      <div className="w-[45%] lg:w-[32%]">
                        <Select defaultValue={timeArray[2]}>
                          <SelectTrigger
                            id={`${day.day}+to`}
                            className="text-xs lg:text-sm"
                          >
                            <SelectValue placeholder="Select" />
                          </SelectTrigger>
                          <SelectContent className="overflow-y-scroll h-52">
                            {timeArray.map((time) => (
                              <SelectItem key={time} value={time}>
                                {time}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  ) : (
                    <div className="">Unavailable</div>
                  )}
                </CardTitle>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>
    </section>
  );
}
