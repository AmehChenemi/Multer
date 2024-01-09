const express = require ('express')
const studentRouter = require('./routes/router')
require('./config/config.js')

const port = process.env.port

const app=express()
app.use(express.json())

app.use('/uploads', express.static('uploads'))

app.use('/api/v1/user',studentRouter)



app.listen(port,()=>{
   console.log(`Server is listening on port:${port}`);
})