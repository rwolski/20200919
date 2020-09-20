import EventModel from "../models/event";
import eventData from "./event-data";
import EventQueryFilter from "./event-query-filter";

/**
 * Event data service for crud operations
 */
export default class EventService {
    // Query a data source for events, given an optional filter
    public static query(filter?: EventQueryFilter): EventModel[] {
        return eventData.filter((e) => !filter || filter.test(e));
    }

    // TODO: Add an event to the data source given the model provided
    // public static save(evt: EventModel): void {
    //   console.log("Adding/updating a event");
    // }

    // TODO: Delete an event to the data source given the id provided
    // public static delete(id: string): void {
    //   console.log("Deleting an event");
    // }
}
