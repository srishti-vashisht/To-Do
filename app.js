const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set('view engine','ejs');                              /*specifying that we are using EJS with express */

app.get("/",function(req,res){

    var today = new Date(); 
    var currentDay = today.getDay();
    var day ="";                                /*res.render will use the view engine to render a particular page*/

    if(currentDay===6 || currentDay===0)            /*0 represents Sunday , 6- Saturday*/
    {
        day = "Weekend";
                                         
    }else{                                      
        day = "Weekday";
    }


    res.render("list",{kindofDay:day});                       /*Render list and passing javascript object which has a key value pair */
})                                                            /*key value = as defined in .ejs file*/

app.listen(3000,function(){
    console.log("Server running on port 3000");
})