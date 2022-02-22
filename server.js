const express = require("express");
const { getIds, mapOverIds } = require("./index");
// const routes = require("./routes");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
mapOverIds();
// app.use(routes);
app.get("/ids/valid", (req, res) => {
  const ids = getIds();

  res.send(JSON.stringify(ids.validIds));
});

app.get("/ids/number", (req, res) => {
  const ids = getIds();

  res.send(JSON.stringify(ids.numberIds));
});

app.get("/ids/letter", (req, res) => {
  const ids = getIds();

  res.send(JSON.stringify(ids.letterIds));
});

app.get("/ids/invalid", (req, res) => {
  const ids = getIds();

  res.send(JSON.stringify(ids.invalidIds));
});
app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
