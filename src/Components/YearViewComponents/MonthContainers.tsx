
import DaysInMonth from "@/Components/YearViewComponents/DaysInMonth.tsx";
import {getArrayMonth} from "@/dateHelpers.ts";


export default function MonthContainers() {

    // not new date, date will be passed by useCalendar hook
    const date = new Date();
    const months = getArrayMonth(date);
    console.log(months);
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
            {months.map((month, i) => (
                <DaysInMonth key={i} month={month} />
            ))}
        </div>
    );
};
