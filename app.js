const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();

const PORT = 4000;

app.listen(PORT, () => console.log(`Server running on Port ${PORT}`));
