import WeekView from "@/Components/WeekView.tsx";

function App() {
    const date = new Date();
  return (
    <>
        <WeekView date={date}/>
    </>
  )
}

export default App
