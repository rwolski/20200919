import LocationModel from "./location";
import { SeatModel } from "./seat";

/**
 * Event data model
 */
export default interface EventModel {
    Title: string;
    Time: string;
    Image: string;
    Location: LocationModel,
    AvailableSeats: SeatModel[];
}