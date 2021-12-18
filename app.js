var express = require("express");
var app = express();
var usersRouter = require("./Routes/users.routes");
var mailRouter = require("./Routes/mail.routes");
app.use(express.json());
var variables = require("./Configs/variables");

app.use("/users", usersRouter);
app.use("/email", mailRouter);


app.listen(variables.PORT, function () {
  console.log(`Example app listening on port ${variables.PORT}`);
});
