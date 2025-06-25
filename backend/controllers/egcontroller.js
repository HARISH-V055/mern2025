const user = require('../Models/userModels');
const bcrypt = require('bcryptjs');

exports.getRoute = async (req, res) => {
    try {
        const userData = await user.find();
        res.status(200).json({ data: userData });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.SignupRoute = async (req, res) => {
    try {
        const { username, password } = req.body;
        const exist = await user.findOne({ username });
        if (exist) return res.status(401).json({ message: "User already exist" });

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new user({ username, password: hashedPassword });
        await newUser.save();
        res.status(201).json({ user: newUser });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
exports.loginRoute = async (req, res) => {
    const { username, password } = req.body;
            const exist = await user.findOne({ username });
        if (!exist) return res.status(401).json({ message: "User not found" });
        const valid=await bcrypt.compare(password, exist.password);
        if (!valid) return res.status(401).json({ message: "Invalid password"   });
        res.status(200).json({ message: "Login successful", user: exist });
}

exports.putRoute = async (req, res) => {
    try {
        const update = await user.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!update) return res.status(404).json({ message: "User not found" });
        res.status(200).json({ update });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.deleteRoute = async (req, res) => { 
    try {
        const deleteData = await user.findByIdAndDelete(req.params.id);
        if (!deleteData) return res.status(404).json({ message: "User not found" });
        res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};