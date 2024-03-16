const express = require("express");
const ConnectToDB = require("./DB/DB_Connect.jsx"); // Assuming this is a regular JavaScript file
const User = require("./Models/User.js"); // Assuming this is a regular JavaScript file
const createUserRoute = require("./Routes/CreateUser.jsx"); // Assuming this is a regular JavaScript file
const app = express();
const port = 5000;

ConnectToDB();

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173"); 
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});


app.get('/', (req, res) => {
    res.send("Hello from server");
});

app.use(express.json());

app.use('/api', createUserRoute);

app.listen(port, () => {
    console.log("Server is listening");
});
