const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
require("./db/conn");
const router = require('./routers');

app.use((req, res, next)=> {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.use(express.json());
app.use(router);


app.listen(PORT);
