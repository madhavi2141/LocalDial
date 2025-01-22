import { comparePassword, hashPassword } from '../helpers/userHelper.js';
import { User } from '../models/usermodel.js';
import jwt from 'jsonwebtoken';

// user register
export const registerController = async (req, res) => {
    try {
        const { name, email, password, favoritePlace } = req.body;

        // Check if the user already exists
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(401).json({
                success: false,
                message: "User already registered",
            });
        }

        // Hash the password
        const hashedPassword = await hashPassword(password)

        // Create a new user
        const newUser = new User({
            name,
            email,
            password: hashedPassword,
            favoritePlace,
        });

        const savedUser = await newUser.save();

        return res.status(201).json({
            success: true,
            message: "User registered successfully",
            user: savedUser
        });
    } catch (error) {
        console.error(error, "Error in user registration");
        return res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
};

// user login
export const loginController = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found",
            });
        }

        const isMatch = await comparePassword(password, user.password);

        if (!isMatch) {
            return res.status(400).json({
                success: false,
                message: "Invalid credentials",
            });
        }

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY, {
            expiresIn: "5d",
        });

        return res.status(200).json({
            success: true,
            message: "Login successful",
            token,
        });
    } catch (error) {
        console.error(error, "Error in user login");
        return res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
};

// user update
export const updateUserController = async (req, res) => {
    try {
        const { id } = req.params; // User ID from the request URL
        const { name, email } = req.body; // Fields to update

        const user = await User.findById(id);

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found",
            });
        }

        if(name) user.name = name;
        if(email) user.email = email;

        await user.save();

        return res.status(200).json({
            success: true,
            message: "User updated successfully",
            user: {
                name: user.name,
                email: user.email
            }
        });
    } catch (error) {
        console.error(error, "Error updating name and email");
        return res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
};

// password reset
export const resetPasswordController = async (req, res) => {
    try {
        const { email, securityAnswer, newPassword } = req.body; // Fields for password reset

        if (!email || !securityAnswer || !newPassword) {
            return res.status(400).json({
                success: false,
                message: "Email, security answer, and new password are required",
            });
        }

        // Find the user by email
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found",
            });
        }

        // Verify the security answer
        if (user.favoritePlace !== securityAnswer) {
            return res.status(400).json({
                success: false,
                message: "Security answer is incorrect",
            });
        }

        // Hash the new password
        const hashedPassword = await bcrypt.hash(newPassword, 10);

        // Update the password
        user.password = hashedPassword;
        await user.save();

        return res.status(200).json({
            success: true,
            message: "Password reset successfully",
        });
    } catch (error) {
        console.error(error, "Error resetting password");
        return res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
};

// Delete user
export const userDeleteController = async (req, res) => {
    try {
        const { id } = req.params;

        const deletedUser = await User.findByIdAndDelete(id);

        if (!deletedUser) {
            return res.status(404).json({
                success: false,
                message: "User not found",
            });
        }

        return res.status(200).json({
            success: true,
            message: "User deleted successfully",
        });
    } catch (error) {
        console.log(error, "error in deleting user");
        return res.status(500).json({
            success: false,
            error: "Internal server error",
        });
    }
};

// Get a single user (exclude password)
export const getUserController = async (req, res) => {
    try {
        const { id } = req.params;

        const user = await User.findById(id, "-password"); // Exclude password

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found",
            });
        }

        return res.status(200).json({
            success: true,
            user,
        });
    } catch (error) {
        console.log(error, "error in fetching user");
        return res.status(500).json({
            success: false,
            error: "Internal server error",
        });
    }
};

// Get all users (exclude passwords)
export const getAllUsersController = async (req, res) => {
    try {
        const users = await User.find({}, "-password"); // Exclude passwords

        return res.status(200).json({
            success: true,
            users,
        });
    } catch (error) {
        console.log(error, "error in fetching all users");
        return res.status(500).json({
            success: false,
            error: "Internal server error",
        });
    }
};