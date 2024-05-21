require('dotenv').config({path:`${process.cwd()}/.env`});
const express = require('express');
const app = express();
const authRoute = require('./routes/authRoute');

app.get("/", (request, response) => {
  response.status(200).json({
    status: "success",
    message: "hello",
  });
});

//all routes here
app.use('/api/v1/auth',authRoute);

//route not found
app.use('*',(request,response,next)=>{
    response.status(404).json({
        status:false,
        message:'Route not found'
    })
})

const PORT = process.env.APP_PORT || 3000;
app.listen(PORT,function(){
    console.log('server running');
})