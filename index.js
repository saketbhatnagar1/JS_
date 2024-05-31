const path = require("path")
const express = require("express")
const multer = require("multer") 

const app = express()
const PORT = 8000

//we created an instance of upload,frontend upload files to be uploaded in tha uploads folder
//upload is an middleware
const upload = multer({dest:"uploads/"})

app.set("view engine","ejs")
app.set("views",path.resolve("./views"))

app.use(express.urlencoded({extended:false})) //middleware that helps in parsing url data

app.get("/",(req,res)=>{

    return res.render("homepage")
})



app.post("/upload",upload.single('profileImage'),(req,res)=>{           //upload
    console.log(req.body)
    console.log(req.file)

    return res.redirect("/")
})










app.listen(PORT,()=>console.log("SERVER STARTED AT PORT 8000"))