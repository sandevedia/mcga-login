const express = require('express');
const cors = require('cors');
const bodyParse = require('body-parser');


const myUser = {
    email: "santiagoalarcon2@hotmail.com",
    password: "123456"
}

const app = express();

app.use(bodyParse.json())

app.get('/',(req, res)=>{
    res.status(200).send("Server working!"); 
})

app.listen(4000, ()=>{
    console.log("Server working ok localhost:4000");
});

app.post("/login", (req, res)=>{
    if(!req.body.email){
       return res.status(400).send({
            succes: false,
            message: "Email is required"
        })
    }
    if((req.body.email !== myUser.email) || (req.body.password !== myUser.password)){
        return res.status(400).send({
            succes: false,
            message: "Email is required"
        })
    }
   return res.status(200).send({
        succes: true,
        user: myUser,
        message: "server working"
   });
})
