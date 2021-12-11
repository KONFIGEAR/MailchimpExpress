var express = require('express');
var app = express();
var usersRouter = require("./Routes/users.routes")
app.use(express.json())
var variables = require("./Configs/variables")

app.use('/users', usersRouter);

// app.post('/users', function (req, res) {
//     console.log(req.body)
//     res.send('Hello World!');
// });


// app.get('/users/:id', function (req, res) {

//     console.log(req.params.id)
//     res.send(req.params.id);
// });

// app.get('/users', function (req, res) {

//     console.log(req.query)
//     res.send("hello worls");
// });


app.listen(variables.PORT, function () {
    console.log(`Example app listening on port ${variables.PORT}`);
});