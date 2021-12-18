const { json } = require("express/lib/response");
const variables = require("../Configs/variables");
const mailchimpTx = require("@mailchimp/mailchimp_transactional")(
  variables.MANDRILL_API_KEY
);

const getAllTemplates = async () => {
  const response = await mailchimpTx.templates.list();
  return response;
};

const checkIfTemplateExists = async (name) => {
  try {
    const response = await mailchimpTx.templates.info({ name: name });
    if (response && response.response && response.response.status === 500)
      return false;
    return true;
  } catch (e) {
    return false;
  }
};
const sendEmail = async (data) => {
  const {
    from_email,
    subject,
    receiver_email,
    template_name,
    template_content,
  } = data;

  const chechTemplate = await checkIfTemplateExists(template_name);
  if (!chechTemplate) return 404;
  /*
  from_email:sender email,
  subject: subject,
  to : email
  template_name: template_name
  template_content :array of objects {name:"mc:edit ", content:"content to put in the editable field"}
  
  */
  const message = {
    from_email: from_email,
    subject: subject,
    // text: "Welcome to Mailchimp Transactional!",
    to: [{ email: receiver_email, to: "to" }],
  };

  try {
    // await mailchimpTx.messages.sendTemplate({
    //   template_name: template_name,
    //   template_content: template_content,
    //   message: message,
    // });
    return 200;
  } catch (e) {
    return 500;
  }

  // const response = await mailchimpTx.users.ping();
  // const response = await mailchimpTx.messages.send({
  //     message
  //   });

  // const response = await mailchimpTx.templates.list();
  // if (response && response.length) {
  //   response.forEach((item) => {
  //     console.log(item.name);
  //   });
  // }

  // const response = await mailchimpTx.messages.sendTemplate({
  //   template_name: "test-email",
  //   template_content: [{ name: "name", content: "Yassine" }],
  //   message: message,
  // });

  // console.log(response);
};

module.exports = {
  sendEmail,
  getAllTemplates,
};
