import './App.scss';
import ProductsPage from './components/products/ProductsPage';
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import CompletedBuy from './components/CompletedBuy';
import { HostedFieldsPage } from './components/hosted-fields/HostedFieldsPage';
import React from 'react';

function App() {

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact>
            <ProductsPage />
          </Route>
          <Route path="/hosted" >
            <HostedFieldsPage />
          </Route>
          <Route path="/completed-buy">
            <CompletedBuy />
          </Route>

          <Route path='/test'>
            <div className='test'>
              <a href="http://localhost:3000/completed-buy"> test redirect </a>
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
