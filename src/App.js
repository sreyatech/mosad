import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import './App.scss';
import Home from './component/home/Home'
import MovieDetail from './component/movieDetail/MovieDetail'
import PageNotFound from './component/pageNotFound/PageNotFound'
import Header from './component/header/Header'
import Footer from './component/footer/Footer'

function App() {
return (
<div className="App">
  <Router>
    <Header />
    <div className="container">
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/movie/:imdbID" component={MovieDetail} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
    <Footer />
  </Router>
</div>
);
}

export default App;