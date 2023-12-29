import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags:[String],
    selectedFile: String,
    likeCount: {
        type: Number,
        default:0
    },
    creationTime: {
        type: Date,
        default: new Date()
    },
});

const postMessageModel = mongoose.model('PostMessageModel', postSchema);

export default postMessageModel;