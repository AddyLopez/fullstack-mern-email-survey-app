const express = require("express");
require("./services/passport");
const authRoutes = require("./routes/authRoutes");

const PORT = process.env.PORT || 5001;
const app = express();

authRoutes(app);

app.listen(PORT, () => {
  console.log(`Listening on Port ${PORT}`);
});
