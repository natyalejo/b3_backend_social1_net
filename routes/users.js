import {Router} from "express";
import { testUser, register } from "../controllers/user.js";

const router = Router();


router.get ('/test-user', testUser);
router.post('/register', register);


export default router;


