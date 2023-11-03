// components/TimeSlotPicker.tsx
import React, { useState } from "react";

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
        currentTime.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
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
    <div>
      <p>Select a time slot:</p>
      <ul>
        {generateTimeSlots().map((time) => (
          <li key={time} onClick={() => handleTimeSlotSelect(time)}>
            {time}
          </li>
        ))}
      </ul>
      <p>Selected Time: {selectedTime}</p>
    </div>
  );
};

export default TimeSlotPicker;
