import UserModel from "../Models/userModel.js";
import bcrypt from 'bcrypt'

//Registering a new user
export const registerUser = async(req, res) => {
    const {username, password, firstname, lastname} = req.body;

    const salt = await bcrypt.genSalt(16)
    const hashedPassword = await bcrypt.hash(password, salt)

    const newUser = new UserModel({
        username, 
        password: hashedPassword, 
        firstname, 
        lastname})

    try{

        await newUser.save()
        res.status(200).json(newUser)
        res.json("Registation completed successfully!")

    }catch (error){

        res.status(500).json({message: error.message})

    }
}