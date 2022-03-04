const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
require("./db/conn");
const router = require('./routers');


app.use(express.json());
app.use(router);


app.listen(PORT);
