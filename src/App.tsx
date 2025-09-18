import DayView from "@/Components/DayView.tsx";

function App() {
    const date = new Date();
  return (
    <>
        <DayView date={date}/>
    </>
  )
}

export default App
