const express = require("express");

// express => it is used to create server easily

// server is created 
const app = express();


// GET Method with route /
app.get("/" , function(request , response){
    response.send("<h1>Welcome to My app</h1>");
})


app.listen(4000, function () {
  console.log("App started at port 4000 !!");
});
