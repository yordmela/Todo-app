import express from "express";
import bodyParser from "body-parser";
import ejs from "ejs";

const app= express();
const port= 3000;

app.use(express.static("public"));
app.set('view engine','ejs');

app.use(bodyParser.urlencoded({extended:true}));

let newItems=[];
let newWorkItem=[];
let newHabit=[];
// app.get("/",(req, res)=>{
    
// });



app.get("/",(req,res)=>{
  
    // let options={weekday:'long', year:'numeric', month:'long', day:'numeric'};
    // let today= new Date();
    // let day= today.toLocaleDateString("en-US", options);
    res.render("welcom");
});

app.get("/today",(req,res)=>{
    let options={weekday:'long', year:'numeric', month:'long', day:'numeric'};
    let today= new Date();
    let day= today.toLocaleDateString("en-US", options);
    res.render("dayList",{
        KindOFDay:day,
        newListItems: newItems
    });
});

app.get("/work",(req, res)=>{
    res.render("workList.ejs", {
        newWorkItems:newWorkItem
    });
});

app.get("/habit",(req, res)=>{
    res.render("habit.ejs",{
        newHabits:newHabit
    });
});

app.post("/dayList",(req,res)=>{
    let newItem= req.body.newItem;
    newItems.push(newItem);
    res.redirect('/today');
})

app.post("/workList",(req,res)=>{
    let newItem2= req.body.newItem2;
    newWorkItem.push(newItem2);
    res.redirect("/work");
})

app.post("/habitList",(req,res)=>{
    let newItem3= req.body.newItem3;
    newHabit.push(newItem3);
    res.redirect("/habit");
})



app.listen(port, ()=>{
    console.log(`Listening on port ${port}`);
})
