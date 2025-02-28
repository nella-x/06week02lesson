const express = require("express");
const app = express();
const cors = require("cors");

const corsOptions = {
  origin: ["http://localhost:5173"],
};

app.use(cors(corsOptions));

const greekGods = [
  { name: "Zeus", domain: "Sky", symbol: "Thunderbolt" },
  { name: "Hera", domain: "Marriage", symbol: "Peacock" },
  { name: "Poseidon", domain: "Sea", symbol: "Trident" },
  { name: "Athena", domain: "Wisdom", symbol: "Owl" },
  { name: "Apollo", domain: "Sun", symbol: "Lyre" },
  { name: "Artemis", domain: "Hunt", symbol: "Bow and Arrow" },
];

app.get("/api/gods", (req, res) => {
  res.json({ gods: greekGods });
});

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
