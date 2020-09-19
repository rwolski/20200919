export interface LocationModel {
    City: string;
    State: string;
    Country: string;
}

export interface SeatModel {
    id: string;
}

export interface EventModel {
    Title: string;
    Time: string;
    Image: string;
    Location: LocationModel,
    AvailableSeats: SeatModel[];
}