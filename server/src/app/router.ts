import express from "express";
import pos from "./pos/router";

const router = express.Router();

// Part Of Speech API
router.use("/pos", pos);

export default router;
