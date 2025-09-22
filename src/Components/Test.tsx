import EventDetailsDialog from "@/Components/Dialogs/EventDetailsDialog.tsx";
import type {Event} from "@/types.ts";
import {Button} from "@/components/ui/button.tsx";
import useEventStore from "@/EventStore.ts";


export default function Test(){

    const event:Event ={
        id:'test',
        title:'test',
        startDate:new Date(),
        endDate: new Date(2025,8,24),
        color:"blue",
        description:"Test description",
        isAllDay:true,
    }
    const {addEvent} = useEventStore();
    const handleEvent =(event:Event)=>{
        try {
            alert('Start')
            addEvent(event);
            alert("Event added successfully.");
        }
        catch(error){
            alert(error);
        }

    }
    return (
        <>
            <Button type='button' variant='outline' onClick={()=>handleEvent(event)}>Add Event </Button>
        <EventDetailsDialog event={event}>
            <Button type="button" variant="default" >
             Event Details
            </Button>
        </EventDetailsDialog>
            </>
    )
}