import { Router } from "express";
import Authorzation from "../../middleware/auth.js";
import controller from "./controller.js";

const router = Router();

router.use(Authorzation)

router.get("/", controller.getProfile);
router.put("/", controller.updateProfile);

export default router;
