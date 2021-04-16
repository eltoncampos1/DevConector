const exprees = require("express");

const app = exprees();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`server start on por ${PORT}`);
});
