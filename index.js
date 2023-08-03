const express = require("express");
const connectDB = require("./db");
const authRouter = require("./routes/auth");

const PORT = 3337;
const app = express();
app.use(express.json());

(async () => {
  const app = await connectDB();

  // Define the route for the root path "/"
  app.get("/", (req, res) => {
    res.send("Welcome to the API!");
  });

  // Mount the authRouter on '/api/auth' path
  app.use('/api/auth', authRouter);

  app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
  });
})();
