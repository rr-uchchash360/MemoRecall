import mongoose from 'mongoose';
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

export const updatePost = async (req, res) => {
    const { id: _id } = req.params;
    const post = req.body;

    if (!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(404).send('No post is associated with this id!');
    }

    const updatedPost = await postMessageModel.findByIdAndUpdate(_id, { ...post, _id }, { new: true });
    res.json(updatedPost);
};

export const deletePost = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).send('No post is associated with this id to be deleted!');
    }

    await postMessageModel.findByIdAndRemove(id);

    res.json({ message: 'Congratulations! Post deleted successfully!' });
};