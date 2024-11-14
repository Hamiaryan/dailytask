const express = require("express");
const router = express.Router();
const Task = require("../models/task");
const Client = require("../models/client");
const AuthenticationMiddleware = require("../extensions/authentication");

// GET /tasks 
router.get("/",AuthenticationMiddleware, async (req, res) => {
  const tasks = await Task.find({ user: req.user._id }).populate("client").sort([["deadline", "ascending"]]);
  res.render("tasks/index", { title: "Task List", tasks, user: req.user });
});

// GET /tasks/add 
router.get("/add", AuthenticationMiddleware, async (req, res) => {
  const clients = await Client.find().sort([["firstName", "ascending"]]);
  res.render("tasks/add", { title: "Add New Task", clients, user: req.user });
});

// POST /tasks/add 
router.post("/add", AuthenticationMiddleware, async (req, res) => {
  const newTask = new Task({
    description: req.body.description,
    deadline: req.body.deadline,
    client: req.body.client,
    user: req.user._id
  });
  await newTask.save();
  res.redirect("/tasks");
});

// POST /tasks/complete/:id 
router.post("/complete/:id", AuthenticationMiddleware, async (req, res) => {
  await Task.findByIdAndUpdate(req.params.id, { completed: true });
  res.redirect("/tasks");
});

// GET /tasks/delete/:id 
router.get("/delete/:id", AuthenticationMiddleware, async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.redirect("/tasks");
});

module.exports = router;
