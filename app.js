const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const exphbs = require('express-handlebars')
const indexRouter = require('./router/indexRouter')
const userRouter = require('./router/userRouter')

const app = express()

// Handlebars 
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// body parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Set Static folder
app.use(express.static(path.join(__dirname,'public')))

// // routes
app.use('/',indexRouter)
app.use('/users',userRouter)


const port = process.env.PORT || 3000
app.listen(port,() =>{
    console.log(`server started at : ${port}`)
})