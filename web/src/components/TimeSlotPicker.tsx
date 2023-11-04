// components/TimeSlotPicker.tsx
import React, { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";

interface TimeSlotPickerProps {
  startTime: string;
  endTime: string;
  timeInterval: number;
  selected?: string;
  onSelect: (time: string) => void;
}

const TimeSlotPicker: React.FC<TimeSlotPickerProps> = ({
  startTime,
  endTime,
  timeInterval,
  selected,
  onSelect,
}) => {
  const generateTimeSlots = () => {
    const timeSlots = [];
    let currentTime = new Date(`2023-01-01 ${startTime}`);
    const endTimeObj = new Date(`2023-01-01 ${endTime}`);

    while (currentTime <= endTimeObj) {
      timeSlots.push(
        currentTime.toLocaleTimeString('en-IN', {
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
    onSelect(time);
    // You can do something with the selected time, like triggering an action or updating state.
  };

  return (
    <div className="flex flex-col mt-5 gap-2">
      <p className="text-lg font-bold">Select a time slot</p>
      <ScrollArea className="h-[200px]">
        <ul className="flex flex-col gap-2">
          {generateTimeSlots().map((time) => (
            <li key={time} onClick={() => handleTimeSlotSelect(time)} className={`w-5/6 mx-auto p-2 rounded-lg text-center cursor-pointer ${selected === time ? "bg-black text-white" : "bg-gray-200"}`}>
              {time}
            </li>
          ))}
        </ul>
      </ScrollArea>
    </div>
  );
};

export default TimeSlotPicker;
