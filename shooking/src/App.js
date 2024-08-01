import React from 'react';
import './App.css';
import {FaShoppingCart} from 'react-icons/fa'; // 쇼핑카트

import React from 'react';
import { BrowserRouter as Router, Route, Svitch } from 'react-router-dom';
import ProductList from './ProductList'; //상품 목록 페이지
import CardPayment from './CardPayment';



function App() {

  return (
    <Router>
      <Switch>
        <Route path="/" exact component={ProductList} />
        <Route path="/payment" component={CardPayment} />
      </Switch>
    </Router>
  );
}

export default App;
