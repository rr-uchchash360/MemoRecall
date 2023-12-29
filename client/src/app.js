import React, { useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch} from 'react-redux';

import { getPosts } from './actions/posts'
import memorecall from './images/memorecall.png'
import Posts from './components/posts/posts'
import Form from './components/form/form'
import useStyles from './styles'


const App = () => {
    const styleClasses = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);

    return (
        <Container maxWidth="lg">
            <AppBar className={styleClasses.appBar} position="static" color="inherit">
                <Typography classname={styleClasses.heading} varaint="h2" aligh="center">
                    MemoRecall
                </Typography>
                <img className={styleClasses.image} src={memorecall} alt="memorecall" height="60" />
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify= "space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    )
}

export default App;