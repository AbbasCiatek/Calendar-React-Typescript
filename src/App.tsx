import CalendarHeader from "@/Components/calendar-header.tsx";
import {CalendarContextProvider} from "@/context/calendar-context.tsx";
import YearView from "@/Components/YearView.tsx";

function App() {
    return (
        <CalendarContextProvider  >
            <div className="container m-auto mt-5">
            <CalendarHeader />
                <YearView/>
            </div>
        </CalendarContextProvider>
    )
}

export default App
