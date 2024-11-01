import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import { config as dotenvConfig } from 'dotenv';
import cors from 'cors';
import AuthRoute from './Routes/AuthRoute.js';
import UserRoute from './Routes/UserRoute.js';
import PostRoute from './Routes/PostRoute.js';

// Initialize dotenv
dotenvConfig();

// Create an Express app
const app = express();

// Middleware
app.use(bodyParser.json({ limit: '40mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '40mb', extended: true }));
app.use(cors({ origin: "http://localhost:3000" })); // Specify frontend origin

// Static file serving
app.use(express.static('public')); 
app.use('/images', express.static('images'));

// Environment variables
const PORT = process.env.PORT || 5000;
const CONNECTION = process.env.MONGO_DB;

// MongoDB connection
mongoose
    .connect(CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        app.listen(PORT, () => console.log(`Server running on port ${PORT}...`));
    })
    .catch((error) => console.error(`Error connecting to MongoDB: ${error.message}`));

// Route usage
app.use('/auth', AuthRoute);  
app.use('/user', UserRoute);
app.use('/post', PostRoute);
