import express from "express"
import { addSchools, listSchools } from "../controllers/schoolControllers.js"

const router = express.Router()

router.get("/listSchools", listSchools)
router.post("/addSchools", addSchools)

export default router