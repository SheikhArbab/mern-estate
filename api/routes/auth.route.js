import { signUp } from "../controllers/auth.controller.js";
import express from 'express'
const router = express.Router()

router.route('/signup').post(signUp)








export default router