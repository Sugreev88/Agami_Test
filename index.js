const express = require("express");
require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 3000;
const dbUtils = require("./utils/dbUtils");
dbUtils.connectDb();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(PORT, () => {
  console.log(`listening on port:${PORT}`);
});
