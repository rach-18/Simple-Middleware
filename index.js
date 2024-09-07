import express from "express";
import loggingMiddleware from "./loggingMiddleware.js";

const app = express();
app.use(express.json());
const port = 5000;
const hostname = "localhost";

app.use(loggingMiddleware);

app.get("/getRequest", (req, res) => {
    try {
        res.json({message: "Request successful!"});
    }
    catch(err) {
        res.status(500).json({error: "Request was not successful! Try again!"});
    }
});

app.put("/putRequest", (req, res) => {
    try {
        res.json({message: "Request successful!"});
    }
    catch(err) {
        res.status(500).json({error: "Request was not successful! Try again!"});
    }
});

app.post("/postRequest", (req, res) => {
    try {
        res.json({message: "Request successful!"});
    }
    catch(err) {
        res.status(500).json({error: "Request was not successful! Try again!"});
    }
});

app.delete("/deleteRequest", (req, res) => {
    try {
        res.json({message: "Request successful!"});
    }
    catch(err) {
        res.status(500).json({error: "Request was not successful! Try again!"});
    }
});

app.listen(port, hostname, () => {
    console.log("Server started");
});
