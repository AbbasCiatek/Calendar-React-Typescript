import DndProviderWrapper from "@/dnd/dnd-provider-wrapper.tsx";

function App() {
	return (
		<DndProviderWrapper>
			<div className="container m-auto mt-5"></div>;
		</DndProviderWrapper>
	);
}

export default App;
