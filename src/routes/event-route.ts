/**
 * @swagger
 *
 * /events:
 *  get:
 *    description: Returns a list of events in the system
 *    produces:
 *      - application/json
 *    parameters:
 *      - name: search
 *        description: Filter events by partial title or description
 *        in: query
 *        required: false
 *        type: string
 *      - name: city
 *        description: Filter events by city
 *        in: query
 *        required: false
 *        type: string
 *      - name: state
 *        description: Filter events by state
 *        in: query
 *        required: false
 *        type: string
 *      - name: country
 *        description: Filter events by country
 *        in: query
 *        required: false
 *        type: string
 *      - name: startDate
 *        description: Filter events that fall on or after this date
 *        in: query
 *        required: false
 *        type: string
 *      - name: endDate
 *        description: Filter events that fall on or before this date
 *        in: query
 *        required: false
 *        type: string
 *    responses:
 *      200:
 *        description: event results
 *      400:
 *        description: filter error
 */

import express from "express";
import EventController from "../controllers/event-controller";

const router = express.Router();

router.get("", EventController.getEvents);

// TODO: Add support for save/delete operations
// router.post('', EventController.saveEvent);
// router.delete('', EventController.deleteEvent);

export default router;
