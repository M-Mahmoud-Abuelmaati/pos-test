import express from "express";
import handler from "./handler";
import validator from "./validator";

const router = express.Router();

router.get("/", handler.words);
router.post("/rank", validator.rank, handler.rank);

export default router;
