import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    favoritePlace: {
        type: String, // Stores the user's answer to the question
        required: true, // Make this required if necessary
    },
});

export const User = mongoose.model("User", userSchema);
