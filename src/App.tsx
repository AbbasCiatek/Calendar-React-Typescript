import CalendarHeader from "@/Components/calendar-header.tsx";
import {CalendarContextProvider} from "@/context/calendar-context.tsx";
import AgendaView from "@/Components/Agenda-View/AgendaView.tsx";

function App() {
    return (
        <CalendarContextProvider  >
            <div className="container m-auto mt-5">
            <CalendarHeader />
                <AgendaView/>
            </div>
        </CalendarContextProvider>
    )
}

export default App
