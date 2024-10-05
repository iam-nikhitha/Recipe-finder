import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import path from 'path';
import { fileURLToPath } from 'url';

// Create __dirname equivalent in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config(); // Load environment variables

// Import routes
import { UserRouter } from './routes/User.js';

const app = express();

// Middleware setup
app.use(express.json());
app.use(cors({
    origin: ["http://localhost:5173"], // Allow requests from frontend
    credentials: true // Allow credentials (cookies, headers, etc.)
}));
app.use(cookieParser());

// Serve static files from client directory
app.use(express.static(path.join(__dirname, '../client')));

// Routes
app.use('/auth', UserRouter);

// Suppress Mongoose deprecation warning for `strictQuery`
mongoose.set('strictQuery', false); // Set this to false or true depending on your needs

// Connect to MongoDB
const mongoUrl = process.env.MONGO_URL || 'mongodb://127.0.0.1:27017/authentication';
mongoose.connect(mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Failed to connect to MongoDB:', err));

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
