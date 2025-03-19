import Event_Study from "@/_components/Events/Event_Study/Event_Study";
import Event_Subscribe from "@/_components/Events/Event_Subscribe/Event_Subscribe";
import ClientQueryProvider from "@/_components/Events/Events_Components/ClientQueryProvider";
import Events_Components from "@/_components/Events/Events_Components/Events_Components";
import UpcomingEvents_PastEvents from "@/_components/Events/UpcomingEvents_PastEvents/UpcomingEvents_PastEvents";

const page = () => {
  return (
    <ClientQueryProvider>
      <div className="overflow-x-hidden">
        <Events_Components />
        <UpcomingEvents_PastEvents />
        <Event_Subscribe />
        <Event_Study />
      </div>
    </ClientQueryProvider>
  );
};

export default page;
