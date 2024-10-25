import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import { configDotenv } from 'dotenv';
import cors from 'cors';
import AuthRoute from './Routes/AuthRoute.js';
import UserRoute from './Routes/UserRoute.js';
import PostRoute from './Routes/PostRoute.js';

// Initialize dotenv
configDotenv();

// Create an Express app
const app = express();

// Middleware
app.use(bodyParser.json({ limit: '40mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '40mb', extended: true }));

// CORS configuration
const corsOptions = {
    origin: 'http://localhost:3000', // Your frontend URL
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true, // Allow credentials if needed
};
app.use(cors(corsOptions));

// MongoDB connection
mongoose
    .connect(process.env.MONGO_DB, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}...`));
    })
    .catch((error) => console.error(`Error connecting to MongoDB: ${error}`));

// Route usage
app.use('/auth', AuthRoute);  
app.use('/user', UserRoute);
app.use('/post', PostRoute);
