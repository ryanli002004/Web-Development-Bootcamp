import express from "express";
const app = express();
const PORT = 3000;

app.get("/",(req,res) => {
    res.send("home")
});

app.get("/about",(req,res)=>{
    res.send("about")
})

app.get("/contact",(req,res)=>{
    res.send("no dont contact me")
})

app.listen(PORT,() => {
    console.log(`server running on port ${PORT}`);
});