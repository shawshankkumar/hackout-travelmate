// components/TimeSlotPicker.tsx
import React, { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";

interface TimeSlotPickerProps {
  startTime: string;
  endTime: string;
  timeInterval: number;
}

const TimeSlotPicker: React.FC<TimeSlotPickerProps> = ({
  startTime,
  endTime,
  timeInterval,
}) => {
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  // Function to generate time slots
  const generateTimeSlots = () => {
    const timeSlots = [];
    let currentTime = new Date(`2023-01-01 ${startTime}`);
    const endTimeObj = new Date(`2023-01-01 ${endTime}`);

    while (currentTime <= endTimeObj) {
      timeSlots.push(
        currentTime.toLocaleTimeString("en-IN", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        })
      );
      currentTime.setMinutes(currentTime.getMinutes() + timeInterval);
    }

    return timeSlots;
  };

  // Handle time slot selection
  const handleTimeSlotSelect = (time: string) => {
    setSelectedTime(time);
    // You can do something with the selected time, like triggering an action or updating state.
  };

  return (
    <div className="flex flex-col mt-5 gap-2">
      <p className="text-lg font-bold">Select a time slot</p>
      <ScrollArea className="h-[200px]">
        <ul className="grid grid-cols-2 gap-3 mt-2">
          {generateTimeSlots().map((time) => (
            <li
              key={time}
              onClick={() => handleTimeSlotSelect(time)}
              className={`p-2 rounded-md text-center cursor-pointer font-medium ${
                selectedTime === time ? "bg-black text-white" : "bg-gray-100 hover:bg-gray-200" 
              }`}
            >
              {time}
            </li>
          ))}
        </ul>
      </ScrollArea>
    </div>
  );
};

export default TimeSlotPicker;