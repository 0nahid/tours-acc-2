import { Router } from "express";
import { toursRouter } from "../../controllers/tours.controller";
const router: Router = Router();

router.post("/", toursRouter.createTour);

export default router;
