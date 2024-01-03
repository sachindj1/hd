const express= reuqire("express");
const app= express();

app.get("/", ()=>{
res.send("hello world 123 !!!");


})

// post api
app.post("/userpost", ()=>{
    res.send("hello world 123 !!!");
    
    
    })

app.listen(5000, ()=>{
console.log("app is listening on port 5000")

})
