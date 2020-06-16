import React from 'react';
import { Route } from 'react-router-dom';

import MainPage from 'src/components/MainPage';
import People from 'src/components/People';
import Films from 'src/components/Films';
import Planets from 'src/components/Planets';
import Species from 'src/components/Species';
import Starships from 'src/components/Starships';
import Search from 'src/components/Search';

import 'src/App.scss';

const App = () => {
  return (
    <>
      <Route exact path="/" component={MainPage} />
      <Route exact path="/people/:resource/:id" component={People} />
      <Route exact path="/search" component={Search} />
      <Route exact path="/films/:resource/:id" component={Films} />
      <Route exact path="/planets/:resource/:id" component={Planets} />
      <Route exact path="/species/:resource/:id" component={Species} />
      <Route exact path="/starships/:resource/:id" component={Starships} />
    </>
  );
};

export default App;
