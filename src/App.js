import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';

import Discovery from './components/Discovery';
import DiscoveryBattle from './components/DiscoveryBattle';
import Popular from './components/Popular';
import PopularBattle from './components/PopularBattle';
import MyList from './components/MyList';

import './css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        {/* NavBar with RouterDom */}
        <Router>
          <nav className="navbar navbar-expand-sm navbar-light bg-light">
            <div className="navbar-brand">Moovice</div>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <Link to="/" className="nav-link">This week</Link>
                </li>
                <li className="nav-item">
                  <Link to="/battle/" className="nav-link">This week battle</Link>
                </li>
                <li className="nav-item">
                  <Link to="/popular/" className="nav-link">Popular</Link>
                </li>
                <li className="nav-item">
                  <Link to="/popular-battle/" className="nav-link">Popular battle</Link>
                </li>
                <li className="nav-item">
                  <Link to="/my-list/" className="nav-link">My list</Link>
                </li>
              </ul>
            </div>
          </nav>

          {/* Switch for links */}
          <Switch>
            <Route path="/battle/">
              <DiscoveryBattle />
            </Route>
            <Route path="/popular/">
              <Popular />
            </Route>
            <Route path="/popular-battle/">
              <PopularBattle />
            </Route>
            <Route path="/my-list/">
              <MyList />
            </Route>
            <Route path="/">
              <Discovery />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
