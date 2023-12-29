import React from "react";
import { useSelector } from 'react-redux';

import Post from './post/post';
import useStyles from './postsStyles';


const Posts = () => {
    const posts = useSelector((state) => state.posts);
    const styleClasses = useStyles();

    console.log(posts);

    return (
        <>
            <h1>posts</h1>
            <Post />
            <Post />
        </>
        
    );
}

export default Posts;