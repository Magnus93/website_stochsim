import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Menu from './Components/Menu';
import Home from './Components/Home';
import Manuals from './Components/Manuals';
import Software from './Components/Software';
import Examples from './Components/Examples';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <div className="App">
            <div className='menuArea'>
              <Menu/>
            </div>
            <div className="viewArea">
              <Route path={"/homepage/home"} exact component={Home} />
              <Route path={"/homepage/stochsim_software"} component={Software} />
              <Route path={"/homepage/stochsim_and_statres_manuels"} component={Manuals} />
              <Route path={"/homepage/example_models"} component={Examples} />
            </div>
          </div>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
