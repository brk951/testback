const express = require("express");
const {
  getAll,
  createTask,
  updateTask,
  deleteTask,
} = require("../controllers/post.controller");
const router = express.Router();

//definition du comportement a adopter selon le type de requete
router.get("/", getAll);
router.post("/", createTask);
router.put("/:id", updateTask);
router.delete("/:id", deleteTask);


module.exports = router;