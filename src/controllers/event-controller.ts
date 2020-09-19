import events from "../data/events";
import express from "express";

export function getEvents(req: express.Request, res: express.Response): void {
  // Filter the results
  res.json(events);
}
