import mongoose from 'mongoose';
import UserModel from "../Models/userModel.js";
import userModel from "../Models/userModel.js";
import bcrypt from 'bcrypt';


//get a user from database

export const getUser = async (req, res) => {
    const id = req.params.id;

    try { 
        const user = await userModel.findById(id);

        if(user){
            
            const {password, ...otherDetails} = user._doc

            res.status(200).json(otherDetails)
        }
        else{
            res.status(404).json("No such user exists.")
        }
        
    } catch (error) {
        res.status(500).json(error)
    }
};


// Update User

export const updateUser = async(req, res) => {
    const id = req.params.id
    const {currentUserId, currentUserAdminStatus, password} = req.body

    if(id===currentUserId || currentUserAdminStatus){

        try {
            
            if(password){
                const salt = await bcrypt.genSalt(16);  
                req.body.password = await bcrypt.hash(password, salt);
            }

            const user = await UserModel.findByIdAndUpdate(id, req.body, {new: true})

            res.status(200).json(user)

        } catch (error) {
            
            res.status(500).json(error);

        }
    }
    else{
        res.status(403).json("Access Denied! You can only update your own Profile.")
    }
};


//Delete User
export const deleteUser = async (req, res) => {
    const id  = req.params.id

    const {currentUserId, currentUserAdminStatus} = req.body

    if(currentUserId === id || currentUserAdminStatus)
    {
        try {
            
            await UserModel.findByIdAndDelete(id)
            res.status(200).json("User deleted successfully.")

        } catch (error) {
            res.status(500).json(error);
        }
    }
    else{
        res.status(403).json("Access Denied! You can only delete your own Profile.")
    }
}


//Follow a User
export const followUser = async(req, res) => {
    const id = req.params.id;
    
     const {currentUserId} = req.body;
     
     if (currentUserId === id)
     {
        res.status(403).json("Action forbidden.")
     }
     else{
        try {
            const followUser = await UserModel.findById(id)
            const followingUser = await UserModel.findById(currentUserId)

            if(!followUser.followers.includes(currentUserId))
            {
                await followUser.updateOne({$push : {followers: currentUserId}});
                await followingUser.updateOne({$push : {following: id}});
                res.status(200).json("You have started to follow THIS USER.");
            }
            else
            {
                res.status(403).json("Stop being nosy! You are already following them around.")
            }

        } catch (error) {
            res.status(500).json(error);
        }
     } 
};


// UnFollow a User
export const unfollowUser = async(req, res) => {
    const id = req.params.id;
    
     const {currentUserId} = req.body;
     
     if (currentUserId === id)
     {
        res.status(403).json("Action forbidden.")
     }
     else{
        try {
            const followUser = await UserModel.findById(id)
            const followingUser = await UserModel.findById(currentUserId)

            if(followUser.followers.includes(currentUserId))
            {
                await followUser.updateOne({$pull : {followers: currentUserId}})
                await followingUser.updateOne({$pull : {following: id}})
                res.status(200).json("You GOT RID OF THIS USER.")
            }
            else
            {
                res.status(403).json("This User is not Followed by You.")
            }

        } catch (error) {
            res.status(500).json(error);
        }
     } 
};