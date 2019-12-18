import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';

import SongList from './components/SongList'
import AddSong from './components/AddSong'
import SongDetail from './components/SongDetail'

function App() {
  return (
    <div className="container">
      <Router>
        <Switch>
          <Route exact path="/">
            <SongList/>
          </Route>
          <Route path="/songs/new">
            <AddSong/>
          </Route>
          <Route path="/songs/:id">
            <SongDetail/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
