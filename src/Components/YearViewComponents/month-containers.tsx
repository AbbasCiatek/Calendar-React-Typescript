import DaysInMonth from "@/Components/YearViewComponents/days-in-month.tsx";
import { useCalendar } from "@/context/calendar-context.tsx";
import { getArrayMonth } from "@/dateHelpers.ts";

export default function MonthContainers() {
	const { date } = useCalendar();
	const months = getArrayMonth(date);
	console.log(months);
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 ">
			{months.map((month, i) => (
				<DaysInMonth key={i} month={month} />
			))}
		</div>
	);
}
