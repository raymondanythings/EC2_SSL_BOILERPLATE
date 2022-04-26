import express from "express";
import cors from "cors";
const app = express();
const PORT = 4000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

let data = [
  {
    id: 1,
    title: "He",
    description: "gnldf",
    userName: "erer",
  },
  {
    id: 2,
    title: "He",
    description: "gnldf",
    userName: "erer",
  },
  {
    id: 3,
    title: "He",
    description: "gnldf",
    userName: "erer",
  },
  {
    id: 4,
    title: "He",
    description: "gnldf",
    userName: "erer",
  },
];
app.get("/", (req, res) => {
  res.json(data);
});

app.post("/", (req, res) => {
  const { title, description, userName } = req.body;

  data.push({ id: data.length + 1, title, description, userName });

  return res.json({ ok: true });
});

app.listen(PORT, () => console.log("Server Running on", PORT));
