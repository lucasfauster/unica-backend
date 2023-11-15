const express = require("express");
const routes = express.Router();

const ScheduleController = require("./controllers/ScheduleController");

routes
  .get("/schedule", ScheduleController.index)
  .post("/schedule", ScheduleController.create)

module.exports = routes;