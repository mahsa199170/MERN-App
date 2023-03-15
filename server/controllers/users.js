import UserModel from "../models/Users.js";


// this function is for retreieving data from database using .find() method

export const  getUsers = async (req,res) => {
    try { 

        const userdata = await UserModel.find();

        // now we need our function return something
        res.status(200).json(userdata);

    } catch(error) {
        res.status(404).json({message: error.message});
    }
}

// implement logic for adding different users( creation of new users in the database.)

export const createUsers = async (req,res) => {


    const user = req.body;
  
    const newUser = new UserModel(user);
    try {
        await newUser.save();

        res.status(201).json(newUser);
    } catch (error) {
        res.status(409).json({message: error.message});
        
    }
}