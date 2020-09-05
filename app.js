const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set('view engine','ejs');                              /*specifying that we are using EJS with express */

app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static("public"));                        /*specifying location of staic files in public folder, explicitly wants express to serve files in public folder */

var items =["Buy Food","Read Books","Excercise"];                                             /*items is an array as we need to save the data that we are adding up in the list */

app.get("/",function(req,res){                                
    var today = new Date();                                

    var options= {                                             /*option is javascript object */
       weekday:"long",
       day:"numeric",
       month:"long"
    }                    
    
    day = today.toLocaleDateString("en-us",options);          /*tolocaleDateString() method for javascript date format */


    res.render("list",{kindofDay:day,newListItems:items});             /*res.render will use the view engine to render a particular page*/          /*Render list and passing javascript object which has a key value pair */
})                                                            /*key value = as defined in .ejs file*/
                                                              /*when rendering list, pass values of all variables , data you want to send back to website, items array being sent back and rendered on website,along with the day itself*/

app.post("/",function(req,res){
    var item = req.body.newItem;

    items.push(item);                                       /*appends or add new item (that is received on every post request) in the array items  */
    res.redirect("/");                                         /*will redirect to home route, app.get("/") for home route and render data on website */
})

app.listen(3000,function(){
    console.log("Server running on port 3000");
})