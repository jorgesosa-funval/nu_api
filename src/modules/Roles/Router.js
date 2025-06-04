import { Router } from "express";
import { index, show } from "./Controller.js";

export const rolesRouter = Router();

rolesRouter.get("/roles", index);
rolesRouter.get("/roles/:id", show);
