import { AppBar, Button, Toolbar, Typography} from '@mui/material';
import React from 'react';
import { Link, Route } from 'react-router-dom'
import './App.css';
import Board from './components/Board';
import OtherPage from './components/OtherPage';
import OtherPage2 from './components/AnotherPage';
function App() {




  return (
    <>
      <AppBar position='static'>
        <Toolbar style = {{display:'flex', justifyContent:'center'}}>
          <Button>

            <Link to="/Board" style={{ color: 'white' }}>
            <Typography variant='h5'> Game Of Life</Typography>
              </Link>

          </Button>
          <Button style={{ color: 'white' }}>
            <Link to="/OtherPage" style={{ color: 'white' }}>
            <Typography variant='h5'> Other Page</Typography>
              </Link> <br />

          </Button>

          <Button style={{ color: 'white' }}>
            <Link to="/OtherPage2" style={{ color: 'white' }}>
            <Typography variant='h5'> Another Page</Typography>

              </Link>

          </Button>
        </Toolbar>
      </AppBar>


    <br/>
      <Route path="/Board">
        <Board />
      </Route>
      <Route path="/OtherPage2">
        <OtherPage2 />
      </Route>

      <Route path="/OtherPage">
        <OtherPage />
      </Route>

    </>
  );
}

export default App;
