import CalendarHeader from "@/Components/CalendarHeader.tsx";

function App() {
	return(
    <ViewContext value={"week"}>
    <div className="container m-auto mt-5">
        <CalendarHeader />
    </div>
    </ViewContext>;
  )
}

export default App
