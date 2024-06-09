const http = require("http")
const fs = require("fs")
const url = require("url")
const express = require("express")

const app = express()

app.get('/',(req,res)=>{
    return res.send("HOME PAGE")
})

app.get('/about',(req,res)=>{
    return res.send("ABOUT US "+`${req.query.name}`)
})

// app.post('/about',(req,res)=>{
//     return res.send("U ARE "+req.query.name+"OLD")
// })


app.listen(7000,()=>console.log("SERVER STARTED"))//=> we can use this method instead of the http methods below

// const server2 = http.createServer(app)
// server2.listen(7000,()=>console.log("SERVER STARTED"))

//versioning:
/*
version = 4.18.2

1stpart=4
2ndpart=18 ->
3rdpart=2 ->minor fixes(Optional)




*/
