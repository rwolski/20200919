import express from "express";
import swaggerUi from "swagger-ui-express";
import swaggerOptions from "../config/swagger";
import swaggerJsdoc from "swagger-jsdoc";

const specs = swaggerJsdoc(swaggerOptions);

const router = express.Router();

// define routes
router.use("/", swaggerUi.serve);
router.get("/", swaggerUi.setup(specs, { explorer: true }));

export default router;
