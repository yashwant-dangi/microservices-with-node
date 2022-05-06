import express from "express";

import { currentUser } from "@ydangi/common";

const router = express.Router();

router.get("/api/users/currentuser", currentUser, (req, res) => {
  res.send({ currentUser: req.currentUser || null });
  // try {
  //   const payload = jwt.verify(req.session.jwt, process.env.JWT_KEY!);
  //   res.send({ currentUser: payload });
  // } catch (error) {
  //   res.send({ currentUser: null });
  // }
});

export { router as currentUserRouter };
