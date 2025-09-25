import {formatDate} from "date-fns";
import {daysOfWeek} from "@/dateHelpers.ts";

export default function WeekDaysDisplay({date}: { date: Date }) {
    const weekDays = daysOfWeek(date);
    return (
        <div className="grid flex-1 grid-cols-7 divide-x border-l   ">
            {weekDays.map((day, index) => (
                <div key={index} className="pt-2 pb-1 px-2">
                    <div className="flex flex-col items-center text-xs font-medium  ">
                        <div className="flex items-center gap-2">
            <span className="leading-none ">
                {formatDate(day, "EE").toUpperCase()}
            </span>
                                  <span className=" leading-none font-bold">
                                      {formatDate(day, "d")}
                                  </span>
                        </div>
                    </div>
                </div>

            ))}
        </div>
    )
}