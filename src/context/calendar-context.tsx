import {
	createContext,
	type Dispatch,
	type ReactNode,
	type SetStateAction,
	useContext,
	useState,
} from "react";
import type { ViewTypes } from "@/types.ts";

export type CalendarContext = {
	selectedDate: Date;
	setSelectedDate: Dispatch<SetStateAction<Date>>;
	view: ViewTypes;
	setView: Dispatch<SetStateAction<ViewTypes>>;
};

export const CalendarContext = createContext<CalendarContext | null>(null);

export function useCalendar(): CalendarContext {
	const context = useContext(CalendarContext);
	if (!context) {
		throw new Error("useCalendar context must be in CalendarContextProvider");
	}
	return context;
}

export function CalendarContextProvider({ children }: { children: ReactNode }) {
	const [selectedDate, setSelectedDate] = useState<Date>(new Date(2025, 0, 1));
	const [view, setView] = useState<ViewTypes>("day");
	return (
		<CalendarContext.Provider
			value={{
				selectedDate,
				setSelectedDate,
				view,
				setView,
			}}
		>
			{children}
		</CalendarContext.Provider>
	);
}
