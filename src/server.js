const exprees = require("express");
const connectDB = require("../config/db");

const router = require("./routes");

connectDB();
const app = exprees();
app.use(router);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`server start on por ${PORT}`);
});
