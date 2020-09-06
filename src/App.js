import React from 'react';
import './App.css';
import Post from './Components/FriendsPost/Post';
import { BrowserRouter as Router, Switch,Route } from 'react-router-dom';
import Details from './Components/Details/Details';
import Header from './Components/Header/Header';
import NotFound from './Components/NotFound/NotFound';


 function App() {

  return (
    <div>
      <Header></Header>
    <Router>
      <Switch>
        <Route path="/post">
          <Post></Post>
        </Route>
        <Route path="/posts/:postId">
          <Details></Details>
        </Route>
        <Route exact path="/">
          <Post></Post>
        </Route>
        <Route path="*">
          <NotFound></NotFound>
        </Route>
      </Switch>
    </Router>
    </div>
    );
}

export default App;
