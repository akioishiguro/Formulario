import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Formulario from '../pages/Form';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Formulario} />
  </Switch>
);

export default Routes;
