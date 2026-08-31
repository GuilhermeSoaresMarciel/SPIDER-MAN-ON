import express from "express";

const app = express();

app.use(express.json());

const list_comments = [];

app.get("/comments", (req, res) => {
  res.send(list_comments);
});

app.post("/comments", (req, res) => {
  const { comment } = req.body;

  list_comments.splice(0, 0, comment);

  res.send(list_comments);
});

app.listen(3000);
