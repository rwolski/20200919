import EventService from "../data/event-service";
import express from "express";
import EventFilter from "../data/event-query-filter";
import url from 'url';

/**
 * Event API controller
 */
export default class EventController {
    public static getEvents(req: express.Request, res: express.Response): void {
        let filter: EventFilter;
        try {
            const query = url.parse(req.url, true).query;
            filter = new EventFilter(query);
        } catch (err) {
            // Send 400 response with query parsing error
            res.status(400);
            res.statusMessage = err;
            res.send();
            return;
        }

        res.json(EventService.query(filter));
    }

    // Not implemented
    // public static saveEvent(req: express.Request<EventModel>, res: express.Response): void {
    //   res.json(EventService.save(req.params));
    // }

    // Not implemented
    // public static deleteEvent(req: express.Request<EventModel>, res: express.Response): void {
    //   res.json(EventService.delete(req.query.id as string));
    // }
}
