import { EventModel } from "../models/event";

export class EventFilter {
  // Search event title
  public search?: string;

  // Search location
  public city?: string;
  public state?: string;
  public country?: string;

  // Search date range
  public startDate?: Date;
  public endDate?: Date;

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  public constructor(args?: any) {
    if (args.search) {
      this.search = args.search;
    }
    if (args.city) {
      this.city = args.city;
    }
    if (args.state) {
      this.state = args.state;
    }
    if (args.country) {
      this.country = args.country;
    }
    if (args.startDate) {
      const timestamp = Date.parse(args.startDate);
      if (isNaN(timestamp)) {
        throw new Error("Invalid start date");
      }
      this.startDate = new Date(timestamp);
    }
    if (args.endDate) {
      const timestamp = Date.parse(args.endDate);
      if (isNaN(timestamp)) {
        throw new Error("Invalid end date");
      }
      this.endDate = new Date(timestamp);
    }
  }
}

// By default all events are returned unless they fail to match any query parameters provided
export function applyEventFilter(
  evt: EventModel,
  filter?: EventFilter
): boolean {
  if (
    filter.search &&
    evt.Title &&
    !evt.Title.toLowerCase().includes(filter.search.toLowerCase())
  ) {
    return false;
  }

  if (
    filter.city &&
    evt.Location.City &&
    !evt.Location.City.toLowerCase().includes(filter.city.toLowerCase())
  ) {
    return false;
  }

  if (
    filter.state &&
    evt.Location.State &&
    !evt.Location.State.toLowerCase().includes(filter.state.toLowerCase())
  ) {
    return false;
  }

  if (
    filter.country &&
    evt.Location.Country &&
    !evt.Location.Country.toLowerCase().includes(filter.country.toLowerCase())
  ) {
    return false;
  }

  if (
    filter.startDate &&
    evt.Time &&
    new Date(evt.Time) < new Date(filter.startDate)
  ) {
    return false;
  }

  if (
    filter.endDate &&
    evt.Time &&
    new Date(evt.Time) > new Date(filter.endDate)
  ) {
    return false;
  }

  return true;
}
