import mongoose from "mongoose";
import express, { Request, Response } from "express";
import { requireAuth, validateReqeust } from "@ydangi/common";
import { body } from "express-validator";

const router = express.Router();

router.get(
  "/api/orders",
  requireAuth,
  [
    body("ticketId")
      .not()
      .isEmpty()
      .custom((input: string) => mongoose.Types.ObjectId.isValid(input))
      .withMessage("TicketId must be provided"),
  ],
  validateReqeust,
  async (req: Request, res: Response) => {
    res.send({});
  }
);

export { router as newOrderRouter };
