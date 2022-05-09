import { AppBar, Container, Toolbar, IconButton, Typography, Button, Grid, } from '@mui/material';
import TourCards from "./TourCards";
import Box from '@mui/material/Box';
import MenuIcon from '@mui/icons-material/Menu';
import BasicModal from './Modaal';







function App() {

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
              <Button color='inherit' variant='outlined'>Log In </Button>
            </Box>
            <Button color='secondary' variant='contained'>Sign Up </Button>

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
