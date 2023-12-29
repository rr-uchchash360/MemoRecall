import React from 'react';
import { Container, AppBar, Typography, Grow } from '@material-ui/core';

import memorecall from './images/memorecall.png'

const App = () => {
    return (
        <Container maxWidth="lg">
            <AppBar position="static" color="inherit">
                <Typography varaint="h2" aligh="center">
                    MemoRecall
                </Typography>
                <img src={memorecall} alt="memorecall" height="300" />
            </AppBar>
        </Container>
    )
}

export default App;