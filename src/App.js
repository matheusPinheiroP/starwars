import React from 'react';
import './css/App.css';

import Main from './pages';
import PeopleInfo from './components/PeopleInfo';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/people/" component={PeopleInfo} />
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
