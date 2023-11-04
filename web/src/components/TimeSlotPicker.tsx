// components/TimeSlotPicker.tsx
import React, { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";

interface TimeSlotPickerProps {
  slots: string[];
  selected?: string;
  onSelect: (time: string) => void;
}

const TimeSlotPicker: React.FC<TimeSlotPickerProps> = ({
  slots,
  selected,
  onSelect,
}) => {
  const convertTo12Hour = (time: string) => {
    const [hours, minutes] = [time.slice(0, 2), time.slice(2, 4)];
    const hoursInt = parseInt(hours);
    const minutesInt = parseInt(minutes);

    if (hoursInt > 12) {
      return `${hoursInt - 12}:${minutesInt.toString().padEnd(2, "0")} PM`;
    } else if (hoursInt === 12) {
      return `${hoursInt}:${minutesInt.toString().padEnd(2, "0")} PM`;
    } else {
      return `${hoursInt}:${minutesInt.toString().padEnd(2, "0")} AM`;
    }
  }

  return (
    <div className="flex flex-col mt-5 gap-2">
      <p className="text-lg font-bold">Select a time slot</p>
      <ScrollArea className="h-[100px]">
        <ul className="grid grid-cols-2 gap-3 mt-2">
          {slots.map(convertTo12Hour).map((time) => (
            <li
              key={time}
              onClick={() => onSelect(time)}
              className={`w-5/6 mx-auto p-2 rounded-lg text-center cursor-pointer ${selected === time ? "bg-black text-white" : "bg-gray-200"}`}
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
