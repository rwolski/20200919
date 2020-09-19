/**
 * @swagger
 * 
 * /events/:
 *  get:
 *    description: Return events
 *    produces: 
 *      - application/json
 *    parameters:
 *      - name: stuff
 *        description: stuff
 *        in: stuff
 *        required: false
 *        type: string
 *    responses:
 *      200:
 *        description: results
 */

import express from 'express';
import { getEvents } from '../controllers/event-controller';

const router = express.Router();

router.get('', getEvents);

export default router;