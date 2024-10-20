import express from "express";
import env from "dotenv";
env.config();

const app = express();
const port = process.env.PORT || 3000;

console.log(port);

app.get("/", (req, res) => {
  console.log("Landing Page");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
