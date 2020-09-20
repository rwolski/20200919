import EventModel from "../models/event";
import { ParsedUrlQuery } from 'querystring';

/**
 * Event query filter
 */
export default class EventQueryFilter {
    // Search event title
    public search?: string;

    // Search location
    public city?: string;
    public state?: string;
    public country?: string;

    // Search date range
    public startDate?: Date;
    public endDate?: Date;

    public constructor(args?: ParsedUrlQuery) {
        if (args.search) {
            this.search = args.search instanceof Array ? args.search[0] : args.search;
        }
        if (args.city) {
            this.city = args.city instanceof Array ? args.city[0] : args.city;
        }
        if (args.state) {
            this.state = args.state instanceof Array ? args.state[0] : args.state;
        }
        if (args.country) {
            this.country = args.country instanceof Array ? args.country[0] : args.country;
        }
        if (args.startDate) {
            const timestamp = Date.parse(args.startDate instanceof Array ? args.startDate[0] : args.startDate);
            if (isNaN(timestamp)) {
                throw new Error("Invalid start date");
            }
            this.startDate = new Date(timestamp);
        }
        if (args.endDate) {
            const timestamp = Date.parse(args.endDate instanceof Array ? args.endDate[0] : args.endDate);
            if (isNaN(timestamp)) {
                throw new Error("Invalid end date");
            }
            this.endDate = new Date(timestamp);
        }
    }

    // By default all events are returned unless they fail to match any query parameters provided
    public test(evt: EventModel): boolean {
        if (this.search && evt.Title && !evt.Title.toLowerCase().includes(this.search.toLowerCase())) {
            return false;
        }

        if (this.city && evt.Location.City && !evt.Location.City.toLowerCase().includes(this.city.toLowerCase())) {
            return false;
        }

        if (this.state && evt.Location.State && !evt.Location.State.toLowerCase().includes(this.state.toLowerCase())) {
            return false;
        }

        if (this.country && evt.Location.Country && !evt.Location.Country.toLowerCase().includes(this.country.toLowerCase())) {
            return false;
        }

        if (this.startDate && evt.Time && new Date(evt.Time) < new Date(this.startDate)) {
            return false;
        }

        if (this.endDate && evt.Time && new Date(evt.Time) > new Date(this.endDate)) {
            return false;
        }

        return true;
    }
}
