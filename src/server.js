const express = require("express");
const connectDB = require("../config/db");

const app = express();
const router = require("./routes");

connectDB();
app.use(express.json());
app.use(router);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`server start on por ${PORT}`);
});
