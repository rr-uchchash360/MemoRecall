import React from "react";
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import ThumbupAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import useStyles from './postStyles';


const Post = ({ post, setCurrentId }) => {
    const styleClasses = useStyles();
    return (
        <Card>
            <CardMedia className={styleClasses.media} image={post.selectedFile} title={post.title} />
            <div className={styleClasses.overlay}>
                <Typography variant="h6">{post.creator}</Typography>
                <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
            </div>
            <div className={styleClasses.overlay2}>
                <Button style={{color: 'white'}} size="small" onClick={() => setCurrentId(post._id)}>
                    <MoreHorizIcon fontSize="default" />
                </Button>
            </div>
            <div className={styleClasses.details}>
                <Typography variant="body2" color="textSecodary"> {post.tags.map((tag) => `#${tag} `)}</Typography>
            </div>

            <CardContent>
                <Typography className={styleClasses.title} variant="h5" gutterBottom>{post.message}</Typography>
            </CardContent>

            <CardActions className={styleClasses.cardActions}>
                <Button size="small" color="primary" onClick={() => {}}>
                    <ThumbupAltIcon fontSize="small" />
                    Like
                    {post.likeCount}
                </Button>
                <Button size="small" color="primary" onClick={() => {}}>
                    <DeleteIcon fontSize="small" />
                    Delete
                </Button>
            </CardActions>

        </Card>
    );
}

export default Post;