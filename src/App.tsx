import { AppBar, Button, Toolbar} from '@mui/material';
import React from 'react';
import { Link, Route } from 'react-router-dom'
import './App.css';
import Board from './components/Board';
import OtherPage from './components/OtherPage';
import OtherPage2 from './components/OtherPage2';
function App() {




  return (
    <>
      <AppBar position='static'>
        <Toolbar style = {{display:'flex', justifyContent:'center'}}>
          <Button>

            <Link to="/Board" style={{ color: 'white' }}>Board</Link><br />

          </Button>
          <Button style={{ color: 'white' }}>
            <Link to="/OtherPage" style={{ color: 'white' }}>OtherPage</Link> <br />

          </Button>

          <Button style={{ color: 'white' }}>
            <Link to="/OtherPage2" style={{ color: 'white' }}>OtherPage2</Link>

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
