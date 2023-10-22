import { test } from "../controllers/user.controller.js";
import User from "../models/user.model.js";
import express from 'express'
const router = express.Router()

router.route('/').get(test)








export default router