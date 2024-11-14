const express = require("express");
const router = express.Router();
const Client = require("../models/client");
const AuthenticationMiddleware = require("../extensions/authentication");

// GET /clients 
router.get("/", AuthenticationMiddleware, async (req, res) => {
  const clients = await Client.find().sort([["firstName", "ascending"]]);
  res.render("clients/index", { title: "Clients List", clients, user: req.user });
});

// GET /clients/add 
router.get("/add", AuthenticationMiddleware, (req, res) => {
  res.render("clients/add", { title: "Add New Client", user: req.user });
});

// POST /clients/add 
router.post("/add", AuthenticationMiddleware, async (req, res) => {
  const newClient = new Client({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    phone: req.body.phone
  });
  await newClient.save();
  res.redirect("/clients");
});

module.exports = router;
