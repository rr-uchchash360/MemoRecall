import React, { useState, useEffect } from "react";
import useStyles from './formStyles';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';
// import { createPost } from "../../api";
import { createPost, updatePost } from '../../actions/posts';

const Form = ({ currentId, setCurrentId }) => {
    const styleClasses = useStyles();
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.posts); // Assuming you meant to select 'posts' from the Redux state.

    const post = currentId ? posts.find((p) => p._id === currentId) : null;

    useEffect(() => {
        if (post) setPostData(post);
    }, [post]);

    const handleSubmit = (e) => {
        e.preventDefault(); // Use e.preventDefault() instead of e.preventDefaults()

        if (currentId) {
            dispatch(updatePost(currentId, postData));
        } else {
            dispatch(createPost(postData));
        }
    }

    const clear = () => {
         
    }

    const [postData, setPostData] = useState({ creator: '', title: '', message: '', tags: '', selectedFile: '' });

    return (
        <Paper className={styleClasses.paper}>
            <form autoComplete="off" noValidate className={`${styleClasses.root} ${styleClasses.form}`} onSubmit={handleSubmit}>
            <Typography variant="h6"> Create your Memory</Typography>
            <TextField
                id="creator"
                name="creator"
                variant="outlined"
                label="Creator"
                fullWidth
                value={postData.creator}
                onChange={(e) => setPostData({ ...postData, creator: e.target.value })}
                />

            <TextField
                id="title"
                name="title"
                variant="outlined"
                label="Title"
                fullWidth
                value={postData.title}
                onChange={(e) => setPostData({ ...postData, title: e.target.value })}
            />
            <TextField
                id="message"
                name="message"
                variant="outlined"
                label="Message"
                fullWidth
                value={postData.message}
                onChange={(e) => setPostData({ ...postData, message: e.target.value })}
            />
            <TextField
                id="tags"
                name="tags"
                variant="outlined"
                label="Tags"
                fullWidth
                value={postData.tags}
                onChange={(e) => setPostData({ ...postData, tags: e.target.value })}
            />
            <div className={styleClasses.fileInput}>
            <FileBase
                type="file"
                multiple={false}
                onDone={({base64}) => setPostData({ ...postData, selectedFile: base64})}
            />

            </div>

            <Button className={styleClasses.buttonSubmit} variant="contained" color="primary" size="large"  type="submit" fullWidth >
                Submit
            </Button>

            <Button variant="contained" color="secondary" size="small"  onClick={clear} fullWidth >
                Clear
            </Button>

            </form>
        </Paper>
    );
}

export default Form;