import React from 'react';
import ReactDOM from 'react-dom';
import './Styles/index.css';
import App from './Components/App';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import BaseLayout from './Components/Layout.js';
import Wares from './Components/Wares';
import shopInventory  from "./Data/data.js";

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <BrowserRouter>
    <BaseLayout>
      <div>
        <Switch>
          <Route exact path="/" component={App}/>
          <Route path="/wares" component={Wares}/>
          {/* <Route path="/spells" component={Spells}/>
          <Route path="/potions" component={Potions}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/about" component={About} /> */}
        </Switch>
      </div>
    </BaseLayout>
  </BrowserRouter>




  , document.getElementById('root'));
registerServiceWorker();
