/*
import './App.css';
import Header from './component/Header';
import AddCustomer from './component/AddCustomer';
import {BrowserRouter as Router, Route} from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
      <Header/>

        <Route path = "/add" exact component = {AddCustomer} />

      
    </div>
    </Router>
  );
}

export default App;


*/





import React from 'react';
import Header from './component/Header';
import AddCustomer from './component/AddCustomer';
import AllCustomers from './component/AllCustomers';

function App() {
  const isFetchRoute = window.location.pathname === '/fetch';
  const isAddRoute = window.location.pathname === '/add';

  return (
    <div className="App">
      <Header />
      {isFetchRoute ? <AllCustomers /> : null}
      {isAddRoute ? <AddCustomer /> : null}
    </div>
  );
}

export default App;



//correct one above

/*

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './component/Header';
import AddCustomer from './component/AddCustomer';
import AllCustomers from './component/AllCustomers';

function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <Switch>
                    <Route path="/add" component={AddCustomer} />
                    <Route path="/" component={AllCustomers} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;

*/
