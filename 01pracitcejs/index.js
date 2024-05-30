//we re require http server
const http = require("http")
//create a http server and add req and res object
const fs = require("fs")
const server = http.createServer((req,res)=>{
//create server contains a promise that gets a req and response

const url = require("url")


console.log(req.url)
if(req.url === "/"){
res.end("/clicked")                                                        //if ew made a req,then we must get a response,res.end signifies the response to http methods
                                                                           //res.METHOD() => there are multiple methods that reutrn diffrent things to response
                                                                           //this is mandatory
}

else if(req.url=== "/about")
{
    res.end("")                                          //this method used to render the about page
}
  
});

//routing: using url




server.listen(8000,console.log("server started"))//listens to the server request,this could be either port numbers or urls

//http methods get - > used to fetch data
//post request - > used to updte page and send some data
//patch is used to change some data
//delete - used to delete some request

//express js:
//server not using express server suffers from:
//we need to handle everythign with diffrent funtions and packages for every backend 
