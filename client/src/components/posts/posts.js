import React from "react";
import Post from './post/post';
import useStyles from './postsStyles';


const Posts = () => {
    const styleClasses = useStyles();
    return (
        <>
            <h1>posts</h1>
            <Post />
            <Post />
        </>
        
    );
}

export default Posts;