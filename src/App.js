import React from 'react';
import './App.css';
import Post from './Components/FriendsPost/Post';
import { BrowserRouter as Router, Switch,Route } from 'react-router-dom';
import Details from './Components/Details/Details';
import Header from './Components/Header/Header';


function App() {
  return (
    <div>
      <Header></Header>
    <Router>
      <Switch>
        <Route path="/post">
          <Post></Post>
        </Route>
        <Route path="/posts/:NewId">
          <Details></Details>
        </Route>
        <Route exact path="/">
          <Post></Post>
        </Route>
        <Route path="*">
          <Post></Post>
        </Route>
      </Switch>
    </Router>
    </div>
    );
}

export default App;
