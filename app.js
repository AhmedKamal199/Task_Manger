const express = require('express');
const app = express();
const tasks = require('./routes/tasks');
const notFound = require('./middleware/not-found')
const errorHandler = require('./error/error-handler')

app.use(express.static('./public'))
require('dotenv').config();
const connectDB = require('./db/connections');
app.use(express.json());
// routes 
app.get('/hello', (req,res)=>{
    res.send("Hello AKM");
})

// middlewares
app.use('/api/v1/tasks', tasks)
app.use(notFound)
app.use(errorHandler)
 
const port = 3000;

const start = async()=>{
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`The server is listening on port ${port}`));
    } catch (error) {
        console.log(error) 
    }
}

start();
