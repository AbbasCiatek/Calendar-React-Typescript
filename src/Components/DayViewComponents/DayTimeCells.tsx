import TimeCells from "@/Components/WeeKDayViewCommonComponents/TimeCells.tsx";
import TimeLine from "@/Components/WeeKDayViewCommonComponents/TimeLine.tsx";
import { endOfDay, isToday, startOfDay} from "date-fns";
import useEventStore from "@/EventStore.ts";
import type {Events} from "@/types.ts";
import EventsPositioning from "@/Components/WeeKDayViewCommonComponents/EventsPositioning.tsx";

export default function DayTimeCells({date}:{date:Date}) {

    const {getSingleDayEvents} = useEventStore();


    const singleDayEvents:Events = getSingleDayEvents(startOfDay(date),endOfDay(date));



    return (

        <div  className="relative flex-1 border-l bg-white">
            {/*date and views have to be set by hook not prop*/}
            <TimeCells day={date} view={"day"} />
            <EventsPositioning singleDayEvents={singleDayEvents} day={date} />
            {isToday(date) &&  <TimeLine/>}
        </div>
    );
}
