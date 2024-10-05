import mongoose from 'mongoose';

// Define the schema for User
const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

// Export the model
const User = mongoose.model('User', userSchema);

export { User };
