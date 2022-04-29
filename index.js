const express = require("express");
const app = express();

app.listen(8888, () => {
    console.log("Server running on port 8888");
});

const db = {
    ivo: {
        name: 'Ivo'
    }
};

app.get('/', (req,res) => {
    res.sendfile("index.html");
});

app.get("/api/accounts", (req, res, next) => {
    res.json(Object.keys(db));
});

app.get("/api/account/:id", (req, res, next) => {
    res.json(db[req.params.id]);
});

app.post("/api/account/:id", (req, res, next) => {
    db[req.params.id] = req.body;
    res.json(req.body);
});

app.delete("/api/account/:id", (req, res, next) => {
    delete db[req.params.id];
    res.json(req.params.id);
});
