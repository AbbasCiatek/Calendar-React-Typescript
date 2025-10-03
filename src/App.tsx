import CalendarHeader from "@/Components/CalendarHeader.tsx";
import {CalendarContextProvider} from "@/context/calendar-context.tsx";

function App() {
    return (
        <CalendarContextProvider  >
            <div className="container m-auto mt-5">
            <CalendarHeader />
            </div>
        </CalendarContextProvider>
    )
}

export default App
