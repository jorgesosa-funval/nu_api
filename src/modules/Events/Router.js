import { Router } from "express";
import { index, show, store, update, destroy } from "./Controller.js";

export const eventsRouter = Router();

eventsRouter.get("/events", index);
eventsRouter.get("/events/:id", show);
eventsRouter.post("/events", store);
eventsRouter.put("/events/:id", update);
eventsRouter.delete("/events/:id", destroy); 
