import React from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';

import memorecall from './images/memorecall.png'
import Posts from './components/posts/posts'
import Form from './components/form/form'
import useStyles from './styles';

const App = () => {
    const styleClasses = useStyles();
    return (
        <Container maxWidth="lg">
            <AppBar className={styleClasses.appBar} position="static" color="inherit">
                <Typography className={styleClasses.heading} varaint="h2" aligh="center">
                    MemoRecall
                </Typography>
                <img src={memorecall} alt="memorecall" height="75" />
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