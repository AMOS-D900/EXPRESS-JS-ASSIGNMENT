const express= require('express')

const app= express()

port= 5000

app.get('/' , (request , response)=>{
    response.send("Welcome to Express Server.")
})

app.get('/dashboard', (req,res)=>{
    res.send("This is your dashboard.")
})

app.get('/blog', (req,res)=>{
    res.send("This is my blog.")
})

app.listen(port, ()=>{
    console.log("App is running successfully.")
})

