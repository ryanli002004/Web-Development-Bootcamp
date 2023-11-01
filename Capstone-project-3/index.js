import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
app.use(express.static("public"));

let myList = [];

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/",(req,res)=>{
  res.render("index.ejs",{myList:myList});
});

app.post("/add", (req,res)=>{
  myList.push(req.body.addToDo);
  console.log(req.body)
  res.redirect("/");
});

app.post("/remove",(req,res)=>{
  console.log(req.body);
  let index = myList.indexOf(req.body.removeToDo);
  delete myList[index];
  res.redirect("/");
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
  