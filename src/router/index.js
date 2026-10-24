import { Router } from "express";
import auth from "./auth/index.js";
import profile from "./profile/index.js";

import { SendOtpValidation } from "./auth/validation.js";
import validationData from "../middleware/validation.js";

const router = Router();


router.use("/auth", SendOtpValidation, auth);
router.use("/profile", profile);

export default router;
