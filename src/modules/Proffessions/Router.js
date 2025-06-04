import { Router } from "express";
import { index, show, store, update, destroy } from "./Controller.js";

export const proffessionsRouter = Router();

proffessionsRouter.get("/proffessions", index);
proffessionsRouter.get("/proffessions/:id", show);
proffessionsRouter.post("/proffessions", store);
proffessionsRouter.put("/proffessions/:id", update);
proffessionsRouter.delete("/proffessions/:id", destroy); 
