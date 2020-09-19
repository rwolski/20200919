import express from "express";
import eventRoutes from "./routes/event-route";
import swaggerRoutes from "./routes/swagger-route";

const app = express();

// Register the routes
app.use("/events", eventRoutes);
app.use("/swagger", swaggerRoutes);

// Start and listen
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Go1 app ready on http://localhost:${port}`);
});

// Handle 404s
app.use((req, res) => {
  res.status(404).send("Not found");
});

module.exports = app;
