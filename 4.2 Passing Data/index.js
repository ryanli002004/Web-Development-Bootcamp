import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  const data = {title: "Enter your name"};
res.render("index.ejs", data);
});


app.post("/submit", (req, res) => {
  let nameLength = req.body["fName"].length + req.body["lName"].length ;
  let text = `Your name has ${nameLength} letters`;
  let data = {title:text};
  res.render("index.ejs" ,data);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
 