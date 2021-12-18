var mailService = require("../Services/mail.service");

const sendEmail =async (req, res) => {
  const response = await mailService.sendEmail(req.body);

  return res.sendStatus(response);
};

const getAllTemplates = async (req, res) => {
  const response = await mailService.getAllTemplates();
  return res.send(response);
};

module.exports = {
  sendEmail,
  getAllTemplates,
};
