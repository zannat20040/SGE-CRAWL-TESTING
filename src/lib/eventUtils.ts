import { SlideEvent } from "@/assets/type/EventInterface";

// Convert date and time to UTC string (assumes BD time)
export const convertToUTC = (
  dateStr: string,
  timeStr: string
): string | null => {
  if (!dateStr || !timeStr) return null;

  const eventDateTime = new Date(`${dateStr}T${timeStr}:00+06:00`);

  return isNaN(eventDateTime.getTime()) ? null : eventDateTime.toISOString();
};

// Convert UTC string to local time string
export const convertToLocal = (utcDate: string): string =>
  utcDate ? new Date(utcDate).toLocaleString() : "Invalid Date";

// Add UTC and local time to each event
export const processEvents = (events: SlideEvent[]): SlideEvent[] =>
  events
    .map((event) => {
      const startUTC = convertToUTC(event.eventStartDate, event.eventStartTime);
      const endUTC = convertToUTC(event.eventEndDate, event.eventEndTime);

      if (!startUTC || !endUTC) return null;

      return {
        ...event,
        startUTC,
        endUTC,
        startLocal: convertToLocal(startUTC),
        endLocal: convertToLocal(endUTC),
      };
    })
    .filter(Boolean) as SlideEvent[];
