import { Router } from "express";
import { toursRouter } from "../../controllers/tours.controller";
import { ViewCount } from "../../middlewares/viewCount";
const router: Router = Router();

// router.post("/", toursRouter.createTour).get("/", toursRouter.GetAllTours);
router
  .route("/tours")
  .post(toursRouter.createTour)
  .get(toursRouter.GetAllTours);
router.route("/tours/:id").get(ViewCount, toursRouter.GetTourById);

export default router;
