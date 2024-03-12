import UserModel from "../Models/userModel";


//Registering a new user
export const registerUser = async(req, res) => {
    const {username, password, firstname, lastname} = req.body;

    const newUser = new UserModel({username, password, firstname, lastname})

    try{

        await newUser.save()
        res.status(200).json(newUser)
        res.json("Registation completed successfully!")

    }catch (error){

        res.status(500).json({message: error.message})

    }
}