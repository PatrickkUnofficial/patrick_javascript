const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "cat.html"));
});


app.get("/api/server/status", (req, res) => {
  res.json({ msg: "Server is up and ready" });
});


app.post("/api/submit-cat", async (req, res) => {
  await main(req.body.catName);
  res.send("Cat submitted successfully!");
});


app.listen(PORT, () => {
  console.log("API is listening on Port:", PORT);
});


async function main(kittenName) {
  await mongoose.connect('mongodb+srv://emmanuelpatrick:Patrickkkk_4@pato.d1thfev.mongodb.net/mydb?retryWrites=true&w=majority');
  const kittySchema = new mongoose.Schema({ name: String });
  const Kitten = mongoose.model('Kitten', kittySchema);
  const kitty1 = new Kitten({ name: kittenName });
  console.log(kitty1.name);
  await kitty1.save();
}