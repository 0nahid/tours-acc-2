import { Request, Response } from "express";

// post data
const createTour = async (req: Request, res: Response) => {
  res.send("It's working! Yayyy");
};

export const toursRouter = { createTour };
