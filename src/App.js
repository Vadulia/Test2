import { AppBar, Container, Toolbar, IconButton, Typography, TextField, Button, Grid, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, } from '@mui/material';
import TourCards from "./TourCards";
import Box from '@mui/material/Box';
import MenuIcon from '@mui/icons-material/Menu';
import BasicModal from './Modaal';
import { TextFieldsRounded } from '@mui/icons-material';
import React from 'react';
import ClickAwayListener from './Drop';







function App() {

  const [open, setOpen] = React.useState(false);

  const handelClickOpen =() => {
    setOpen (true);
  }
  const handelClose =() => {
    setOpen (false);
  }

  return (
    <>
      <AppBar position='fixed'>
        <Container fixed>
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu" >
              <MenuIcon />
            </IconButton>
            <Typography variant='h6' sx={{ flexGrow: 1 }}> Test Project</Typography>
            <BasicModal />
            <Box mr={3}>
              <Button color='inherit' variant='outlined' onClick={handelClickOpen}>Log In </Button>
            </Box>
            <Button color='secondary' variant='contained'>Sign Up </Button>
            <ClickAwayListener />
            

            <Dialog open={open} onClose={handelClose} aria-labelledby="form-dialog-title">
            <DialogTitle id= 'from-dialog-title'>Log In </DialogTitle>
            <DialogContent>
            <DialogContentText>Log in to see</DialogContentText>
            <TextField
              autoFocus
              margin = 'dense'
              id='name'
              label='Email Adress'
              type='email'
              fullWidth
              />

             <TextField
              autoFocus
              margin = 'dense'
              id='pass'
              label='Password'
              type='password'
              fullWidth
              />

            </DialogContent>
            <DialogActions>
              <button onClick={handelClose} color='primary'> Cancel</button>
              <button onClick={handelClose} color='primary'> Log In</button>
            </DialogActions>



            </Dialog>
          </Toolbar>
        </Container>
      </AppBar>



      <div className='App'>
        <Container sx={{ marginY: 15 }}>
          <Grid container spacing={2.5}>
            <TourCards />
            <TourCards />
            <TourCards />
            <TourCards />
          </Grid>
        </Container>
      </div>




    </>
  )
};
export default App;
