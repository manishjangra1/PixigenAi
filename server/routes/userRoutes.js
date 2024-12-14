import express from "express";
import {
  paymentRazorpay,
  registerUser,
  signInUser,
  userCredits,
  verifyRazorpay,
} from "../controllers/userController.js";
import userAuth from "../middlewares/auth.js";

const userRouter = express.Router();

userRouter.post("/register", registerUser);
userRouter.post("/signIn", signInUser);
userRouter.get("/credits", userAuth, userCredits);
userRouter.post("/pay-razor", userAuth, paymentRazorpay);
userRouter.post("/verify-razor", verifyRazorpay);

export default userRouter;
