import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import { configDotenv } from 'dotenv';
import AuthRoute from './Routes/AuthRoute.js'

//Rotes
const app = express();



//Middleware
app.use(bodyParser.json({ limit: '40mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '40mb', extended: true }))

configDotenv()

mongoose
    .connect(process.env.MONGO_DB)
    // {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(process.env.PORT, () => console.log(`Running the Destruction at ${process.env.PORT}...`)))
    // .catch((error) => console.log(`Unable to run the Destruction at ${process.env.PORT}`));


//usage of routes 
app.use('/auth', AuthRoute)   
