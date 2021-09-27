import React from 'react';
import { Route,Switch } from "react-router-dom";
import Blog from '../components/Blog/Blog';

import Home from '../components/Home/Home';

function Approuter(){
  return(
      <>
      <Switch>
          <Route exact path="/">
                <Home />
          </Route>
          <Route exact path="/blog/:id">
              <Blog />
          </Route>
      </Switch>
      </>
  )
}

export default Approuter