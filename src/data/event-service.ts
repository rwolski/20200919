import { EventModel } from "../models/event";
import eventData from "./event-data";
import { applyEventFilter, EventFilter } from "./event-filter";

export default class EventService {
  // Query a data source for events, given an optional filter
  public static query(filter?: EventFilter): EventModel[] {
    return eventData.filter((e) => !filter || applyEventFilter(e, filter));
  }

  // Add an event to the data source given the model provided
  // public static save(evt: EventModel): void {
  //   console.log("Adding/updating a event");
  // }

  // Delete an event to the data source given the id provided
  // public static delete(id: string): void {
  //   console.log("Deleting an event");
  // }
}
