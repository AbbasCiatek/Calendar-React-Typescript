import DateDisplayLayout from "@/Components/WeeKDayViewCommonComponents/DateDisplayLayout.tsx";
import DayDisplay from "@/Components/DayViewComponents/DayDisplay.tsx";
import DayViewContainer from "@/Components/DayViewComponents/DayViewContainer.tsx";
import DayViewMultiDayEvent from "@/Components/DayViewComponents/DayViewMultiDayEvent.tsx";

export default function DayView({date}:{date:Date}) {

    return (
        <div className="flex flex-col">
            <div>

                <DateDisplayLayout>
                <DayDisplay date={date}/>
                </DateDisplayLayout>
                <DayViewMultiDayEvent date={date} />
            </div>
            <DayViewContainer date={date} />
        </div>
    );
}