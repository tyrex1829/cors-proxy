import express from "express";
import env from "dotenv";
env.config();

const app = express();
const port = process.env.PORT || 3000;

console.log(port);

app.get("/", (req, res) => {
  res.send("landing page");
});

app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "Joke 1",
      content: "This is joke 1",
    },
    {
      id: 2,
      title: "Joke 2",
      content: "This is joke 2",
    },
    {
      id: 3,
      title: "Joke 3",
      content: "This is joke 3",
    },
    {
      id: 4,
      title: "Joke 4",
      content: "This is joke 4",
    },
    {
      id: 5,
      title: "Joke 5",
      content: "This is joke 5",
    },
    {
      id: 6,
      title: "Joke 6",
      content: "This is joke 6",
    },
  ];

  res.status(200).json(jokes);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
