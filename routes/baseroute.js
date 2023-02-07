import { Router } from "express";
import controller from "../api/controller.js";
const router = Router()

router.get('welcome',controller.welcome);



export default router