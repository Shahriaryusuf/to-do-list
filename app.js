const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname+"/date.js")


const app = express(); 
app.set("view engine", "ejs")
app.use(express.static("public"));


app.use(bodyParser.urlencoded({extended:true}));

const items = ["Buy Food","Eat Food","Digest Food"];

const workItems = [];


//get routes
app.get("/",function(req,res){

    let day = date.getDate(); // from date.js
  
    res.render("list", {
        listTitle: day,
        newListItems: items
       
    });
   
});

app.post("/", function(req, res){

     //console.log(req.body);
     let item = req.body.newItem;

     //the logic is here
     if (req.body.list === "Work") {
         workItems.push(item);
         res.redirect("/work");
     }else{
        items.push(item);
   
        res.redirect("/");
     }
    
   

});

app.get("/work", function(req, res){

    res.render("list",{
        listTitle: "Work List", 
        newListItems: workItems

    });

});

app.get("/about", function(req, res){

    res.render("about");
})




app.listen(3000,function(){

    console.log("server running on port 3000");

});






// switch(currentDay){
    //     case 0:
    //         day= "Sunday";
    //         break;
    //         case 1 :
    //             day = "Monday";
    //             break;
    //             case 2:
    //                 day = "Tuesday";
    //                 break;
    //                 case 3:
    //                     day= "Wednesday";
    //                     break;
    //                     case 4 :
    //                         day = "Thursday";
    //                         break;
    //                         case 5:
    //                             day = "Friday";
    //                             break;
    //                             case 6 :
    //                                 day = "Saturday";
    //                                 break;
    //                             default:
    //                                 console.log("something went wrong");
   // }










