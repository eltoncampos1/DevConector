const exprees = require("express");
const connectDB = require("../config/db");

const app = exprees();

connectDB();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`server start on por ${PORT}`);
});
