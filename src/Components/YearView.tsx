import MonthContainers from "@/Components/YearViewComponents/month-containers.tsx";

export default function YearView() {
	return (
		<div className=" m-10 p-4 rounded-b-2xl border border-gray-300 flex flex-col items-center justify-center ">
			<MonthContainers />
		</div>
	);
}
