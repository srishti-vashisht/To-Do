const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname +"/date.js");                               /*date module is local and not installed through npm , therefore require in this way */

const app = express();

app.set('view engine','ejs');                              /*specifying that we are using EJS with express */

app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static("public"));                        /*specifying location of staic files in public folder, explicitly wants express to serve files in public folder */

let items =["Buy Food","Read Books","Excercise"];                                             /*items is an array as we need to save the data that we are adding up in the list */
let workItems =[];

app.get("/",function(req,res){                                
    
    let day = date.getDate();
    // let day = date.getDay();

    res.render("list",{listTitle:day,newListItems:items});             /*res.render will use the view engine to render a particular page*/          /*Render list and passing javascript object which has a key value pair */
})                                                            /*key value = as defined in .ejs file*/
                                                              /*when rendering list, pass values of all variables , data you want to send back to website, items array being sent back and rendered on website,along with the day itself*/

app.get("/work",function(req,res){
    res.render("list",{listTitle:"Work List",newListItems:workItems});
})

app.post("/work",function(req,res){
    let item = req.body.newItem;
    workItems.push(item);
    res.redirect("/work");
})

app.post("/",function(req,res){
     let item = req.body.newItem;

    if(req.body.list==="Work List"){                                /*checks in the list that the new item came from was from the worklist and if it was then we're going to add that data item to the work items array */
        workItems.push(item);
        res.redirect("/work");
    }
    else{

        items.push(item);                                       /*appends or add new item (that is received on every post request) in the array items  */
        res.redirect("/");                                         /*will redirect to home route, app.get("/") for home route and render data on website */
        
    }

    
})

app.listen(3000,function(){
    console.log("Server running on port 3000");
})