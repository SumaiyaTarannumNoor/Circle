import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

const app = express();
app.use(bodyParser.json({ limit: '40mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '40mb', extended: true }))

mongoose
    .connect("mongodb+srv://sumaiyatarannumnoor001:CIRCLEcircleCircle@cluster0.cdxraz7.mongodb.net/Circle?retryWrites=true&w=majority&appName=Cluster0", 
    {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(6000, () => console.log("Running the Destruction...")))