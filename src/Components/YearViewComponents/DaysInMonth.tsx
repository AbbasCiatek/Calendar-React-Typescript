import {WeekDays} from "@/helpers.ts";
import {endOfMonth, formatDate, isSameDay, isToday, startOfMonth} from "date-fns";
import {clsx} from "clsx";
import {daysInMonth} from "@/dateHelpers.ts";
import useEventStore from "@/EventStore.ts";
import type {Event} from "@/types.ts";
import {EventBullet} from "@/Components/Events/EventBullet.tsx";
import EventListDialog from "@/Components/Events/EventListDialog.tsx";

export default function DaysInMonth({month}:{month:Date}){
    const days = daysInMonth(month);
    const firstDayIndex = days.firstDayIndex;
    // const handleDayClicked = (day:Date) => {
    //     alert(day);
    //     //must navigate to the day in the dayView
    // }

    const {getEventsByDateRange} = useEventStore();
    const monthlyEvents:Event[] = getEventsByDateRange(startOfMonth(month),endOfMonth(month));



    return (
        <div className="border rounded-b-2xl grid grid-cols-7 gap-6 m-3 p-4 shadow-xl">
            {WeekDays.map((day)=>{
                return <div className=" pb-4 font-medium text-sm text-muted-foreground gap-2  "  key={day} >{day}</div>
            })}
            {Array.from({length:firstDayIndex-1}).map((_, index)=>{
                return <div  key={index}  />
            })}
            {days.daysInMonth.map((day,index)=>{
                const dayEvent =monthlyEvents.filter((event:Event)=>
                    isSameDay(new Date(event.startDate),day)
                );
                return (
                    <div key={`b${index}`}>
                    <div
                    className={clsx(" text-center text-xs font-bold" ,isToday(day) &&
                        "rounded-full bg-primary text-primary-foreground")}
                    >
                    { formatDate(day,'d')}
                </div>
                        {dayEvent.length > 0 && <EventListDialog><EventBullet color={dayEvent[0].color} /></EventListDialog>}
                            {dayEvent.length > 1 &&
                            <span className="text-[0.6rem]">
                                 +{dayEvent.length - 1} </span>
                            }
                    </div>
            );
            })}
        </div>
    );
}