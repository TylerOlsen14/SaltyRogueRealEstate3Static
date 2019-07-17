import React from 'react';
import { Switch, Route } from 'react-router-dom';

import About from '../routes/about'
import Contact from '../routes/contact'
import Home from '../routes/home'
import LaurelStreet from '../routes/LaurelStreet'
import EmmaStreet from '../routes/EmmaStreet'

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/contact' component={Contact} />
      <Route path='/about' component={About} />
      <Route path='/EmmaStreet' component={EmmaStreet} />
      <Route path='/LaurelStreet' component={LaurelStreet} />
    </Switch>
  </main>
)

export default Main;