const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.get("/",function(req,res){

    var today = new Date();

    if(today.getDay()==6 || today.getDay()==0)            /*0 represents Sunday , 6- Saturday*/
    {
        res.send("Yay!!,it's the weekend");
    }else{
        res.send("I need to work");
    }
})

app.listen(3000,function(){
    console.log("Server running on port 3000");
})