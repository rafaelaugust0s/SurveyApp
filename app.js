const mongoose= require('mongoose')
const bodyParser= require('body-parser')
const express = require('express')
const app=express()
const port = 4000

const customerRoutes= require('./Routes/customer')

app.use(bodyParser.json())
app.use('/api/customers',customerRoutes)



 mongoose.connect( 'mongodb+srv://rafaelaugustos:12345Survey@cluster0.vsydf.mongodb.net/SurveyApp?retryWrites=true&w=majority',
     { useNewUrlParser: true,  useUnifiedTopology: true  })

.then(()=> {
    app.listen(port, () => {
        console.log("development server start on port" + port)
    })
}).catch(()=>{
    console.log('unable to connect to BD!')
 })