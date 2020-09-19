import EventService from "../data/event-service";
import express from "express";
import { EventFilter } from "../data/event-filter";

export default class EventController {
  public static getEvents(req: express.Request, res: express.Response): void {
    let filter: EventFilter;
    try {
      filter = new EventFilter(req.query);
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
