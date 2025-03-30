import express from "express";


const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res)=>{
    res.send("Hello from server");
})


app.listen(port, ()=>{
    console.log("Server started at port : " + port);

})