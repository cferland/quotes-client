import React from 'react';
import './App.css';

import { Route } from 'react-router-dom';

import Home from './components/Home';
import Speakers from './components/Speaker';
import Quotes from './components/Quotes';
import CreateQuote from './components/CreateQuote';

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Home} />
      <Route exact path="/speakers" component={Speakers} />
      <Route exact path="/speakers/:id" component={Quotes} />
      <Route exact path="/speakers/:id/addquote" component={CreateQuote} />
    </div>
  );
}

export default App;
