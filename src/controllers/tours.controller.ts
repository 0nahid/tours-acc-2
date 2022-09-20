import { Request, Response } from "express";
import { TourModel } from "../models/tours.model";

// post data
const createTour = async (req: Request, res: Response) => {
  const tour = new TourModel(req.body);
  try {
    await tour.save();
    res.status(201).json({
      status: "Successfully created tour data",
      data: {
        tour,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};
const GetAllTours = async (req: Request, res: Response) => {
  try {
    const tours = await TourModel.find();
    res.status(200).json({
      status: "success",
      results: tours.length,
      data: {
        tours,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

export const toursRouter = { createTour, GetAllTours };
