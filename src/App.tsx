import CalendarHeader from "@/Components/calendar-header.tsx";
import WeekView from "@/Components/week-view.tsx";
import { CalendarContextProvider } from "@/context/calendar-context.tsx";

function App() {
	return (
		<CalendarContextProvider>
			<div className="container m-auto mt-5">
				<CalendarHeader />
				<WeekView />
			</div>
		</CalendarContextProvider>
	);
}

export default App;
