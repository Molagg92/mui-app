import React from 'react';
import { Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container} from '@mui/material';
import { PhotoCamera } from '@material-ui/icons';

const App = () => {
    return (
      <>
        <CssBaseline />
        <AppBar position="relative">
          <Toolbar>
            <PhotoCamera />
            <Typography variant="h6">
                Photo Album
            </Typography>
      
          </Toolbar>
        </AppBar>
        <main>
          <div>
            <Container maxWidth="sm">
              <Typography variant="h2" align="center" color="textPrimary">

              </Typography>
            </Container>
          </div>
        </main>
      </>
    );
}

export default App;