import express from "express"; 
import PostMessage from "../models/postMessage.js";

const router = express.Router();



export const getPosts = async (req, res) =>{
    // res.send('This works');

    try {
        const postMessages = await PostMessage.find();

        console.log(postMessages);

        res.status(200).json(postMessages)
    } catch (error) {
        res.status(404).json({ message : error.message})
    }
}


export const createPost = async(req, res) =>{
    // res.send('Post Creation.');
    const post = req.body;

    const newPost = new PostMessage(post);
    // const newPostMessage = new PostMessage({ ...post, creator: req.userId, createdAt: new Date().toISOString() })

    try {
        await newPostMessage.save();

        res.status(201).json(newPost );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}