import { useEffect, useState } from "react";

// Define the type for the props
interface CountDownProps {
  eventDate: string; // The event date should be passed as a string in ISO format
}

const CountDown = ({ eventDate }: CountDownProps) => {
  const counterStyle = "bg-black font-bold text-white text-2xl px-5 py-3";

  // State to store remaining days, hours, minutes, and seconds
  const [remainingTime, setRemainingTime] = useState<{ days: number; hours: number; minutes: number; seconds: number }>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date(); // Get current date and time
      const eventDateObj = new Date(eventDate); // Convert the event date string to Date object

      // Check if eventDateObj is valid
      if (isNaN(eventDateObj.getTime())) {
        return; // Early exit if eventDate is invalid
      }

      // Calculate the difference in milliseconds
      const diffInMs = eventDateObj.getTime() - now.getTime(); // Ensure we're using getTime() for both objects

      // Check if difference is negative (event is in the past)
      if (diffInMs <= 0) {
        clearInterval(intervalId);
        setRemainingTime({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      // Calculate remaining days, hours, minutes, and seconds
      const remainingDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
      const remainingHours = Math.floor((diffInMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const remainingMinutes = Math.floor((diffInMs % (1000 * 60 * 60)) / (1000 * 60));
      const remainingSeconds = Math.floor((diffInMs % (1000 * 60)) / 1000); // Calculate seconds

      // Update the state with the remaining time
      setRemainingTime({ days: remainingDays, hours: remainingHours, minutes: remainingMinutes, seconds: remainingSeconds });
    }, 1000); // Update every second

    // Cleanup the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [eventDate]);

  return (
    <div className="flex md:items-end items-center gap-5 flex-col md:flex-row mb-5">
      <h2 className="text-4xl gochi-hand text-[#1D4ED8]">Only</h2>
      <span className="grid grid-cols-4 w-fit"> {/* Updated to 4 columns */}
        <span>
          <h2 className="font-semibold">Days</h2>
          <p className={`rounded-l-lg ${counterStyle}`}>{remainingTime.days}</p>
        </span>
        <span>
          <h2 className="font-semibold">Hours</h2>
          <p className={` ${counterStyle}`}>{remainingTime.hours}</p>
        </span>
        <span>
          <h2 className="font-semibold">Minutes</h2>
          <p className={` ${counterStyle}`}>{remainingTime.minutes}</p>
        </span>
        <span>
          <h2 className="font-semibold">Seconds</h2>
          <p className={`rounded-r-lg ${counterStyle}`}>{remainingTime.seconds}</p>
        </span>
      </span>
      <h2 className="text-4xl gochi-hand text-[#1D4ED8]">Time Remaining</h2>
    </div>
  );
};

export default CountDown;
