import PostModel from "../Models/postModel.js";
import mongoose from "mongoose";

// Create new Post
export const createPost = async(req, res)=>{
    const newPost = new PostModel(req.body)

    try {
        await newPost.save();
        res.status(200).json("You have made a Post!")
    } catch (error) {
        res.status(500).json(error)
    }
}


// Get a Post

export const getPost = async(req, res)=>{
    const id = req.params.id

    try {
        const post = await PostModel.findById(id)
        res.status(200).json(post)
    } catch (error) {
        res.status(500).json(error)
    }
}


// Update a Post

export const updatePost = async(req, res)=>{
    const postId = req.params.id;
    const {userId} = req.body;

    try {
        const post = await PostModel.findById(postId);
        if(post.userId === userId){
            await post.updateOne({$set : req.body});
            res.status(200).json("You have updated your Post!");
        }
        else{
            res.status(403).json("Action Forbidden!");
        }
    } catch (error) {
        res.status(500).json(error);
    }
}


// Delete a Post

export const deletePost = async(req, res) => {
    const id = req.params.id
    const {userId} = req.body
    try {
        
        const post = await PostModel.findById(id)
        if(post.userId === userId){
            await post.deleteOne()
            res.status(200).json("You have deleted your post!")
        }
        else{
            res.status(403).json("Action forbidden!")
        }

    } catch (error) {
        res.status(500).json(error)
    }
}