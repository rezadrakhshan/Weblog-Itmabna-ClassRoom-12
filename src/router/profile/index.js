import { Router } from "express";
import Authorzation from "../../middleware/auth.js";
import controller from "./controller.js";
import { upload } from "../../middleware/upload.js";

const router = Router();

router.use(Authorzation);

router.get("/", controller.getProfile);
router.put("/", upload.single("image"), controller.updateProfile);

export default router;
