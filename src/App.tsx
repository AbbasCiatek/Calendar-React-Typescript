import DayView from "@/Components/DayView.tsx";

function App() {
    const date = new Date(2025,8,23);
  return (
    <>
        <DayView date={date}/>
    </>
  )
}

export default App
