const User = require("../models/User");
const { validationResult } = require('express-validator');
const allUser = async(req,res,next)=>{
    let users;
    try {
        users = await User.find();
    } catch (error) {
        return next(error)
    }
    if(!users){
        return res.status(500).json({
            message:'Internal server error'
        })
    }
    return res.status(200).json(users);
}

const createUser = async (req, res) => {
    // Check for validation errors from express-validator
    const errors = validationResult(req);
    return res.json(errors);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      return res.status(400).json({ errors: errors.array() });
    }
  
    // Try to create and save the user
    try {
      const { name, email, password } = req.body;
      const user = new User({ name, email, password });
      await user.save();
      res.status(201).json({ message: 'User registered successfully' });
    } catch (err) {
      if (err.name === 'ValidationError') {
        // Handle Mongoose validation errors
        const mongooseErrors = Object.values(err.errors).map(error => ({ msg: error.message, param: error.path }));
        return res.status(400).json({ errors: mongooseErrors });
        // return res.status(400).json({success:false,message:Object.values(err.errors)[0].message})
      }
      res.status(500).json({ message: 'Server error' });
    }
  };
  

const updateUser = async(req,res,next)=>{
    const id = req.params.id;
    const { name,email,password,status} = req.body;
    if(!name && !email && !password){
        return res.status(422).json({
            message:'invalid data'
        })
    }
    let user;
    try {
        user = await User.findByIdAndUpdate(id,{name,email,password,status});
    } catch (error) {
        return next(error);
    }
    if(!user){
        return res.status(500).json({
            message:"internal server error"
        });
    }
    return res.status(200).json({message:'updated successfully'})
}

const deleteUser = async(req,res,next)=>{
    const id = req.params.id;
    let user;
    try {
        user = await User.findByIdAndDelete(id);
    } catch (error) {
        return next(error);
    }
    if(!user){
        return res.status(500).json({
            message:"internal server error"
        });
    }
    return res.status(200).json({message:'successfully deleted'})
}

const getUserById = async(req,res,next)=>{
    const id = req.params.id;
    let user;
    try {
        user = await User.findById(id);
    } catch (error) {
        return next(error);
    }
    if(!user){
        return res.status(500).json({
            message:"internal server error"
        });
    }
    return res.status(200).json(user)
}
module.exports = {
    allUser,createUser,updateUser,deleteUser,getUserById
}