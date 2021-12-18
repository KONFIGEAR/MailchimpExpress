const express = require("express");
const router = express.Router();
const mailController = require("../Controllers/mail.controller");
router.post("", mailController.sendEmail);
router.get("/templates", mailController.getAllTemplates);

module.exports = router;
