import React, { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch} from 'react-redux';

import { getPosts } from './actions/posts'
import memorecall from './images/memorecall.png'
import Posts from './components/posts/posts'
import Form from './components/form/form'
import useStyles from './styles'


const App = () => {
    const [currentId, setCurrentId] = useState(null);
    const styleClasses = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);

    return (
        <Container maxWidth="lg">
            <AppBar className={styleClasses.appBar} position="static" color="inherit">
                <Typography className={styleClasses.heading} varaint="h2" aligh="center">
                    MemoRecall
                </Typography>
                <img className={styleClasses.image} src={memorecall} alt="memorecall" height="60" />
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justifyContent= "space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts setCurrentId={setCurrentId} />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form currentId={currentId} setCurrentId={setCurrentId} />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    )
}

export default App;