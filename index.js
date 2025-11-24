const express = require("express");
require("./services/passport");

const PORT = process.env.PORT || 5001;
const app = express();

require("./routes/authRoutes")(app); // Require in this module and call its function with app as its argument

app.listen(PORT, () => {
  console.log(`Listening on Port ${PORT}`);
});
