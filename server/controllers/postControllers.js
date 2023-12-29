import postMessageModel from '../models/postMessageModel.js';

export const getPosts =  async (req, res) => {
    try {
        const postMessage = await postMessageModel.find();
        res.status(200).json(postMessage);
    }
    catch(error) {
        res.status(404).json({ message: error.message })
    }
}

export const createPost = async (req, res) => {
    const post = req.body;
    const newPost = new postMessageModel(post)

    try {
        await newPost.save();
        res.status(201).json(newPost);
    }
    catch (error) {
        res.status(409).json({ message: error.message });
    }
}