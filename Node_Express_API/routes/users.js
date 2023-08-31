import express from "express";

import {
  createUser,
  deleteUser,
  getAllUsers,
  getSingleUser,
  updateUser,
} from "../controllers/users.js";

const router = express.Router();

// All routes staring with /users
router.get("/", getAllUsers);
router.post("/", createUser);
router.get("/:id", getSingleUser);
router.delete("/:id", deleteUser);
router.patch("/:id", updateUser);

export default router;
