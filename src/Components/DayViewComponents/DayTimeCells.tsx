import TimeCells from "@/Components/WeeKDayViewCommonComponents/TimeCells.tsx";
import TimeLine from "@/Components/WeeKDayViewCommonComponents/TimeLine.tsx";
import { endOfDay, isToday, startOfDay} from "date-fns";
import useEventStore from "@/EventStore.ts";
import type {Events} from "@/types.ts";
import EventsPositioning from "@/Components/WeeKDayViewCommonComponents/EventsPositioning.tsx";

export default function DayTimeCells({date}:{date:Date}) {

    const {getSingleDayEvents} = useEventStore();


    const events:Events = getSingleDayEvents(startOfDay(date),endOfDay(date));

    //the date is saved in store as Date and got as string .. need to cast it date object
    const singleDayEvents=events.map(e => ({
        ...e,
        startDate: new Date(e.startDate),
        endDate: new Date(e.endDate),
    }));


    return (

        <div  className="relative flex-1 border-l bg-white">
            {/*date and views have to be set by hook not prop*/}
            <TimeCells day={date}  />
            { singleDayEvents.length>0 && <EventsPositioning singleDayEvents={singleDayEvents} day={date}/>}
            {isToday(date) &&  <TimeLine/>}
        </div>
    );
}
