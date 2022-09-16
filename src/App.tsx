import React from 'react';
import { Link, Route } from 'react-router-dom'
import './App.css';
import Board from './components/Board';
import OtherPage from './components/OtherPage';
import OtherPage2 from './components/OtherPage2';
function App() {




  return (
    <>

      <h1>
      <Link to ="/Board">Board</Link><br/>
      <Link to ="/OtherPage">OtherPage</Link> <br/>
      <Link to ="/OtherPage2">OtherPage2</Link>

      </h1>

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
